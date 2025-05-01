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
import { FileText, Github, ExternalLink, Package } from 'lucide-react';

const licenses = [
  {
    name: 'Next.js',
    version: '14.1.0',
    license: 'MIT',
    description: 'The React Framework for the Web',
    link: 'https://nextjs.org/',
    github: 'https://github.com/vercel/next.js',
  },
  {
    name: 'React',
    version: '18.2.0',
    license: 'MIT',
    description: 'A JavaScript library for building user interfaces',
    link: 'https://reactjs.org/',
    github: 'https://github.com/facebook/react',
  },
  {
    name: 'Tailwind CSS',
    version: '3.4.1',
    license: 'MIT',
    description: 'A utility-first CSS framework',
    link: 'https://tailwindcss.com/',
    github: 'https://github.com/tailwindlabs/tailwindcss',
  },
  {
    name: 'Framer Motion',
    version: '11.0.3',
    license: 'MIT',
    description: 'A production-ready motion library for React',
    link: 'https://www.framer.com/motion/',
    github: 'https://github.com/framer/motion',
  },
  {
    name: 'Lucide Icons',
    version: '0.330.0',
    license: 'MIT',
    description: 'Beautiful & consistent icons',
    link: 'https://lucide.dev/',
    github: 'https://github.com/lucide-icons/lucide',
  },
  {
    name: 'Radix UI',
    version: '1.0.0',
    license: 'MIT',
    description: 'Unstyled, accessible components for building high‑quality design systems',
    link: 'https://www.radix-ui.com/',
    github: 'https://github.com/radix-ui/primitives',
  },
];

const attributions = [
  {
    name: 'Learn2Earn Platform',
    description: 'Main application code',
    license: 'Proprietary',
    copyright: '© 2024 Learn2Earn. All rights reserved.',
  },
  {
    name: 'Smart Contracts',
    description: 'Blockchain integration and token contracts',
    license: 'Proprietary',
    copyright: '© 2024 Learn2Earn. All rights reserved.',
  },
  {
    name: 'UI Components',
    description: 'Custom UI components and design system',
    license: 'Proprietary',
    copyright: '© 2024 Learn2Earn. All rights reserved.',
  },
];

export default function LicensesPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <BackButton />
              <h1 className="text-4xl font-bold tracking-tight">Licenses & Attributions</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Open source licenses and attributions for Learn2Earn.
            </p>
          </div>

          {/* Introduction */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>About Our Licenses</CardTitle>
              <CardDescription>
                Learn2Earn is built using various open source software and libraries.
                This page provides information about the licenses and attributions for all
                components used in our platform.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Open Source Licenses */}
          <div className="grid gap-8">
            <h2 className="text-3xl font-bold">Open Source Licenses</h2>
            <div className="grid gap-6">
              {licenses.map((license, index) => (
                <Card key={index} className="group hover:border-mint-400/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{license.name}</CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Package className="h-4 w-4" />
                            <span>v{license.version}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            <span>{license.license}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <a href={license.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={license.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Website
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{license.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Proprietary Components */}
          <div className="grid gap-8">
            <h2 className="text-3xl font-bold">Proprietary Components</h2>
            <div className="grid gap-6">
              {attributions.map((item, index) => (
                <Card key={index} className="group hover:border-mint-400/50 transition-colors">
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-mint-400" />
                        <span className="text-sm font-medium">{item.license}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.copyright}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* License Information */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>License Information</CardTitle>
              <CardDescription>
                For more information about our licenses or to request a copy of any license,
                please contact our legal team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="mint" size="lg">
                Contact Legal Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 