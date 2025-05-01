'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Code,
  Shield,
  Rocket,
  ChevronRight,
  Lock,
  CheckCircle2,
} from 'lucide-react';

const learningPaths = [
  {
    id: 1,
    title: 'Blockchain Fundamentals',
    description: 'Master the basics of blockchain technology and its applications',
    level: 'Beginner',
    duration: '6 weeks',
    courses: 5,
    icon: BookOpen,
    progress: 0,
    locked: false,
  },
  {
    id: 2,
    title: 'Smart Contract Development',
    description: 'Learn to build and deploy smart contracts on various blockchains',
    level: 'Intermediate',
    duration: '8 weeks',
    courses: 7,
    icon: Code,
    progress: 0,
    locked: true,
  },
  {
    id: 3,
    title: 'DeFi Development',
    description: 'Build decentralized finance applications and protocols',
    level: 'Advanced',
    duration: '10 weeks',
    courses: 8,
    icon: Shield,
    progress: 0,
    locked: true,
  },
  {
    id: 4,
    title: 'Web3 Integration',
    description: 'Integrate blockchain technology into web applications',
    level: 'Intermediate',
    duration: '6 weeks',
    courses: 6,
    icon: Rocket,
    progress: 0,
    locked: true,
  },
];

export default function LearningPaths() {
  const [selectedPath, setSelectedPath] = useState<number | null>(null);

  return (
    <div className="container mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">Learning Paths</h1>
          <p className="text-muted-foreground">
            Structured learning paths for all levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningPaths.map((path) => (
            <Card
              key={path.id}
              className={`relative overflow-hidden ${
                path.locked ? 'opacity-75' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-mint-400/10">
                    <path.icon className="h-6 w-6 text-mint-400" />
                  </div>
                  <div>
                    <CardTitle>{path.title}</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Level</span>
                    <span className="font-medium">{path.level}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{path.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Courses</span>
                    <span className="font-medium">{path.courses} courses</span>
                  </div>
                  <Button
                    className="w-full"
                    variant={path.locked ? 'outline' : 'default'}
                    disabled={path.locked}
                  >
                    {path.locked ? (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Complete Previous Path
                      </>
                    ) : (
                      <>
                        Start Path
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
              {path.locked && (
                <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                  <Lock className="h-8 w-8 text-muted-foreground" />
                </div>
              )}
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 