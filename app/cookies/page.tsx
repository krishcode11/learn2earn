'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { BackButton } from '../components/ui/back-button';
import { Cookie, Settings, Shield, Mail } from 'lucide-react';

const cookieTypes = [
  {
    title: 'Essential Cookies',
    description: 'Required for basic platform functionality',
    examples: [
      'Authentication cookies',
      'Session management',
      'Security features',
      'Basic preferences',
    ],
  },
  {
    title: 'Analytics Cookies',
    description: 'Help us understand how users interact with our platform',
    examples: [
      'Page views and navigation',
      'Feature usage statistics',
      'Performance monitoring',
      'Error tracking',
    ],
  },
  {
    title: 'Preference Cookies',
    description: 'Remember your settings and preferences',
    examples: [
      'Language preferences',
      'Theme settings',
      'Notification preferences',
      'Display options',
    ],
  },
  {
    title: 'Marketing Cookies',
    description: 'Used to deliver relevant content and advertisements',
    examples: [
      'Ad performance tracking',
      'Content recommendations',
      'Social media integration',
      'Campaign effectiveness',
    ],
  },
];

const cookieManagement = [
  {
    title: 'Browser Settings',
    description: 'You can control cookies through your browser settings',
    steps: [
      'Open your browser settings',
      'Navigate to privacy or security settings',
      'Find cookie management options',
      'Adjust settings according to your preferences',
    ],
  },
  {
    title: 'Platform Settings',
    description: 'Manage cookies directly through our platform',
    steps: [
      'Access your account settings',
      'Go to privacy preferences',
      'Select cookie preferences',
      'Save your changes',
    ],
  },
];

export default function CookiesPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <BackButton />
              <h1 className="text-4xl font-bold tracking-tight">Cookie Policy</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Last updated: March 15, 2024
            </p>
          </div>

          {/* Introduction */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>About Our Use of Cookies</CardTitle>
              <CardDescription>
                We use cookies to enhance your experience on Learn2Earn. This policy explains
                how we use cookies and how you can control them.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Cookie Types */}
          <div className="grid gap-8">
            <h2 className="text-3xl font-bold">Types of Cookies We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cookieTypes.map((type, index) => (
                <Card key={index} className="group hover:border-mint-400/50 transition-colors">
                  <CardHeader>
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex}>{example}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cookie Management */}
          <div className="grid gap-8">
            <h2 className="text-3xl font-bold">Managing Your Cookie Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cookieManagement.map((method, index) => (
                <Card key={index} className="group hover:border-mint-400/50 transition-colors">
                  <CardHeader>
                    <CardTitle>{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      {method.steps.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cookie Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Cookie Settings</CardTitle>
              <CardDescription>
                Customize your cookie preferences for Learn2Earn.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Shield className="h-8 w-8 text-mint-400" />
                    <div>
                      <h3 className="font-semibold">Essential Cookies</h3>
                      <p className="text-sm text-muted-foreground">Required for platform functionality</p>
                    </div>
                  </div>
                  <Button variant="outline" disabled>Always On</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Settings className="h-8 w-8 text-mint-400" />
                    <div>
                      <h3 className="font-semibold">Analytics Cookies</h3>
                      <p className="text-sm text-muted-foreground">Help us improve our platform</p>
                    </div>
                  </div>
                  <Button variant="mint">Enable</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Cookie className="h-8 w-8 text-mint-400" />
                    <div>
                      <h3 className="font-semibold">Marketing Cookies</h3>
                      <p className="text-sm text-muted-foreground">Personalize your experience</p>
                    </div>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>Questions About Cookies?</CardTitle>
              <CardDescription>
                If you have any questions about our use of cookies, please contact us.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Mail className="h-8 w-8 text-mint-400" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">privacy@learn2earn.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 