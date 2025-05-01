'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  User,
  Trophy,
  BookOpen,
  Code,
  Star,
  Clock,
  Award,
  Edit,
} from 'lucide-react';

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    avatar: string;
    joinDate: string;
    bio: string;
    skills: string[];
    stats: {
      coursesCompleted: number;
      totalHours: number;
      tokensEarned: number;
      achievements: number;
    };
  };
  learningHistory: {
    id: string;
    title: string;
    progress: number;
    lastAccessed: string;
    status: 'in-progress' | 'completed';
  }[];
  achievements: {
    id: string;
    title: string;
    description: string;
    date: string;
    icon: string;
  }[];
}

export function UserProfile({ user, learningHistory, achievements }: UserProfileProps) {
  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-800 overflow-hidden">
                {/* Add user avatar here */}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-0 right-0"
              >
                <Edit className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  <p className="text-muted-foreground">{user.email}</p>
                </div>
                <Button variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">{user.bio}</p>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded-full bg-gray-800 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-mint-400/20 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-mint-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Courses Completed</p>
                <p className="text-2xl font-bold">{user.stats.coursesCompleted}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-mint-400/20 flex items-center justify-center">
                <Clock className="h-6 w-6 text-mint-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Hours</p>
                <p className="text-2xl font-bold">{user.stats.totalHours}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-mint-400/20 flex items-center justify-center">
                <Star className="h-6 w-6 text-mint-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tokens Earned</p>
                <p className="text-2xl font-bold">{user.stats.tokensEarned}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-mint-400/20 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-mint-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Achievements</p>
                <p className="text-2xl font-bold">{user.stats.achievements}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning History and Achievements */}
      <Tabs defaultValue="history">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="history">Learning History</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="history">
          <div className="space-y-4">
            {learningHistory.map((course) => (
              <Card key={course.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Last accessed: {course.lastAccessed}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        course.status === 'completed'
                          ? 'bg-green-500/20 text-green-500'
                          : 'bg-mint-400/20 text-mint-400'
                      }`}
                    >
                      {course.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <Card key={achievement.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-mint-400/20 flex items-center justify-center">
                      <Award className="h-6 w-6 text-mint-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {achievement.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Earned on {achievement.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 