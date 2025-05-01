'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Github,
  MessageSquare,
  Calendar,
  Mail,
  Share2,
  Code,
  Bell,
  Settings,
} from 'lucide-react';

interface Integration {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  icon: React.ReactNode;
  status: 'connected' | 'disconnected' | 'pending';
}

export function IntegrationSettings() {
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: 'github',
      title: 'GitHub Integration',
      description: 'Connect your GitHub account to track projects',
      enabled: false,
      icon: <Github className="h-5 w-5" />,
      status: 'disconnected',
    },
    {
      id: 'discord',
      title: 'Discord Integration',
      description: 'Join our community on Discord',
      enabled: false,
      icon: <MessageSquare className="h-5 w-5" />,
      status: 'disconnected',
    },
    {
      id: 'calendar',
      title: 'Calendar Integration',
      description: 'Sync your learning schedule',
      enabled: false,
      icon: <Calendar className="h-5 w-5" />,
      status: 'disconnected',
    },
    {
      id: 'email',
      title: 'Email Notifications',
      description: 'Receive updates via email',
      enabled: true,
      icon: <Mail className="h-5 w-5" />,
      status: 'connected',
    },
  ]);

  const handleToggle = (id: string) => {
    setIntegrations((prev) =>
      prev.map((integration) =>
        integration.id === id
          ? {
              ...integration,
              enabled: !integration.enabled,
              status: !integration.enabled ? 'pending' : 'disconnected',
            }
          : integration
      )
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Integrations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="connections" className="space-y-6">
          <TabsList>
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="sharing">Sharing</TabsTrigger>
          </TabsList>

          <TabsContent value="connections">
            <div className="space-y-6">
              {integrations.map((integration) => (
                <Card key={integration.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          {integration.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{integration.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {integration.description}
                          </p>
                          {integration.status === 'connected' && (
                            <span className="text-xs text-green-500 mt-2 block">
                              Connected
                            </span>
                          )}
                          {integration.status === 'pending' && (
                            <span className="text-xs text-yellow-500 mt-2 block">
                              Pending Connection
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={integration.enabled}
                          onCheckedChange={() => handleToggle(integration.id)}
                        />
                        {integration.enabled && integration.status === 'disconnected' && (
                          <Button variant="outline" size="sm">
                            Connect
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="notifications">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Notification Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Course Updates</span>
                        <p className="text-sm text-muted-foreground">
                          Get notified about new course content
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Community Activity</span>
                        <p className="text-sm text-muted-foreground">
                          Receive updates about community events
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Achievement Alerts</span>
                        <p className="text-sm text-muted-foreground">
                          Get notified when you earn rewards
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sharing">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Social Sharing</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Share Achievements</span>
                        <p className="text-sm text-muted-foreground">
                          Share your learning milestones on social media
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Share Projects</span>
                        <p className="text-sm text-muted-foreground">
                          Share your completed projects with the community
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Share Progress</span>
                        <p className="text-sm text-muted-foreground">
                          Share your learning progress with friends
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
} 