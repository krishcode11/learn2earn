'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  BookOpen,
  Trophy,
  Clock,
  Award,
  Wallet,
  ChevronRight,
  Calendar,
  Target,
  TrendingUp,
  Star,
  Flame,
  Bell,
} from 'lucide-react';
import Link from 'next/link';

const SAMPLE_ENROLLED_COURSES = [
  {
    id: '1',
    title: 'Blockchain Fundamentals',
    progress: 75,
    lastAccessed: '2 days ago',
    reward: 100,
    image: '/public/block2.jpg',
    nextLesson: 'Smart Contracts Basics',
    deadline: '2024-03-25',
  },
  {
    id: '2',
    title: 'Smart Contract Development',
    progress: 30,
    lastAccessed: '1 day ago',
    reward: 150,
    image: '/public/smart.jpg',
    nextLesson: 'Solidity Syntax',
    deadline: '2024-03-28',
  },
];

const SAMPLE_ACHIEVEMENTS = [
  {
    id: '1',
    title: 'First Course Completed',
    description: 'Completed your first course on Learn2Earn',
    icon: Trophy,
    date: '2024-03-15',
    points: 100,
  },
  {
    id: '2',
    title: 'Quick Learner',
    description: 'Completed a course in under 24 hours',
    icon: Clock,
    date: '2024-03-16',
    points: 50,
  },
];

const RECOMMENDED_COURSES = [
  {
    id: '3',
    title: 'Web3 Security',
    description: 'Learn about smart contract security and best practices',
    level: 'Intermediate',
    duration: '6 weeks',
    reward: 200,
  },
  {
    id: '4',
    title: 'DeFi Fundamentals',
    description: 'Understanding decentralized finance protocols',
    level: 'Beginner',
    duration: '4 weeks',
    reward: 150,
  },
];

const RECENT_ACTIVITIES = [
  {
    id: '1',
    type: 'course_progress',
    title: 'Completed Lesson: Blockchain Basics',
    course: 'Blockchain Fundamentals',
    time: '2 hours ago',
  },
  {
    id: '2',
    type: 'achievement',
    title: 'Earned Achievement: Quick Learner',
    time: '1 day ago',
  },
  {
    id: '3',
    type: 'reward',
    title: 'Earned 50 L2E tokens',
    time: '2 days ago',
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-xl text-muted-foreground">
              Track your progress and manage your learning journey.
        </p>
      </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Enrolled courses</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Rewards</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">250 L2E</div>
                <p className="text-xs text-muted-foreground">Earned tokens</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Achievements</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Unlocked badges</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
            <Flame className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3 days</div>
                <p className="text-xs text-muted-foreground">Current streak</p>
              </CardContent>
            </Card>
      </div>

          {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Enrolled Courses */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>My Courses</CardTitle>
              <CardDescription>Continue your learning journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {SAMPLE_ENROLLED_COURSES.map((course) => (
                  <Card key={course.id}>
        <CardHeader>
          <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/courses/${course.id}`}>
                            Continue <ChevronRight className="h-4 w-4 ml-2" />
                          </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-mint-400 h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                    <span>Last accessed: {course.lastAccessed}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="h-4 w-4" />
                            <span>Next: {course.nextLesson}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>Deadline: {course.deadline}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Wallet className="h-4 w-4" />
                          <span>Reward: {course.reward} L2E</span>
                          </div>
                  </div>
                </div>
                    </CardContent>
                  </Card>
            ))}
          </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Activities and Recommendations */}
        <div className="space-y-8">
          {/* Recent Activity */}
          <Card>
        <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest learning activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {RECENT_ACTIVITIES.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4">
                    <div className="mt-1">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                    </div>
                  <div>
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.course && `${activity.course} • `}
                        {activity.time}
                    </p>
                    </div>
                  </div>
                ))}
                </div>
            </CardContent>
          </Card>

          {/* Recommended Courses */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended Courses</CardTitle>
              <CardDescription>Based on your interests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {RECOMMENDED_COURSES.map((course) => (
                  <Card key={course.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          <span>Level: {course.level}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>Duration: {course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Wallet className="h-4 w-4" />
                          <span>Reward: {course.reward} L2E</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4" asChild>
                        <Link href={`/courses/${course.id}`}>Start Learning</Link>
                      </Button>
                    </CardContent>
                  </Card>
            ))}
          </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 