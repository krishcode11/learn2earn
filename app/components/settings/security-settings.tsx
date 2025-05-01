'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Shield,
  Lock,
  UserCog,
  Bell,
  Eye,
  Key,
  QrCode,
  Users,
  FileCheck,
} from 'lucide-react';

interface SecuritySetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  icon: React.ReactNode;
}

export function SecuritySettings() {
  const [settings, setSettings] = useState<SecuritySetting[]>([
    {
      id: '2fa',
      title: 'Two-Factor Authentication',
      description: 'Add an extra layer of security to your account',
      enabled: false,
      icon: <Key className="h-5 w-5" />,
    },
    {
      id: 'privacy',
      title: 'Privacy Settings',
      description: 'Control who can see your profile and activity',
      enabled: true,
      icon: <Eye className="h-5 w-5" />,
    },
    {
      id: 'notifications',
      title: 'Security Notifications',
      description: 'Get notified about security-related activities',
      enabled: true,
      icon: <Bell className="h-5 w-5" />,
    },
  ]);

  const handleToggle = (id: string) => {
    setSettings((prev) =>
      prev.map((setting) =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Security & Privacy
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="security" className="space-y-6">
          <TabsList>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>

          <TabsContent value="security">
            <div className="space-y-6">
              {settings.map((setting) => (
                <Card key={setting.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          {setting.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{setting.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {setting.description}
                          </p>
                        </div>
                      </div>
                      <Switch
                        checked={setting.enabled}
                        onCheckedChange={() => handleToggle(setting.id)}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="space-y-4">
                <h3 className="font-semibold">Role-Based Access Control</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4" />
                        <span className="font-medium">User Roles</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Admin</span>
                          <span className="text-xs text-muted-foreground">Full access</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Moderator</span>
                          <span className="text-xs text-muted-foreground">Content management</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">User</span>
                          <span className="text-xs text-muted-foreground">Basic access</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="h-4 w-4" />
                        <span className="font-medium">Permissions</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Content Management</span>
                          <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">User Management</span>
                          <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Analytics Access</span>
                          <Switch />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="privacy">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Profile Visibility</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Public Profile</span>
                        <p className="text-sm text-muted-foreground">
                          Allow others to view your profile
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Activity Status</span>
                        <p className="text-sm text-muted-foreground">
                          Show when you're active on the platform
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Learning Progress</span>
                        <p className="text-sm text-muted-foreground">
                          Share your learning achievements
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="compliance">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileCheck className="h-5 w-5" />
                    <h3 className="font-semibold">Compliance Reports</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                      <div>
                        <span className="font-medium">Data Protection</span>
                        <p className="text-sm text-muted-foreground">
                          GDPR compliance status
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Report
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                      <div>
                        <span className="font-medium">Content Moderation</span>
                        <p className="text-sm text-muted-foreground">
                          Community guidelines compliance
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Report
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                      <div>
                        <span className="font-medium">Security Audit</span>
                        <p className="text-sm text-muted-foreground">
                          Latest security assessment
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Report
                      </Button>
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