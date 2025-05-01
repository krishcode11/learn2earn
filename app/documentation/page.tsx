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
  Book,
  Code,
  FileText,
  Search,
  Terminal,
  ChevronRight,
  Github,
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const categories = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and basic concepts',
    icon: Book,
    items: [
      'Introduction to Learn2Earn',
      'Setting Up Your Account',
      'Connecting Your Wallet',
      'Understanding L2E Tokens',
    ],
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation',
    icon: Code,
    items: [
      'Authentication',
      'User Management',
      'Course Management',
      'Token Operations',
    ],
  },
  {
    title: 'Guides',
    description: 'Step-by-step tutorials',
    icon: FileText,
    items: [
      'Creating Your First Course',
      'Managing Study Groups',
      'Token Distribution',
      'Achievement System',
    ],
  },
  {
    title: 'Examples',
    description: 'Code samples and use cases',
    icon: Terminal,
    items: [
      'Smart Contract Integration',
      'Web3 Authentication',
      'Token Transactions',
      'Event Handling',
    ],
  },
];

export default function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <BackButton />
              <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Comprehensive guides and API documentation for Learn2Earn.
            </p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Documentation Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((category, index) => (
              <Card key={index} className="group hover:border-mint-400/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <category.icon className="h-8 w-8 text-mint-400" />
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    {category.items.map((item, itemIndex) => (
                      <Button
                        key={itemIndex}
                        variant="ghost"
                        className="justify-start group-hover:text-mint-400"
                      >
                        {item}
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* GitHub Integration */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>Open Source Documentation</CardTitle>
              <CardDescription>
                Our documentation is open source and available on GitHub.
                Help us improve it by contributing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="mint" size="lg">
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </Button>
            </CardContent>
          </Card>

          {/* API Status */}
          <Card>
            <CardHeader>
              <CardTitle>API Status</CardTitle>
              <CardDescription>
                Check the current status of our API endpoints.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span>API: Operational</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span>Authentication: Operational</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span>Token System: Operational</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 