'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Users,
  BookOpen,
  BarChart,
  Code,
  Shield,
  Zap,
  Clock,
  CheckCircle,
} from 'lucide-react';

const features = [
  {
    title: 'Team Learning',
    description: 'Enable collaborative learning with team-based progress tracking and shared resources.',
    icon: Users,
    benefits: [
      'Team progress dashboard',
      'Shared learning resources',
      'Team challenges and competitions',
      'Progress synchronization',
    ],
  },
  {
    title: 'Custom Courses',
    description: 'Create tailored learning paths specific to your organization\'s needs.',
    icon: BookOpen,
    benefits: [
      'Custom content creation',
      'Branded learning materials',
      'Internal knowledge base',
      'Custom assessments',
    ],
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track team performance and learning outcomes with detailed analytics.',
    icon: BarChart,
    benefits: [
      'Team performance metrics',
      'Learning progress tracking',
      'Skill gap analysis',
      'ROI reporting',
    ],
  },
  {
    title: 'API Integration',
    description: 'Seamlessly integrate with your existing systems and tools.',
    icon: Code,
    benefits: [
      'RESTful API access',
      'Webhook support',
      'Custom integrations',
      'Data synchronization',
    ],
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$999',
    period: 'month',
    features: [
      'Up to 50 team members',
      'Basic analytics',
      'Standard support',
      'API access',
    ],
  },
  {
    name: 'Professional',
    price: '$2,999',
    period: 'month',
    features: [
      'Up to 200 team members',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'month',
    features: [
      'Unlimited team members',
      'Custom analytics',
      '24/7 dedicated support',
      'White-label solution',
    ],
  },
];

export default function EnterprisePage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empower your team with customized learning solutions and advanced analytics
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Enterprise Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>SSO Integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Role-based Access Control</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Data Encryption</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Compliance Reporting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>99.9% Uptime</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Global CDN</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Scalable Infrastructure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Real-time Analytics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="features">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <feature.icon className="h-5 w-5" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pricing">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <Card key={plan.name}>
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6">Get Started</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Company Name</label>
                      <input
                        type="text"
                        className="w-full mt-1 p-2 rounded-md border"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Contact Name</label>
                      <input
                        type="text"
                        className="w-full mt-1 p-2 rounded-md border"
                        placeholder="Enter contact name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full mt-1 p-2 rounded-md border"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      className="w-full mt-1 p-2 rounded-md border"
                      rows={4}
                      placeholder="Tell us about your needs"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 