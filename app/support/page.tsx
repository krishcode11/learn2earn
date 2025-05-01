'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  HelpCircle,
  MessageSquare,
  Book,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MessageCircle,
} from 'lucide-react';

const SAMPLE_FAQS = [
  {
    id: '1',
    question: 'How do I earn L2E tokens?',
    answer:
      'You can earn L2E tokens by completing courses, participating in community discussions, and achieving learning milestones. Each course completion rewards you with a specific amount of tokens based on the course difficulty and length.',
  },
  {
    id: '2',
    question: 'How do I connect my wallet?',
    answer:
      'To connect your wallet, click on the "Connect Wallet" button in the top navigation bar. We support MetaMask, WalletConnect, and other popular Web3 wallets. Make sure you have one of these wallets installed in your browser.',
  },
  {
    id: '3',
    question: 'Can I withdraw my earned tokens?',
    answer:
      'Yes, you can withdraw your earned L2E tokens to your connected wallet. Go to your profile page, click on the "Rewards" tab, and use the withdraw button. Note that there may be network fees associated with the withdrawal.',
  },
  {
    id: '4',
    question: 'How do I track my learning progress?',
    answer:
      'Your learning progress is automatically tracked in your dashboard. You can view your completed courses, current enrollments, and achievements. The dashboard also shows your learning streak and total earned rewards.',
  },
];

const SAMPLE_HELP_RESOURCES = [
  {
    id: '1',
    title: 'Getting Started Guide',
    description: 'Learn the basics of using Learn2Earn',
    icon: Book,
    link: '/guides/getting-started',
  },
  {
    id: '2',
    title: 'Wallet Connection Guide',
    description: 'How to connect and manage your wallet',
    icon: Book,
    link: '/guides/wallet-connection',
  },
  {
    id: '3',
    title: 'Token Economics',
    description: 'Understanding L2E token mechanics',
    icon: Book,
    link: '/guides/token-economics',
  },
];

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState('faq');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-8">
        {/* Header */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight">Support</h1>
            <p className="text-xl text-muted-foreground">
              Get help and find answers to your questions.
            </p>
        </div>

        {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
              <TabsTrigger value="resources">Help Resources</TabsTrigger>
          </TabsList>

            {/* FAQ Tab */}
            <TabsContent value="faq" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Find answers to common questions about Learn2Earn.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {SAMPLE_FAQS.map((faq) => (
                      <Card key={faq.id}>
                        <CardHeader
                          className="cursor-pointer"
                          onClick={() =>
                            setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                          }
                        >
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{faq.question}</CardTitle>
                            {expandedFaq === faq.id ? (
                              <ChevronUp className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            )}
                    </div>
                        </CardHeader>
                        {expandedFaq === faq.id && (
                          <CardContent>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </CardContent>
                        )}
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
          </TabsContent>

            {/* Contact Tab */}
            <TabsContent value="contact" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>
                      Get in touch with our support team.
                    </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-mint-400" />
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-sm text-muted-foreground">
                            support@learn2earn.com
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MessageCircle className="h-5 w-5 text-mint-400" />
                        <div>
                          <h3 className="font-medium">Live Chat</h3>
                          <p className="text-sm text-muted-foreground">
                            Available 24/7
                          </p>
                    </div>
                  </div>
                      <div className="flex items-center gap-4">
                        <Phone className="h-5 w-5 text-mint-400" />
                        <div>
                          <h3 className="font-medium">Phone</h3>
                          <p className="text-sm text-muted-foreground">
                            +1 (555) 123-4567
                          </p>
                        </div>
                  </div>
                </div>
              </CardContent>
            </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded-md bg-white/5 border border-white/10"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <input
                          type="email"
                          className="w-full p-2 rounded-md bg-white/5 border border-white/10"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Subject</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded-md bg-white/5 border border-white/10"
                          placeholder="What's this about?"
                        />
                        </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Message</label>
                        <textarea
                          className="w-full p-2 rounded-md bg-white/5 border border-white/10"
                          rows={4}
                          placeholder="Your message..."
                        />
                    </div>
                      <Button className="w-full">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
            </div>
          </TabsContent>

            {/* Help Resources Tab */}
            <TabsContent value="resources" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Help Resources</CardTitle>
                  <CardDescription>
                    Browse our comprehensive guides and documentation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SAMPLE_HELP_RESOURCES.map((resource) => (
                      <Card key={resource.id}>
                  <CardHeader>
                          <div className="flex items-center gap-4">
                            <resource.icon className="h-8 w-8 text-mint-400" />
                            <div>
                              <CardTitle className="text-lg">
                                {resource.title}
                    </CardTitle>
                              <CardDescription>
                                {resource.description}
                              </CardDescription>
                            </div>
                          </div>
                  </CardHeader>
                  <CardContent>
                          <Button variant="outline" className="w-full" asChild>
                            <a href={resource.link}>Read Guide</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
                </CardContent>
              </Card>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </div>
  );
} 