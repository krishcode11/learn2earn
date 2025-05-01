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
import {
  Newspaper,
  Download,
  Mail,
  Calendar,
  ExternalLink,
} from 'lucide-react';

const pressReleases = [
  {
    id: 1,
    title: 'Learn2Earn Raises $5M Series A to Expand Blockchain Education Platform',
    date: '2024-03-15',
    description: "Funding will be used to enhance the platform's features and expand course offerings.",
    link: '#',
  },
  {
    id: 2,
    title: 'Learn2Earn Launches New Smart Contract Development Course',
    date: '2024-03-01',
    description: 'Comprehensive course covers Solidity, testing, and deployment of smart contracts.',
    link: '#',
  },
  {
    id: 3,
    title: 'Learn2Earn Partners with Major Blockchain Projects',
    date: '2024-02-15',
    description: 'Strategic partnerships to provide real-world project experience to learners.',
    link: '#',
  },
];

const mediaKit = [
  {
    title: 'Brand Guidelines',
    description: 'Download our brand assets and guidelines',
    icon: Download,
    link: '#',
  },
  {
    title: 'Logo Pack',
    description: 'High-resolution logos in various formats',
    icon: Download,
    link: '#',
  },
  {
    title: 'Press Kit',
    description: 'Company information and key statistics',
    icon: Download,
    link: '#',
  },
];

export default function PressPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <BackButton />
              <h1 className="text-4xl font-bold tracking-tight">Press</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Latest news, press releases, and media resources about Learn2Earn.
            </p>
          </div>

          {/* Press Releases */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">Press Releases</h2>
            <div className="grid gap-6">
              {pressReleases.map((release) => (
                <Card key={release.id} className="group hover:border-mint-400/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{release.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{release.date}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="group-hover:text-mint-400">
                        Read More
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{release.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Media Kit */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">Media Kit</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mediaKit.map((item, index) => (
                <Card key={index} className="group hover:border-mint-400/50 transition-colors">
                  <CardHeader>
                    <item.icon className="h-12 w-12 text-mint-400 mb-4" />
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full group-hover:text-mint-400">
                      Download
                      <Download className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Press Contact */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>Press Contact</CardTitle>
              <CardDescription>
                For press inquiries, please contact our media relations team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-mint-400" />
                  <span>press@learn2earn.com</span>
                </div>
                <Button variant="mint" size="lg">
                  Contact Press Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 