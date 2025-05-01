'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  MessageSquare,
  Users,
  Calendar,
  Plus,
  Search,
  ThumbsUp,
  MessageCircle,
  Share2,
  BookOpen,
  Trophy,
  Clock,
  Tag,
} from 'lucide-react';
import { BackButton } from '../components/ui/back-button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const SAMPLE_DISCUSSIONS = [
  {
    id: '1',
    title: 'Understanding Smart Contracts',
    author: {
      name: 'John Doe',
      avatar: '/avatars/john-doe.jpg',
    },
    content: "I'm having trouble understanding how smart contracts work. Can someone explain the basic concepts?",
    likes: 15,
    comments: 8,
    tags: ['smart-contracts', 'blockchain', 'help'],
    createdAt: '2 hours ago',
  },
  {
    id: '2',
    title: 'Best Practices for Solidity Development',
    author: {
      name: 'Jane Smith',
      avatar: '/avatars/jane-smith.jpg',
    },
    content: 'What are some best practices you follow when writing Solidity code? Share your tips!',
    likes: 23,
    comments: 12,
    tags: ['solidity', 'development', 'best-practices'],
    createdAt: '5 hours ago',
  },
];

const SAMPLE_STUDY_GROUPS = [
  {
    id: '1',
    name: 'Blockchain Beginners',
    description: 'A group for those just starting their blockchain journey',
    members: 45,
    topics: ['blockchain-basics', 'cryptography', 'consensus'],
    createdAt: '1 week ago',
    activeDiscussions: 12,
    upcomingEvents: 2,
    level: 'Beginner',
  },
  {
    id: '2',
    name: 'Smart Contract Developers',
    description: 'Advanced discussions about smart contract development',
    members: 32,
    topics: ['solidity', 'security', 'optimization'],
    createdAt: '2 weeks ago',
    activeDiscussions: 8,
    upcomingEvents: 1,
    level: 'Advanced',
  },
  {
    id: '3',
    name: 'DeFi Enthusiasts',
    description: 'Learn and discuss DeFi protocols and strategies',
    members: 78,
    topics: ['defi', 'yield-farming', 'liquidity'],
    createdAt: '3 weeks ago',
    activeDiscussions: 15,
    upcomingEvents: 3,
    level: 'Intermediate',
  },
];

const SAMPLE_EVENTS = [
  {
    id: '1',
    title: 'Blockchain Workshop',
    description: 'Hands-on workshop on building your first dApp',
    date: '2024-04-15',
    time: '14:00 UTC',
    attendees: 28,
    type: 'workshop',
    location: 'Virtual',
    host: {
      name: 'John Doe',
      avatar: '/avatars/john-doe.jpg',
    },
  },
  {
    id: '2',
    title: 'AMA with Industry Expert',
    description: 'Ask Me Anything session with a leading blockchain developer',
    date: '2024-04-20',
    time: '16:00 UTC',
    attendees: 45,
    type: 'ama',
    location: 'Virtual',
    host: {
      name: 'Jane Smith',
      avatar: '/avatars/jane-smith.jpg',
    },
  },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('discussions');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <BackButton />
              <h1 className="text-4xl font-bold tracking-tight">Community</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Connect with fellow learners, join study groups, and participate in events.
            </p>
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full">
              <TabsTrigger value="discussions" className="flex-1">Discussions</TabsTrigger>
              <TabsTrigger value="studyGroups" className="flex-1">Study Groups</TabsTrigger>
              <TabsTrigger value="events" className="flex-1">Events</TabsTrigger>
            </TabsList>

            {/* Discussions Tab */}
            <TabsContent value="discussions" className="mt-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex-grow">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search discussions..."
                        className="w-full pl-10 pr-4 py-2 rounded-md bg-white/5 border border-white/10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Discussion
                  </Button>
                </div>

                <div className="space-y-4">
                  {SAMPLE_DISCUSSIONS.map((discussion) => (
                    <Card key={discussion.id}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Avatar className="w-10 h-10">
                              <AvatarImage
                                src={discussion.author.avatar}
                                alt={discussion.author.name}
                              />
                              <AvatarFallback>
                                {discussion.author.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">
                                {discussion.title}
                              </CardTitle>
                              <CardDescription>
                                Posted by {discussion.author.name} •{' '}
                                {discussion.createdAt}
                              </CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            {discussion.content}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {discussion.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded-full bg-white/5"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm">
                              <ThumbsUp className="h-4 w-4 mr-2" />
                              {discussion.likes}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              {discussion.comments}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4 mr-2" />
                              Share
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Study Groups Tab */}
            <TabsContent value="studyGroups" className="mt-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex-grow">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search study groups..."
                        className="w-full pl-10 pr-4 py-2 rounded-md bg-white/5 border border-white/10"
                      />
                    </div>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Group
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {SAMPLE_STUDY_GROUPS.map((group) => (
                    <Card key={group.id}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>{group.name}</CardTitle>
                          <span className="px-2 py-1 text-xs rounded-full bg-white/5">
                            {group.level}
                          </span>
                        </div>
                        <CardDescription>{group.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              <span>{group.members} members</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MessageSquare className="h-4 w-4" />
                              <span>{group.activeDiscussions} active discussions</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{group.upcomingEvents} upcoming events</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {group.topics.map((topic) => (
                              <span
                                key={topic}
                                className="px-2 py-1 text-xs rounded-full bg-white/5"
                              >
                                #{topic}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              Created {group.createdAt}
                            </span>
                            <Button>Join Group</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="mt-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex-grow">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search events..."
                        className="w-full pl-10 pr-4 py-2 rounded-md bg-white/5 border border-white/10"
                      />
                    </div>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Event
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {SAMPLE_EVENTS.map((event) => (
                    <Card key={event.id}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>{event.title}</CardTitle>
                          <span className="px-2 py-1 text-xs rounded-full bg-white/5">
                            {event.type}
                          </span>
                        </div>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={event.host.avatar}
                              alt={event.host.name}
                              className="w-8 h-8 rounded-full"
                            />
                            <div className="text-sm text-muted-foreground">
                              Hosted by {event.host.name}
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {event.date} at {event.time}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              <span>{event.attendees} attending</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              {event.location}
                            </span>
                            <Button>Register</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
} 