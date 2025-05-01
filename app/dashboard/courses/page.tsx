'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../../components/ui/button';
import { Progress } from '../../../components/ui/progress';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../../components/ui/tabs';
import {
  BookOpen,
  Clock,
  Award,
  ChevronRight,
  Play,
  CheckCircle2,
  Star,
  TrendingUp,
  Users,
  ArrowUpRight,
} from 'lucide-react';

// Sample data
const inProgressCourses = [
  {
    id: '1',
    title: 'Blockchain Fundamentals',
    progress: 75,
    lastAccessed: '2 hours ago',
    nextLesson: 'Types of Blockchains',
    duration: '6 hours',
    reward: 100,
    level: 'Beginner',
  },
  {
    id: '2',
    title: 'Smart Contract Development',
    progress: 45,
    lastAccessed: '1 day ago',
    nextLesson: 'Solidity Basics',
    duration: '8 hours',
    reward: 150,
    level: 'Intermediate',
  },
  {
    id: '3',
    title: 'DeFi Protocols',
    progress: 20,
    lastAccessed: '3 days ago',
    nextLesson: 'Liquidity Pools',
    duration: '10 hours',
    reward: 200,
    level: 'Advanced',
  },
];

const completedCourses = [
  {
    id: '4',
    title: 'Web3 Basics',
    completedDate: '2024-02-15',
    duration: '4 hours',
    reward: 50,
    level: 'Beginner',
    certificate: true,
  },
  {
    id: '5',
    title: 'NFT Development',
    completedDate: '2024-02-10',
    duration: '6 hours',
    reward: 75,
    level: 'Intermediate',
    certificate: true,
  },
];

const recommendedCourses = [
  {
    id: '6',
    title: 'Advanced Smart Contracts',
    description: 'Master advanced Solidity patterns and security best practices.',
    duration: '12 hours',
    reward: 250,
    level: 'Advanced',
    rating: 4.9,
    students: 1234,
  },
  {
    id: '7',
    title: 'DAO Development',
    description: 'Learn to build and deploy decentralized autonomous organizations.',
    duration: '8 hours',
    reward: 180,
    level: 'Intermediate',
    rating: 4.8,
    students: 856,
  },
];

const learningPaths = [
  {
    id: '1',
    title: 'Blockchain Developer',
    description: 'Master blockchain development from basics to advanced concepts.',
    courses: 8,
    duration: '40 hours',
    progress: 60,
    nextCourse: 'Advanced Smart Contracts',
  },
  {
    id: '2',
    title: 'DeFi Expert',
    description: 'Become an expert in decentralized finance protocols.',
    courses: 6,
    duration: '30 hours',
    progress: 40,
    nextCourse: 'Yield Farming Strategies',
  },
];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('in-progress');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">My Courses</h1>
        <p className="text-muted-foreground">
          Track your progress and continue your learning journey.
        </p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="learning-paths">Learning Paths</TabsTrigger>
        </TabsList>

        {/* In Progress Tab */}
        <TabsContent value="in-progress">
          <div className="space-y-6">
            {inProgressCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold">{course.title}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                              {course.level}
                            </span>
                            <div className="h-4 w-px bg-white/10" />
                            <span className="text-sm text-muted-foreground">
                              {course.duration}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>Last accessed: {course.lastAccessed}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="h-4 w-4" />
                            <span>{course.reward} tokens</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <div className="mt-4 text-sm text-muted-foreground">
                          Next lesson: {course.nextLesson}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button variant="mint" className="w-full">
                          <Play className="h-4 w-4 mr-2" />
                          Continue Learning
                        </Button>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Completed Tab */}
        <TabsContent value="completed">
          <div className="space-y-6">
            {completedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold">{course.title}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                              {course.level}
                            </span>
                            <div className="h-4 w-px bg-white/10" />
                            <span className="text-sm text-muted-foreground">
                              {course.duration}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <CheckCircle2 className="h-4 w-4 text-mint-400" />
                            <span>Completed on {new Date(course.completedDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="h-4 w-4" />
                            <span>{course.reward} tokens earned</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {course.certificate && (
                          <Button variant="mint" className="w-full">
                            <Award className="h-4 w-4 mr-2" />
                            View Certificate
                          </Button>
                        )}
                        <Button variant="outline" className="w-full">
                          Review Course
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Recommended Tab */}
        <TabsContent value="recommended">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {course.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          <span>{course.reward} tokens</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{course.students} students</span>
                        </div>
                      </div>
                      <Button variant="mint" className="w-full">
                        Start Learning
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Learning Paths Tab */}
        <TabsContent value="learning-paths">
          <div className="space-y-6">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold">{path.title}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                              {path.courses} courses
                            </span>
                            <div className="h-4 w-px bg-white/10" />
                            <span className="text-sm text-muted-foreground">
                              {path.duration}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          {path.description}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progress</span>
                            <span>{path.progress}%</span>
                          </div>
                          <Progress value={path.progress} className="h-2" />
                        </div>
                        <div className="mt-4 text-sm text-muted-foreground">
                          Next course: {path.nextCourse}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button variant="mint" className="w-full">
                          <Play className="h-4 w-4 mr-2" />
                          Continue Path
                        </Button>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 