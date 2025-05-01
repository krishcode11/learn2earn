'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MessageSquare, Star, Users } from 'lucide-react';

// Sample mentor data
const mentors = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Senior Blockchain Developer',
    company: 'Web3 Labs',
    expertise: ['Solidity', 'DeFi', 'Smart Contracts'],
    rating: 4.9,
    sessions: 156,
    availability: 'Mon, Wed, Fri',
    image: '/mentors/alex.jpg',
    bio: '5+ years of experience in blockchain development. Specialized in DeFi protocols and smart contract security.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Web3 Product Manager',
    company: 'CryptoCorp',
    expertise: ['Product Strategy', 'Tokenomics', 'Community Building'],
    rating: 4.8,
    sessions: 98,
    availability: 'Tue, Thu, Sat',
    image: '/mentors/sarah.jpg',
    bio: 'Product leader with experience in launching successful Web3 products. Expert in tokenomics and community engagement.',
  },
  {
    id: 3,
    name: 'Michael Park',
    role: 'Blockchain Security Expert',
    company: 'SecureChain',
    expertise: ['Security Auditing', 'Penetration Testing', 'Risk Assessment'],
    rating: 4.9,
    sessions: 203,
    availability: 'Mon-Fri',
    image: '/mentors/michael.jpg',
    bio: 'Certified blockchain security professional. Conducted 100+ security audits for DeFi protocols.',
  },
];

// Program details
const programDetails = {
  levels: [
    {
      name: 'Beginner',
      description: 'Perfect for those new to Web3 development',
      duration: '3 months',
      topics: ['Blockchain Basics', 'Smart Contract Fundamentals', 'Web3 Tools'],
    },
    {
      name: 'Intermediate',
      description: 'For developers with basic Web3 knowledge',
      duration: '4 months',
      topics: ['Advanced Smart Contracts', 'DeFi Protocols', 'DApp Development'],
    },
    {
      name: 'Advanced',
      description: 'For experienced Web3 developers',
      duration: '6 months',
      topics: ['Protocol Design', 'Security Auditing', 'Tokenomics'],
    },
  ],
  benefits: [
    '1-on-1 mentoring sessions',
    'Project reviews and feedback',
    'Career guidance',
    'Networking opportunities',
    'Certificate upon completion',
  ],
};

export default function MentorshipPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Web3 Mentorship Program
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get personalized guidance from industry experts and accelerate your Web3 development journey
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="max-w-xl mx-auto mb-12">
          <Input
            type="text"
            placeholder="Search mentors by name, expertise, or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="mentors" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="mentors">Find a Mentor</TabsTrigger>
            <TabsTrigger value="program">Program Details</TabsTrigger>
          </TabsList>

          <TabsContent value="mentors">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors.map((mentor) => (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-gray-800 border-gray-700 p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden">
                        {/* Add mentor image here */}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{mentor.name}</h3>
                        <p className="text-gray-400">{mentor.role}</p>
                        <p className="text-gray-500 text-sm">{mentor.company}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span>{mentor.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{mentor.sessions} sessions</span>
                        </div>
                      </div>

                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Available: {mentor.availability}</span>
                      </div>

                      <p className="text-gray-400 text-sm">{mentor.bio}</p>

                      <Button className="w-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Request Mentorship
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="program">
            <div className="space-y-8">
              {/* Program Levels */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Program Levels</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {programDetails.levels.map((level) => (
                    <Card key={level.name} className="bg-gray-800 border-gray-700 p-6">
                      <h3 className="text-xl font-semibold mb-2">{level.name}</h3>
                      <p className="text-gray-400 mb-4">{level.description}</p>
                      <div className="flex items-center text-sm text-gray-400 mb-4">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Duration: {level.duration}</span>
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium">Topics Covered:</p>
                        <ul className="list-disc list-inside text-gray-400">
                          {level.topics.map((topic) => (
                            <li key={topic}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Program Benefits */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Program Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {programDetails.benefits.map((benefit) => (
                    <Card key={benefit} className="bg-gray-800 border-gray-700 p-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                          <Star className="w-4 h-4 text-blue-500" />
                        </div>
                        <span>{benefit}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Apply for Mentorship
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 