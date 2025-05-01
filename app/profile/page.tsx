'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  User,
  Trophy,
  BookOpen,
  Clock,
  Wallet,
  Award,
  Edit,
} from 'lucide-react';
import { useWeb3 } from '../providers/web3-provider';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const SAMPLE_USER = {
  name: 'John Doe',
  email: 'john@example.com',
  walletAddress: '0x1234...5678',
  joinDate: 'March 2024',
  avatar: '/avatars/default.jpg',
  bio: 'Blockchain enthusiast and lifelong learner',
  stats: {
    coursesCompleted: 5,
    totalRewards: 750,
    learningStreak: 7,
    achievements: 8,
  },
  recentAchievements: [
    {
      id: '1',
      title: 'Course Master',
      description: 'Completed 5 courses',
      icon: Trophy,
      date: '2024-03-20',
    },
    {
      id: '2',
      title: 'Quick Learner',
      description: 'Completed a course in under 24 hours',
      icon: Clock,
      date: '2024-03-19',
    },
  ],
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const { isConnected } = useWeb3();

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="relative">
                <Avatar className="w-32 h-32">
                  <AvatarImage
                    src={SAMPLE_USER.avatar}
                    alt={SAMPLE_USER.name}
                  />
                  <AvatarFallback>
                    {SAMPLE_USER.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-0 right-0 rounded-full"
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold tracking-tight">
                  {SAMPLE_USER.name}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {SAMPLE_USER.bio}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Member since {SAMPLE_USER.joinDate}</span>
                  <span>•</span>
                  <span>{SAMPLE_USER.walletAddress}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {SAMPLE_USER.stats.coursesCompleted}
                </div>
                <p className="text-xs text-muted-foreground">Total completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Rewards</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {SAMPLE_USER.stats.totalRewards} L2E
                </div>
                <p className="text-xs text-muted-foreground">Earned tokens</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {SAMPLE_USER.stats.learningStreak} days
                </div>
                <p className="text-xs text-muted-foreground">Current streak</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Achievements</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {SAMPLE_USER.stats.achievements}
                </div>
                <p className="text-xs text-muted-foreground">Unlocked badges</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SAMPLE_USER.recentAchievements.map((achievement) => (
                      <Card key={achievement.id}>
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <achievement.icon className="h-8 w-8 text-mint-400" />
                            <div>
                              <CardTitle className="text-lg">
                                {achievement.title}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Earned on {achievement.date}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="achievements" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>All Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SAMPLE_USER.recentAchievements.map((achievement) => (
                      <Card key={achievement.id}>
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <achievement.icon className="h-8 w-8 text-mint-400" />
                            <div>
                              <CardTitle className="text-lg">
                                {achievement.title}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Earned on {achievement.date}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="activity" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                      <div className="flex items-center gap-4">
                        <BookOpen className="h-5 w-5 text-mint-400" />
                        <div>
                          <h4 className="font-medium">Completed Blockchain Fundamentals</h4>
                          <p className="text-sm text-muted-foreground">
                            Earned 100 L2E tokens
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        2 days ago
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                      <div className="flex items-center gap-4">
                        <Trophy className="h-5 w-5 text-mint-400" />
                        <div>
                          <h4 className="font-medium">Earned Course Master Achievement</h4>
                          <p className="text-sm text-muted-foreground">
                            Completed 5 courses
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        3 days ago
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
} 