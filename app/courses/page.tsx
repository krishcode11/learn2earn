'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CourseCard } from '../components/courses/course-card';
import { Button } from '../components/ui/button';
import { Input } from '../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import {
  Card,
  CardContent,
  CardHeader,   
  CardTitle,
} from '../../components/ui/card';
import {
  SlidersHorizontal,
  Search,
  Filter,
  ArrowUpDown,
  Star,
  Clock,
  Users,
  Trophy,
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'Blockchain',
  'Smart Contracts',
  'DeFi',
  'NFTs',
  'Web3',
  'Cryptocurrency',
];

const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];
const DURATIONS = ['0-5 hours', '5-10 hours', '10+ hours'];
const SORT_OPTIONS = [
  'Most Popular',
  'Newest',
  'Highest Rated',
  'Most Tokens',
];

const SAMPLE_COURSES = [
  {
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
  },
  {
    id: '2',
    title: 'Smart Contract Development with Solidity',
    description: 'Master Solidity programming and create secure smart contracts.',
    image: '/smart.jpg',
    duration: '8 hours',
    students: 856,
    level: 'Intermediate',
    reward: 150,
    rating: 4.9,
    category: 'Smart Contracts',
  },
  {
    id: '3',
    title: 'DeFi Protocols and Applications',
    description: 'Explore decentralized finance protocols and their implementations.',
    image: '/defi.jpg',
    duration: '10 hours',
    students: 567,
    level: 'Advanced',
    reward: 200,
    rating: 4.7,
    category: 'DeFi',
  },
  // Add more sample courses as needed
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [sortBy, setSortBy] = useState('Most Popular');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = SAMPLE_COURSES.filter((course) => {
    if (selectedCategory !== 'All' && course.category !== selectedCategory) {
      return false;
    }
    if (selectedLevel && course.level !== selectedLevel) {
      return false;
    }
    if (selectedDuration) {
      const [min, max] = selectedDuration.split('-').map(Number);
      const courseHours = parseInt(course.duration);
      if (max) {
        if (courseHours < min || courseHours > max) return false;
      } else {
        if (courseHours < min) return false;
      }
    }
    if (searchQuery) {
      return (
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'Most Popular':
        return b.students - a.students;
      case 'Newest':
        return b.id.localeCompare(a.id);
      case 'Highest Rated':
        return b.rating - a.rating;
      case 'Most Tokens':
        return b.reward - a.reward;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight">Explore Courses</h1>
            <p className="text-xl text-muted-foreground">
              Discover and learn from our expert-led courses on blockchain and Web3 development.
            </p>
          </div>

          {/* Search and Filters */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" />
                  Search & Filters
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search courses..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Filters */}
                <AnimatePresence>
                  {showFilters && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="grid grid-cols-1 md:grid-cols-4 gap-4"
                    >
                      <Select
                        value={selectedCategory}
                        onValueChange={setSelectedCategory}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {CATEGORIES.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Select
                        value={selectedLevel}
                        onValueChange={setSelectedLevel}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Level" />
                        </SelectTrigger>
                        <SelectContent>
                          {LEVELS.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Select
                        value={selectedDuration}
                        onValueChange={setSelectedDuration}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Duration" />
                        </SelectTrigger>
                        <SelectContent>
                          {DURATIONS.map((duration) => (
                            <SelectItem key={duration} value={duration}>
                              {duration}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          {SORT_OPTIONS.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <Button variant="outline" size="lg">
              Load More Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 