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
  Trophy,
  Medal,
  Star,
  TrendingUp,
  ChevronRight,
} from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const SAMPLE_LEADERBOARD = {
  weekly: [
    {
      id: '1',
      name: 'John Doe',
      avatar: '/avatars/john-doe.jpg',
      points: 2500,
      coursesCompleted: 5,
      achievements: 8,
      rank: 1,
    },
    {
      id: '2',
      name: 'Jane Smith',
      avatar: '/avatars/jane-smith.jpg',
      points: 2200,
      coursesCompleted: 4,
      achievements: 7,
      rank: 2,
    },
    {
      id: '3',
      name: 'Mike Johnson',
      avatar: '/avatars/mike-johnson.jpg',
      points: 2000,
      coursesCompleted: 4,
      achievements: 6,
      rank: 3,
    },
  ],
  monthly: [
    {
      id: '1',
      name: 'Jane Smith',
      avatar: '/avatars/jane-smith.jpg',
      points: 8500,
      coursesCompleted: 12,
      achievements: 15,
      rank: 1,
    },
    {
      id: '2',
      name: 'John Doe',
      avatar: '/avatars/john-doe.jpg',
      points: 8200,
      coursesCompleted: 11,
      achievements: 14,
      rank: 2,
    },
    {
      id: '3',
      name: 'Sarah Wilson',
      avatar: '/avatars/sarah-wilson.jpg',
      points: 7800,
      coursesCompleted: 10,
      achievements: 13,
      rank: 3,
    },
  ],
  allTime: [
    {
      id: '1',
      name: 'Mike Johnson',
      avatar: '/avatars/mike-johnson.jpg',
      points: 25000,
      coursesCompleted: 25,
      achievements: 30,
      rank: 1,
    },
    {
      id: '2',
      name: 'Jane Smith',
      avatar: '/avatars/jane-smith.jpg',
      points: 24500,
      coursesCompleted: 24,
      achievements: 29,
      rank: 2,
    },
    {
      id: '3',
      name: 'John Doe',
      avatar: '/avatars/john-doe.jpg',
      points: 24000,
      coursesCompleted: 23,
      achievements: 28,
      rank: 3,
    },
  ],
};

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState('weekly');

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight">Leaderboard</h1>
            <p className="text-xl text-muted-foreground">
              See who's leading the learning journey and earning the most rewards.
            </p>
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="allTime">All Time</TabsTrigger>
            </TabsList>
            <TabsContent value="weekly" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Top Performers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {SAMPLE_LEADERBOARD.weekly.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <Avatar className="w-12 h-12">
                              <AvatarImage
                                src={user.avatar}
                                alt={user.name}
                              />
                              <AvatarFallback>
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            {user.rank === 1 && (
                              <Trophy className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400" />
                            )}
                            {user.rank === 2 && (
                              <Medal className="absolute -top-2 -right-2 h-6 w-6 text-gray-400" />
                            )}
                            {user.rank === 3 && (
                              <Star className="absolute -top-2 -right-2 h-6 w-6 text-amber-600" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium">{user.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{user.coursesCompleted} courses</span>
                              <span>•</span>
                              <span>{user.achievements} achievements</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-mint-400" />
                          <span className="font-medium">{user.points} points</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="monthly" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Top Performers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {SAMPLE_LEADERBOARD.monthly.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <Avatar className="w-12 h-12">
                              <AvatarImage
                                src={user.avatar}
                                alt={user.name}
                              />
                              <AvatarFallback>
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            {user.rank === 1 && (
                              <Trophy className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400" />
                            )}
                            {user.rank === 2 && (
                              <Medal className="absolute -top-2 -right-2 h-6 w-6 text-gray-400" />
                            )}
                            {user.rank === 3 && (
                              <Star className="absolute -top-2 -right-2 h-6 w-6 text-amber-600" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium">{user.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{user.coursesCompleted} courses</span>
                              <span>•</span>
                              <span>{user.achievements} achievements</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-mint-400" />
                          <span className="font-medium">{user.points} points</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="allTime" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>All-Time Top Performers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {SAMPLE_LEADERBOARD.allTime.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <Avatar className="w-12 h-12">
                              <AvatarImage
                                src={user.avatar}
                                alt={user.name}
                              />
                              <AvatarFallback>
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            {user.rank === 1 && (
                              <Trophy className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400" />
                            )}
                            {user.rank === 2 && (
                              <Medal className="absolute -top-2 -right-2 h-6 w-6 text-gray-400" />
                            )}
                            {user.rank === 3 && (
                              <Star className="absolute -top-2 -right-2 h-6 w-6 text-amber-600" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium">{user.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{user.coursesCompleted} courses</span>
                              <span>•</span>
                              <span>{user.achievements} achievements</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-mint-400" />
                          <span className="font-medium">{user.points} points</span>
                        </div>
                      </div>
                    ))}
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