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
  BookOpen,
  Target,
  Clock,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Blockchain Fundamentals',
    progress: 75,
    completedLessons: 15,
    totalLessons: 20,
    timeSpent: '6 hours',
    lastAccessed: '2 hours ago',
  },
  {
    id: 2,
    title: 'Smart Contract Development',
    progress: 30,
    completedLessons: 6,
    totalLessons: 20,
    timeSpent: '4 hours',
    lastAccessed: '1 day ago',
  },
  {
    id: 3,
    title: 'Web3 Integration',
    progress: 0,
    completedLessons: 0,
    totalLessons: 15,
    timeSpent: '0 hours',
    lastAccessed: 'Not started',
  },
];

export default function LearningProgress() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  return (
    <div className="container mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">Learning Progress</h1>
          <p className="text-muted-foreground">
            Track your course completion and skill mastery
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {courses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-mint-400/10">
                      <BookOpen className="h-6 w-6 text-mint-400" />
                    </div>
                    <div>
                      <CardTitle>{course.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Last accessed: {course.lastAccessed}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-mint-400" />
                      <div>
                        <div className="text-sm font-medium">
                          {course.completedLessons}/{course.totalLessons}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Lessons completed
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-mint-400" />
                      <div>
                        <div className="text-sm font-medium">
                          {course.timeSpent}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Time spent
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 