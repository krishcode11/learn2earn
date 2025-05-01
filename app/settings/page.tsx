'use client';

import { useState } from 'react';
import { useSettingsStore } from '../services/settings-service';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function SettingsPage() {
  const { settings, updateProfile, updateNotifications, updateAppearance, updateSecurity } = useSettingsStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Here you would typically make an API call to update the profile
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error('Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold">Settings</h1>

                {/* Profile Settings */}
                  <Card>
                    <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
          <form onSubmit={handleProfileUpdate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Display Name</label>
              <Input
                value={settings.profile.displayName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateProfile({ displayName: e.target.value })}
                placeholder="Enter your display name"
                            />
                          </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                              type="email"
                value={settings.profile.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateProfile({ email: e.target.value })}
                placeholder="Enter your email"
                            />
                          </div>
            <div>
              <label className="block text-sm font-medium mb-1">Bio</label>
              <Textarea
                value={settings.profile.bio}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateProfile({ bio: e.target.value })}
                placeholder="Tell us about yourself"
                          />
                        </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Save Changes'}
            </Button>
          </form>
                    </CardContent>
                  </Card>

                {/* Notification Settings */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                    </CardHeader>
        <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Email Notifications</h3>
              <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                          </div>
            <Switch
              checked={settings.notifications.email}
              onCheckedChange={(checked: boolean) => updateNotifications({ email: checked })}
                          />
                        </div>
                        <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Push Notifications</h3>
              <p className="text-sm text-muted-foreground">Receive push notifications</p>
                          </div>
            <Switch
              checked={settings.notifications.push}
              onCheckedChange={(checked: boolean) => updateNotifications({ push: checked })}
                          />
                        </div>
                        <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Achievement Notifications</h3>
              <p className="text-sm text-muted-foreground">Get notified about achievements</p>
                          </div>
            <Switch
              checked={settings.notifications.achievements}
              onCheckedChange={(checked: boolean) => updateNotifications({ achievements: checked })}
                          />
                        </div>
                        <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Reward Notifications</h3>
              <p className="text-sm text-muted-foreground">Get notified about rewards</p>
                          </div>
            <Switch
              checked={settings.notifications.rewards}
              onCheckedChange={(checked: boolean) => updateNotifications({ rewards: checked })}
            />
                      </div>
                    </CardContent>
                  </Card>

                {/* Appearance Settings */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Appearance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Theme</label>
              <Select
                value={settings.appearance.theme}
                onValueChange={(value: 'light' | 'dark' | 'system') => updateAppearance({ theme: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                {/* Security Settings */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Security</CardTitle>
                    </CardHeader>
        <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground">Enable 2FA for additional security</p>
            </div>
            <Switch
              checked={settings.security.twoFactorEnabled}
              onCheckedChange={(checked: boolean) => updateSecurity({ twoFactorEnabled: checked })}
            />
                          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Privacy Level</label>
            <Select
              value={settings.security.privacyLevel}
              onValueChange={(value: 'public' | 'private' | 'friends') => updateSecurity({ privacyLevel: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select privacy level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="friends">Friends Only</SelectItem>
              </SelectContent>
            </Select>
                        </div>
                        <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Security Notifications</h3>
              <p className="text-sm text-muted-foreground">Get notified about security events</p>
            </div>
            <Switch
              checked={settings.security.securityNotifications}
              onCheckedChange={(checked: boolean) => updateSecurity({ securityNotifications: checked })}
            />
                  </div>
                </CardContent>
              </Card>
    </div>
  );
} 