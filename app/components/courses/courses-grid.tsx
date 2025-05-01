import { useState } from 'react';
import { motion } from 'framer-motion';
import { CourseCard } from './course-card';
import { Button } from '../ui/button';
import { Search, Filter } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CATEGORIES = [
  'All',
  'Blockchain',
  'Smart Contracts',
  'DeFi',
  'NFTs',
  'Web3',
  'Cryptocurrency',
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

export function CoursesGrid() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = SAMPLE_COURSES.filter((course) => {
    if (selectedCategory !== 'All') {
      // Add category filtering logic
    }
    if (searchQuery) {
      return course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col gap-8">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-mint-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
              {CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "mint" : "glass"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
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
          <div className="flex justify-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => router.push('/courses')}
            >
              Load More Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 