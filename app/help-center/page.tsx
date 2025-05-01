'use client';

import { useState } from 'react';
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
import {
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  Search,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Wallet,
  Users,
  Settings,
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const faqs = [
  {
    question: 'How do I earn L2E tokens?',
    answer: 'You can earn L2E tokens by completing courses, participating in study groups, and contributing to the community. Each activity has different reward amounts.',
    category: 'Tokens',
  },
  {
    question: 'How do I connect my wallet?',
    answer: 'Click on the "Connect Wallet" button in the top right corner. We support MetaMask, WalletConnect, and other popular Web3 wallets.',
    category: 'Wallet',
  },
  {
    question: 'Can I withdraw my tokens?',
    answer: "Yes, you can withdraw your L2E tokens to your connected wallet once you've earned them. There is a small network fee for withdrawals.",
    category: 'Tokens',
  },
  {
    question: 'How do I join a study group?',
    answer: 'Browse available study groups in the Community section, or create your own. You can join up to 3 active study groups at a time.',
    category: 'Community',
  },
  {
    question: 'What happens if I miss a course deadline?',
    answer: 'You can still complete the course, but you may miss out on bonus tokens. We recommend staying on schedule to maximize your rewards.',
    category: 'Courses',
  },
];

const supportCategories = [
  {
    title: 'Getting Started',
    description: 'New to Learn2Earn? Start here.',
    icon: BookOpen,
    link: '#',
  },
  {
    title: 'Wallet & Tokens',
    description: 'Help with wallet connection and token management.',
    icon: Wallet,
    link: '#',
  },
  {
    title: 'Community',
    description: 'Questions about study groups and community features.',
    icon: Users,
    link: '#',
  },
  {
    title: 'Account Settings',
    description: 'Manage your account and preferences.',
    icon: Settings,
    link: '#',
  },
];

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <BackButton />
              <h1 className="text-4xl font-bold tracking-tight">Help Center</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Find answers to your questions and get support.
            </p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for help..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Support Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => (
              <Card key={index} className="group hover:border-mint-400/50 transition-colors">
                <CardHeader>
                  <category.icon className="h-12 w-12 text-mint-400 mb-4" />
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:text-mint-400">
                    Learn More
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQs */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="grid gap-4">
              {filteredFaqs.map((faq, index) => (
                <Card key={index} className="group hover:border-mint-400/50 transition-colors">
                  <CardHeader>
                    <button
                      className="flex items-center justify-between w-full text-left"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                      {expandedFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-mint-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-mint-400" />
                      )}
                    </button>
                  </CardHeader>
                  {expandedFaq === index && (
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>Need More Help?</CardTitle>
              <CardDescription>
                Our support team is here to help you 24/7.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-4">
                  <MessageCircle className="h-8 w-8 text-mint-400" />
                  <div>
                    <h3 className="font-semibold">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-8 w-8 text-mint-400" />
                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <p className="text-sm text-muted-foreground">support@learn2earn.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-8 w-8 text-mint-400" />
                  <div>
                    <h3 className="font-semibold">Phone Support</h3>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 