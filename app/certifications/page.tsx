'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Award,
  CheckCircle2,
  Clock,
  Star,
  ChevronRight,
  Lock,
  Target,
  Trophy,
  Download,
  Share2,
  Shield,
} from 'lucide-react';

const earnedCertifications = [
  {
    id: 1,
    title: 'Blockchain Fundamentals',
    issuer: 'Learn2Earn',
    earnedAt: '2 weeks ago',
    level: 'Beginner',
    skills: ['Blockchain Basics', 'Cryptography', 'Consensus Mechanisms'],
    icon: Award,
    certificateId: 'L2E-BF-2024-001',
  },
  {
    id: 2,
    title: 'Smart Contract Developer',
    issuer: 'Learn2Earn',
    earnedAt: '1 month ago',
    level: 'Intermediate',
    skills: ['Solidity', 'Smart Contracts', 'Web3.js'],
    icon: Trophy,
    certificateId: 'L2E-SCD-2024-002',
  },
];

const availableCertifications = [
  {
    id: 1,
    title: 'DeFi Protocol Developer',
    description: 'Master the development of decentralized finance protocols',
    requirements: [
      'Complete Smart Contract Developer certification',
      'Pass DeFi assessment with 90% score',
      'Submit a DeFi project for review',
    ],
    level: 'Advanced',
    estimatedTime: '3 months',
    icon: Target,
    progress: 75,
    locked: false,
  },
  {
    id: 2,
    title: 'Web3 Security Expert',
    description: 'Become an expert in blockchain security and auditing',
    requirements: [
      'Complete DeFi Protocol Developer certification',
      'Pass Security assessment with 95% score',
      'Complete 5 security audits',
    ],
    level: 'Expert',
    estimatedTime: '4 months',
    icon: Shield,
    progress: 0,
    locked: true,
  },
];

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<'earned' | 'available'>('earned');

  return (
    <div className="container mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">Certifications</h1>
          <p className="text-muted-foreground">
            Earn and showcase your blockchain expertise
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 border-b">
          <Button
            variant={activeTab === 'earned' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('earned')}
          >
            <Trophy className="h-4 w-4 mr-2" />
            Earned Certifications
          </Button>
          <Button
            variant={activeTab === 'available' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('available')}
          >
            <Target className="h-4 w-4 mr-2" />
            Available Certifications
          </Button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'earned' ? (
            earnedCertifications.map((certification) => (
              <Card key={certification.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-mint-400/10">
                        <certification.icon className="h-6 w-6 text-mint-400" />
                      </div>
                      <div>
                        <CardTitle>{certification.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Issued by {certification.issuer}</span>
                          <span>•</span>
                          <span>Earned {certification.earnedAt}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-mint-400" />
                      <span className="text-sm font-medium">
                        Level: {certification.level}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Skills Demonstrated:</p>
                      <div className="flex flex-wrap gap-2">
                        {certification.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-mint-400/10 text-mint-400 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Certificate ID: {certification.certificateId}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            availableCertifications.map((certification) => (
              <Card
                key={certification.id}
                className={`relative overflow-hidden ${
                  certification.locked ? 'opacity-75' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-mint-400/10">
                        <certification.icon className="h-6 w-6 text-mint-400" />
                      </div>
                      <div>
                        <CardTitle>{certification.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {certification.description}
                        </p>
                      </div>
                    </div>
                    <Button disabled={certification.locked}>
                      {certification.locked ? (
                        <>
                          <Lock className="h-4 w-4 mr-2" />
                          Locked
                        </>
                      ) : (
                        <>
                          View Requirements
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{certification.progress}%</span>
                      </div>
                      <Progress value={certification.progress} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-mint-400" />
                        <span>{certification.level}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-mint-400" />
                        <span>{certification.estimatedTime}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Requirements:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {certification.requirements.map((req, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-mint-400" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                {certification.locked && (
                  <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                    <Lock className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
} 