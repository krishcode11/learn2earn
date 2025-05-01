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
import { FileText, Mail, Calendar, Scale } from 'lucide-react';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: [
      'By accessing or using Learn2Earn, you agree to be bound by these Terms of Service.',
      'You must be at least 18 years old to use our services.',
      'You are responsible for maintaining the security of your account.',
      'You agree to provide accurate and complete information.',
      'You will not use our services for any illegal purposes.',
    ],
  },
  {
    title: 'User Accounts',
    content: [
      'You are responsible for all activities under your account.',
      'You must maintain the security of your login credentials.',
      'You must notify us immediately of any unauthorized access.',
      'We reserve the right to suspend or terminate accounts.',
      'You can delete your account at any time.',
    ],
  },
  {
    title: 'Intellectual Property',
    content: [
      'All content on Learn2Earn is protected by copyright.',
      'You may not copy or distribute our content without permission.',
      'You retain rights to your user-generated content.',
      'You grant us license to use your content on our platform.',
      'We respect intellectual property rights of others.',
    ],
  },
  {
    title: 'Token and Rewards',
    content: [
      'L2E tokens are earned through platform participation.',
      'Token rewards are subject to platform rules and conditions.',
      'We reserve the right to modify reward structures.',
      'Tokens are non-refundable and non-transferable.',
      'Token value may fluctuate based on market conditions.',
    ],
  },
  {
    title: 'Prohibited Activities',
    content: [
      'No unauthorized access to our systems.',
      'No manipulation of token rewards or achievements.',
      'No harassment or abusive behavior.',
      'No spamming or automated content generation.',
      'No violation of applicable laws or regulations.',
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      'We provide our services "as is" without warranties.',
      'We are not liable for indirect or consequential damages.',
      'Our liability is limited to the amount you paid us.',
      'We are not responsible for third-party content.',
      'You use our services at your own risk.',
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <BackButton />
              <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Last updated: March 15, 2024
            </p>
          </div>

          {/* Introduction */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>Welcome to Learn2Earn</CardTitle>
              <CardDescription>
                These Terms of Service govern your use of the Learn2Earn platform.
                Please read them carefully before using our services.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Terms Sections */}
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
                If you have any questions about these terms, please contact our legal team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-8 w-8 text-mint-400" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">legal@learn2earn.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="h-8 w-8 text-mint-400" />
                  <div>
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="text-sm text-muted-foreground">Within 72 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Scale className="h-8 w-8 text-mint-400" />
                  <div>
                    <h3 className="font-semibold">Legal Department</h3>
                    <p className="text-sm text-muted-foreground">legal@learn2earn.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>Terms Updates</CardTitle>
              <CardDescription>
                We may update these terms from time to time. We will notify you of any
                changes by posting the new terms on this page and updating the "Last updated" date.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="mint" size="lg">
                Download Terms of Service
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 