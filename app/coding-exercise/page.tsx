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
  Code,
  CheckCircle2,
  Clock,
  Star,
  ChevronRight,
  Lock,
  Target,
  Trophy,
  Play,
  Terminal,
  FileCode,
  GitBranch,
} from 'lucide-react';

const availableExercises = [
  {
    id: 1,
    title: 'Smart Contract Development',
    description: 'Build a simple token contract with basic functionality',
    difficulty: 'Beginner',
    estimatedTime: '1 hour',
    languages: ['Solidity'],
    topics: ['Smart Contracts', 'ERC20', 'Token Development'],
    icon: Code,
    progress: 0,
    locked: false,
  },
  {
    id: 2,
    title: 'DeFi Protocol Integration',
    description: 'Integrate with a DeFi protocol and implement basic operations',
    difficulty: 'Intermediate',
    estimatedTime: '2 hours',
    languages: ['Solidity', 'JavaScript'],
    topics: ['DeFi', 'Web3.js', 'Protocol Integration'],
    icon: GitBranch,
    progress: 0,
    locked: false,
  },
  {
    id: 3,
    title: 'NFT Marketplace',
    description: 'Create a complete NFT marketplace with minting and trading',
    difficulty: 'Advanced',
    estimatedTime: '4 hours',
    languages: ['Solidity', 'React', 'TypeScript'],
    topics: ['NFTs', 'Marketplace', 'Full Stack'],
    icon: FileCode,
    progress: 0,
    locked: true,
  },
];

const completedExercises = [
  {
    id: 1,
    title: 'Blockchain Explorer',
    completedAt: '3 days ago',
    score: 95,
    timeSpent: '2 hours',
    languages: ['JavaScript', 'Web3.js'],
    topics: ['Blockchain', 'Data Fetching', 'UI Development'],
  },
  {
    id: 2,
    title: 'Wallet Integration',
    completedAt: '1 week ago',
    score: 88,
    timeSpent: '1.5 hours',
    languages: ['TypeScript', 'Ethers.js'],
    topics: ['Wallet', 'Authentication', 'Web3'],
  },
];

export default function CodingExercise() {
  const [activeTab, setActiveTab] = useState<'available' | 'completed'>('available');

  return (
    <div className="container mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">Coding Exercises</h1>
          <p className="text-muted-foreground">
            Practice your blockchain development skills with hands-on exercises
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 border-b">
          <Button
            variant={activeTab === 'available' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('available')}
          >
            <Play className="h-4 w-4 mr-2" />
            Available Exercises
          </Button>
          <Button
            variant={activeTab === 'completed' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('completed')}
          >
            <Trophy className="h-4 w-4 mr-2" />
            Completed Exercises
          </Button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'available' ? (
            availableExercises.map((exercise) => (
              <Card
                key={exercise.id}
                className={`relative overflow-hidden ${
                  exercise.locked ? 'opacity-75' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-mint-400/10">
                        <exercise.icon className="h-6 w-6 text-mint-400" />
                      </div>
                      <div>
                        <CardTitle>{exercise.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {exercise.description}
                        </p>
                      </div>
                    </div>
                    <Button disabled={exercise.locked}>
                      {exercise.locked ? (
                        <>
                          <Lock className="h-4 w-4 mr-2" />
                          Locked
                        </>
                      ) : (
                        <>
                          Start Exercise
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-mint-400" />
                        <span>{exercise.difficulty}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-mint-400" />
                        <span>{exercise.estimatedTime}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Languages:</p>
                      <div className="flex flex-wrap gap-2">
                        {exercise.languages.map((lang) => (
                          <span
                            key={lang}
                            className="px-2 py-1 bg-mint-400/10 text-mint-400 rounded-full text-sm"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Topics:</p>
                      <div className="flex flex-wrap gap-2">
                        {exercise.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-1 bg-mint-400/10 text-mint-400 rounded-full text-sm"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                {exercise.locked && (
                  <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                    <Lock className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))
          ) : (
            completedExercises.map((exercise) => (
              <Card key={exercise.id}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-mint-400/10">
                      <CheckCircle2 className="h-6 w-6 text-mint-400" />
                    </div>
                    <div>
                      <CardTitle>{exercise.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Completed {exercise.completedAt}</span>
                        <span>•</span>
                        <span>{exercise.timeSpent}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Score</span>
                        <span className="font-medium">{exercise.score}%</span>
                      </div>
                      <Progress value={exercise.score} className="h-2" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Languages Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {exercise.languages.map((lang) => (
                          <span
                            key={lang}
                            className="px-2 py-1 bg-mint-400/10 text-mint-400 rounded-full text-sm"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Topics Covered:</p>
                      <div className="flex flex-wrap gap-2">
                        {exercise.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-1 bg-mint-400/10 text-mint-400 rounded-full text-sm"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
} 