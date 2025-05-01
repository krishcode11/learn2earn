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
import { Shield, Mail, Calendar } from 'lucide-react';

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'Personal information (name, email, wallet address)',
      'Learning progress and achievements',
      'Token transactions and rewards',
      'Community interactions and contributions',
      'Device and usage information',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'Provide and improve our services',
      'Process token rewards and transactions',
      'Personalize your learning experience',
      'Communicate with you about updates and features',
      'Ensure platform security and prevent fraud',
    ],
  },
  {
    title: 'Information Sharing',
    content: [
      'We do not sell your personal information',
      'Share with service providers who assist our operations',
      'Comply with legal obligations',
      'Protect our rights and prevent fraud',
      'With your consent for specific purposes',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'Industry-standard encryption for data protection',
      'Regular security audits and updates',
      'Secure storage of personal information',
      'Access controls and authentication measures',
      'Regular backups and disaster recovery',
    ],
  },
  {
    title: 'Your Rights',
    content: [
      'Access your personal information',
      'Correct inaccurate data',
      'Request deletion of your data',
      'Opt-out of marketing communications',
      'Export your data in a portable format',
    ],
  },
  {
    title: 'Cookies and Tracking',
    content: [
      'Essential cookies for platform functionality',
      'Analytics cookies to improve our services',
      'Preference cookies for personalization',
      'Marketing cookies for relevant content',
      'Options to manage cookie preferences',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <BackButton />
              <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Last updated: Apirl 15, 2025
            </p>
          </div>

          {/* Introduction */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>Our Commitment to Privacy</CardTitle>
              <CardDescription>
                At Learn2Earn, we take your privacy seriously. This policy describes how we collect,
                use, and protect your personal information when you use our platform.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Privacy Sections */}
          <div className="grid gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="group hover:border-mint-400/50 transition-colors">
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                If you have any questions about our privacy policy or data practices,
                please contact our privacy team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-8 w-8 text-mint-400" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">privacy@learn2earn.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="h-8 w-8 text-mint-400" />
                  <div>
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="text-sm text-muted-foreground">Within 48 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Shield className="h-8 w-8 text-mint-400" />
                  <div>
                    <h3 className="font-semibold">Data Protection Officer</h3>
                    <p className="text-sm text-muted-foreground">dpo@learn2earn.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>Policy Updates</CardTitle>
              <CardDescription>
                We may update this privacy policy from time to time. We will notify you of any
                changes by posting the new policy on this page and updating the "Last updated" date.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="mint" size="lg">
                Download Privacy Policy
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 