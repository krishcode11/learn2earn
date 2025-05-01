'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Trophy,
  Star,
  Target,
  Award,
  Clock,
  Lock,
} from 'lucide-react';

const milestones = [
  {
    id: 1,
    title: 'First Course Completion',
    description: 'Complete your first blockchain course',
    progress: 100,
    reward: '50 L2E',
    status: 'completed',
    icon: Trophy,
  },
  {
    id: 2,
    title: 'Learning Streak',
    description: 'Maintain a 7-day learning streak',
    progress: 85,
    reward: '100 L2E',
    status: 'in-progress',
    icon: Star,
  },
  {
    id: 3,
    title: 'Skill Mastery',
    description: 'Achieve 90% in any skill assessment',
    progress: 0,
    reward: '200 L2E',
    status: 'locked',
    icon: Target,
  },
  {
    id: 4,
    title: 'Community Contributor',
    description: 'Complete 5 peer reviews',
    progress: 40,
    reward: '150 L2E',
    status: 'in-progress',
    icon: Award,
  },
];

export default function LearningMilestones() {
  return (
    <div className="container mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">Learning Milestones</h1>
          <p className="text-muted-foreground">
            Track your achievements and rewards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones.map((milestone) => (
            <Card
              key={milestone.id}
              className={`relative overflow-hidden ${
                milestone.status === 'locked' ? 'opacity-75' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-mint-400/10">
                    <milestone.icon className="h-6 w-6 text-mint-400" />
                  </div>
                  <div>
                    <CardTitle>{milestone.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{milestone.progress}%</span>
                    </div>
                    <Progress value={milestone.progress} className="h-2" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-mint-400" />
                      <span className="text-sm font-medium">
                        Reward: {milestone.reward}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {milestone.status === 'completed' ? (
                        <div className="flex items-center gap-1 text-sm text-mint-400">
                          <Clock className="h-4 w-4" />
                          Completed
                        </div>
                      ) : milestone.status === 'locked' ? (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Lock className="h-4 w-4" />
                          Locked
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-sm text-yellow-400">
                          <Star className="h-4 w-4" />
                          In Progress
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
              {milestone.status === 'locked' && (
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