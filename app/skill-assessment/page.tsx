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
  Brain,
  CheckCircle2,
  Clock,
  Star,
  ChevronRight,
  Lock,
  Target,
  Award,
  Code,
} from 'lucide-react';

const availableAssessments = [
  {
    id: 1,
    title: 'Blockchain Fundamentals',
    description: 'Test your knowledge of blockchain basics and core concepts',
    duration: '30 minutes',
    questions: 20,
    difficulty: 'Beginner',
    category: 'Core Concepts',
    icon: Brain,
    locked: false,
  },
  {
    id: 2,
    title: 'Smart Contract Development',
    description: 'Assess your smart contract development skills',
    duration: '45 minutes',
    questions: 25,
    difficulty: 'Intermediate',
    category: 'Development',
    icon: Code,
    locked: false,
  },
  {
    id: 3,
    title: 'DeFi Protocols',
    description: 'Evaluate your understanding of DeFi protocols and mechanisms',
    duration: '60 minutes',
    questions: 30,
    difficulty: 'Advanced',
    category: 'DeFi',
    icon: Target,
    locked: true,
  },
];

const assessmentHistory = [
  {
    id: 1,
    title: 'Web3 Integration',
    completedAt: '2 days ago',
    score: 85,
    totalQuestions: 20,
    correctAnswers: 17,
    timeTaken: '25 minutes',
  },
  {
    id: 2,
    title: 'NFT Development',
    completedAt: '1 week ago',
    score: 92,
    totalQuestions: 25,
    correctAnswers: 23,
    timeTaken: '35 minutes',
  },
];

export default function SkillAssessment() {
  const [activeTab, setActiveTab] = useState<'available' | 'history'>('available');

  return (
    <div className="container mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">Skill Assessment</h1>
          <p className="text-muted-foreground">
            Test your knowledge and track your progress
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 border-b">
          <Button
            variant={activeTab === 'available' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('available')}
          >
            <Target className="h-4 w-4 mr-2" />
            Available Assessments
          </Button>
          <Button
            variant={activeTab === 'history' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('history')}
          >
            <Award className="h-4 w-4 mr-2" />
            Assessment History
          </Button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'available' ? (
            availableAssessments.map((assessment) => (
              <Card
                key={assessment.id}
                className={`relative overflow-hidden ${
                  assessment.locked ? 'opacity-75' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-mint-400/10">
                        <assessment.icon className="h-6 w-6 text-mint-400" />
                      </div>
                      <div>
                        <CardTitle>{assessment.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {assessment.description}
                        </p>
                      </div>
                    </div>
                    <Button disabled={assessment.locked}>
                      {assessment.locked ? (
                        <>
                          <Lock className="h-4 w-4 mr-2" />
                          Locked
                        </>
                      ) : (
                        <>
                          Start Assessment
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-mint-400" />
                      <span>{assessment.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-mint-400" />
                      <span>{assessment.questions} questions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-mint-400" />
                      <span>{assessment.difficulty}</span>
                    </div>
                  </div>
                </CardContent>
                {assessment.locked && (
                  <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                    <Lock className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))
          ) : (
            assessmentHistory.map((assessment) => (
              <Card key={assessment.id}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-mint-400/10">
                      <CheckCircle2 className="h-6 w-6 text-mint-400" />
                    </div>
                    <div>
                      <CardTitle>{assessment.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Completed {assessment.completedAt}</span>
                        <span>•</span>
                        <span>{assessment.timeTaken}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Score</span>
                        <span className="font-medium">{assessment.score}%</span>
                      </div>
                      <Progress value={assessment.score} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-mint-400" />
                        <span>
                          {assessment.correctAnswers}/{assessment.totalQuestions} correct
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-mint-400" />
                        <span>{assessment.timeTaken}</span>
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