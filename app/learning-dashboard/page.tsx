'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BookOpen,
  Target,
  Trophy,
  Clock,
  TrendingUp,
  Award,
} from 'lucide-react';

export default function LearningDashboard() {
  const [stats] = useState({
    coursesEnrolled: 5,
    coursesCompleted: 2,
    totalHours: 24,
    currentStreak: 7,
    achievements: 8,
    skillLevel: 'Intermediate',
  });

  return (
    <div className="container mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">Learning Dashboard</h1>
          <p className="text-muted-foreground">
            Track your learning progress and achievements
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
              <BookOpen className="h-4 w-4 text-mint-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.coursesEnrolled}</div>
              <p className="text-xs text-muted-foreground">Active courses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
              <Target className="h-4 w-4 text-mint-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.coursesCompleted}</div>
              <p className="text-xs text-muted-foreground">Finished courses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
              <Clock className="h-4 w-4 text-mint-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalHours}</div>
              <p className="text-xs text-muted-foreground">Learning time</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <TrendingUp className="h-4 w-4 text-mint-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.currentStreak} days</div>
              <p className="text-xs text-muted-foreground">Learning streak</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <Trophy className="h-4 w-4 text-mint-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.achievements}</div>
              <p className="text-xs text-muted-foreground">Earned badges</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Skill Level</CardTitle>
              <Award className="h-4 w-4 text-mint-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.skillLevel}</div>
              <p className="text-xs text-muted-foreground">Current level</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                <BookOpen className="h-5 w-5 text-mint-400" />
                <div>
                  <p className="font-medium">Completed Blockchain Fundamentals</p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                <Trophy className="h-5 w-5 text-mint-400" />
                <div>
                  <p className="font-medium">Earned "Quick Learner" Badge</p>
                  <p className="text-sm text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                <Target className="h-5 w-5 text-mint-400" />
                <div>
                  <p className="font-medium">Started Smart Contracts Course</p>
                  <p className="text-sm text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
} 