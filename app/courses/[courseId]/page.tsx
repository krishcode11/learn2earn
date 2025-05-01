'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  BookOpen,
  Clock,
  Users,
  Trophy,
  ChevronRight,
  Lock,
  CheckCircle2,
  PlayCircle,
} from 'lucide-react';
import { useWeb3 } from '../../providers/web3-provider';

const SAMPLE_COURSE = {
  id: '1',
  title: 'Blockchain Fundamentals',
  description: 'Learn the basics of blockchain technology and its applications.',
  image: '/block1.jpg',
  duration: '6 hours',
  students: 1234,
  level: 'Beginner',
  reward: 100,
  rating: 4.8,
  category: 'Blockchain',
  instructor: {
    name: 'John Doe',
    title: 'Blockchain Expert',
    image: '/instructors/john-doe.jpg',
  },
  curriculum: [
    {
      id: '1',
      title: 'Introduction to Blockchain',
      lessons: [
        {
          id: '1-1',
          title: 'What is Blockchain?',
          duration: '15 min',
          completed: true,
        },
        {
          id: '1-2',
          title: 'How Blockchain Works',
          duration: '20 min',
          completed: true,
        },
        {
          id: '1-3',
          title: 'Types of Blockchains',
          duration: '25 min',
          completed: false,
        },
      ],
    },
    {
      id: '2',
      title: 'Cryptography Basics',
      lessons: [
        {
          id: '2-1',
          title: 'Hash Functions',
          duration: '20 min',
          completed: false,
        },
        {
          id: '2-2',
          title: 'Public Key Cryptography',
          duration: '25 min',
          completed: false,
        },
      ],
    },
  ],
};

export default function CourseDetailPage({
  params,
}: {
  params: { courseId: string };
}) {
  const [activeTab, setActiveTab] = useState('overview');
  const { isConnected } = useWeb3();
  const [isEnrolled, setIsEnrolled] = useState(false);

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-8">
          {/* Course Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{SAMPLE_COURSE.category}</span>
              <ChevronRight className="h-4 w-4" />
              <span>{SAMPLE_COURSE.level}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              {SAMPLE_COURSE.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {SAMPLE_COURSE.description}
            </p>
          </div>

          {/* Course Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Duration</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{SAMPLE_COURSE.duration}</div>
                <p className="text-xs text-muted-foreground">Total learning time</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {SAMPLE_COURSE.students.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">Enrolled learners</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Reward</CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {SAMPLE_COURSE.reward} L2E
                </div>
                <p className="text-xs text-muted-foreground">Completion reward</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Rating</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{SAMPLE_COURSE.rating}</div>
                <p className="text-xs text-muted-foreground">Course rating</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>About This Course</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-invert max-w-none">
                        <p>
                          This comprehensive course will take you from zero to hero
                          in understanding blockchain technology. You'll learn the
                          fundamental concepts, explore real-world applications,
                          and gain hands-on experience with blockchain
                          development.
                        </p>
                        <h3>What You'll Learn</h3>
                        <ul>
                          <li>Understanding blockchain technology and its core concepts</li>
                          <li>Exploring different types of blockchains and their use cases</li>
                          <li>Learning about cryptography and its role in blockchain</li>
                          <li>Understanding consensus mechanisms and their importance</li>
                          <li>Exploring real-world blockchain applications</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="curriculum" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Curriculum</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {SAMPLE_COURSE.curriculum.map((section) => (
                          <div key={section.id} className="space-y-4">
                            <h3 className="text-lg font-semibold">
                              {section.title}
                            </h3>
                            <div className="space-y-2">
                              {section.lessons.map((lesson) => (
                                <div
                                  key={lesson.id}
                                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                >
                                  <div className="flex items-center gap-4">
                                    {lesson.completed ? (
                                      <CheckCircle2 className="h-5 w-5 text-mint-400" />
                                    ) : (
                                      <PlayCircle className="h-5 w-5 text-muted-foreground" />
                                    )}
                                    <div>
                                      <h4 className="font-medium">
                                        {lesson.title}
                                      </h4>
                                      <p className="text-sm text-muted-foreground">
                                        {lesson.duration}
                                      </p>
                                    </div>
                                  </div>
                                  {!lesson.completed && (
                                    <Lock className="h-4 w-4 text-muted-foreground" />
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Enroll Now</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Course Price
                      </span>
                      <span className="text-2xl font-bold">Free</span>
                    </div>
                    <Button
                      className="w-full"
                      size="lg"
                      disabled={!isConnected}
                      onClick={() => setIsEnrolled(true)}
                    >
                      {isEnrolled ? 'Enrolled' : 'Enroll Now'}
                    </Button>
                    {!isConnected && (
                      <p className="text-sm text-muted-foreground text-center">
                        Connect your wallet to enroll
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <img
                      src={SAMPLE_COURSE.instructor.image}
                      alt={SAMPLE_COURSE.instructor.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">
                        {SAMPLE_COURSE.instructor.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {SAMPLE_COURSE.instructor.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 