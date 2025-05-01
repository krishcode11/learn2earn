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
  Trophy,
  Star,
  Users,
  Eye,
  MessageCircle,
  Plus,
  Search,
  TrendingUp,
  Clock,
  Github,
  ExternalLink,
  ThumbsUp,
  Share2,
} from 'lucide-react';

// Sample data
const projects = [
  {
    id: '1',
    title: 'DeFi Yield Optimizer',
    description: 'An automated yield farming strategy optimizer for DeFi protocols.',
    category: 'DeFi',
    author: 'John Doe',
    stars: 234,
    contributors: 12,
    views: 1234,
    comments: 45,
    lastUpdated: '2 days ago',
    tags: ['defi', 'yield-farming', 'automation'],
    status: 'active',
    techStack: ['Solidity', 'TypeScript', 'React'],
  },
  {
    id: '2',
    title: 'NFT Marketplace',
    description: 'A decentralized NFT marketplace with advanced features.',
    category: 'NFT',
    author: 'Jane Smith',
    stars: 189,
    contributors: 8,
    views: 987,
    comments: 34,
    lastUpdated: '5 days ago',
    tags: ['nft', 'marketplace', 'web3'],
    status: 'beta',
    techStack: ['Solidity', 'Next.js', 'TailwindCSS'],
  },
  {
    id: '3',
    title: 'DAO Governance Platform',
    description: 'A comprehensive platform for DAO governance and voting.',
    category: 'DAO',
    author: 'Mike Johnson',
    stars: 156,
    contributors: 15,
    views: 876,
    comments: 23,
    lastUpdated: '1 week ago',
    tags: ['dao', 'governance', 'voting'],
    status: 'active',
    techStack: ['Solidity', 'Vue.js', 'GraphQL'],
  },
];

const trendingProjects = [
  {
    title: 'Smart Contract Security',
    growth: '+15%',
    contributors: 45,
  },
  {
    title: 'DeFi Protocol Integration',
    growth: '+12%',
    contributors: 34,
  },
  {
    title: 'NFT Standards',
    growth: '+8%',
    contributors: 23,
  },
];

const categories = [
  { name: 'All', count: 156 },
  { name: 'DeFi', count: 45 },
  { name: 'NFT', count: 34 },
  { name: 'DAO', count: 23 },
  { name: 'Infrastructure', count: 18 },
  { name: 'Tools', count: 12 },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Project Showcase</h1>
        <p className="text-muted-foreground">
          Discover and collaborate on innovative Web3 projects.
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
                    placeholder="Search projects..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-mint-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="mint" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Submit Project
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Star className="h-4 w-4 mr-2" />
                          {project.stars}
                        </Button>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{project.contributors} contributors</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{project.views} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{project.comments} comments</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-full bg-mint-400/10 text-mint-400 text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <span className="px-2 py-1 rounded-full bg-white/5">
                          {project.status}
                        </span>
                        <span>•</span>
                        <span>Updated {project.lastUpdated}</span>
                      </div>

                      <div className="mt-auto flex items-center gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
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

          {/* Trending Projects */}
          <Card>
            <CardHeader>
              <CardTitle>Trending Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trendingProjects.map((project) => (
                  <div
                    key={project.title}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-medium">{project.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{project.contributors} contributors</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-green-400 text-sm">
                      <TrendingUp className="h-4 w-4" />
                      {project.growth}
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
                  <span className="text-sm">Total Projects</span>
                  <span className="text-sm font-medium">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Contributors</span>
                  <span className="text-sm font-medium">234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Stars</span>
                  <span className="text-sm font-medium">1,234</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 