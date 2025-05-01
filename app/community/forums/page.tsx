'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  MessageSquare,
  ThumbsUp,
  MessageCircle,
  Eye,
  Clock,
  TrendingUp,
  Filter,
  Search,
  Plus,
} from 'lucide-react';

// Sample data
const categories = [
  { name: 'General', count: 156 },
  { name: 'Blockchain', count: 89 },
  { name: 'Smart Contracts', count: 67 },
  { name: 'DeFi', count: 45 },
  { name: 'NFTs', count: 34 },
  { name: 'Web3', count: 23 },
];

const threads = [
  {
    id: '1',
    title: 'How to implement a secure smart contract?',
    category: 'Smart Contracts',
    author: 'John Doe',
    replies: 12,
    views: 234,
    likes: 45,
    lastActivity: '2 hours ago',
    tags: ['solidity', 'security', 'best-practices'],
  },
  {
    id: '2',
    title: 'Understanding DeFi protocols and their risks',
    category: 'DeFi',
    author: 'Jane Smith',
    replies: 8,
    views: 156,
    likes: 34,
    lastActivity: '5 hours ago',
    tags: ['defi', 'risk-management', 'protocols'],
  },
  {
    id: '3',
    title: 'NFT marketplace development guide',
    category: 'NFTs',
    author: 'Mike Johnson',
    replies: 15,
    views: 345,
    likes: 67,
    lastActivity: '1 day ago',
    tags: ['nft', 'marketplace', 'development'],
  },
];

const trendingTopics = [
  {
    title: 'Smart Contract Security',
    posts: 234,
    growth: '+15%',
  },
  {
    title: 'DeFi Yield Farming',
    posts: 189,
    growth: '+12%',
  },
  {
    title: 'NFT Standards',
    posts: 156,
    growth: '+8%',
  },
];

export default function ForumsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Community Forums</h1>
        <p className="text-muted-foreground">
          Join discussions, share knowledge, and connect with other learners.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-mint-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="mint" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  New Thread
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Threads */}
          <div className="space-y-4">
            {threads.map((thread, index) => (
              <motion.div
                key={thread.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            {thread.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{thread.category}</span>
                            <span>•</span>
                            <span>Posted by {thread.author}</span>
                            <span>•</span>
                            <span>{thread.lastActivity}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          {thread.likes}
                        </Button>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{thread.replies} replies</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{thread.views} views</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {thread.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-full bg-mint-400/10 text-mint-400 text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <span className="text-sm">{category.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card>
            <CardHeader>
              <CardTitle>Trending Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trendingTopics.map((topic) => (
                  <div
                    key={topic.title}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-medium">{topic.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {topic.posts} posts
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-green-400 text-sm">
                      <TrendingUp className="h-4 w-4" />
                      {topic.growth}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Community Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Community Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Members</span>
                  <span className="text-sm font-medium">10,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Discussions</span>
                  <span className="text-sm font-medium">1,567</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Posts</span>
                  <span className="text-sm font-medium">45,678</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 