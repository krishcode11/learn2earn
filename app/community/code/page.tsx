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
  Code,
  Github,
  Star,
  GitFork,
  Eye,
  MessageCircle,
  Plus,
  Search,
  Filter,
  TrendingUp,
  Users,
  Clock,
} from 'lucide-react';

// Sample data
const codeSnippets = [
  {
    id: '1',
    title: 'Secure Smart Contract Template',
    description: 'A template for creating secure smart contracts with best practices.',
    language: 'solidity',
    author: 'John Doe',
    likes: 45,
    forks: 12,
    views: 234,
    tags: ['solidity', 'security', 'template'],
  },
  {
    id: '2',
    title: 'DeFi Yield Farming Strategy',
    description: 'Implementation of a yield farming strategy for DeFi protocols.',
    language: 'typescript',
    author: 'Jane Smith',
    likes: 34,
    forks: 8,
    views: 156,
    tags: ['defi', 'yield-farming', 'typescript'],
  },
  {
    id: '3',
    title: 'NFT Marketplace Contract',
    description: 'Complete NFT marketplace smart contract implementation.',
    language: 'solidity',
    author: 'Mike Johnson',
    likes: 67,
    forks: 15,
    views: 345,
    tags: ['nft', 'marketplace', 'solidity'],
  },
];

const repositories = [
  {
    id: '1',
    title: 'Web3 Learning Resources',
    description: 'Collection of resources for learning Web3 development.',
    stars: 234,
    forks: 45,
    language: 'markdown',
    lastUpdated: '2 days ago',
  },
  {
    id: '2',
    title: 'Blockchain Development Tools',
    description: 'Set of tools and utilities for blockchain development.',
    stars: 189,
    forks: 34,
    language: 'typescript',
    lastUpdated: '5 days ago',
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

export default function CodePage() {
  const [activeTab, setActiveTab] = useState('snippets');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Code Sharing</h1>
        <p className="text-muted-foreground">
          Share and discover code snippets, repositories, and collaborate with other developers.
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
                    placeholder="Search code..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-mint-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="mint" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Share Code
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="snippets">Code Snippets</TabsTrigger>
              <TabsTrigger value="repositories">Repositories</TabsTrigger>
            </TabsList>

            {/* Code Snippets Tab */}
            <TabsContent value="snippets">
              <div className="space-y-4">
                {codeSnippets.map((snippet, index) => (
                  <motion.div
                    key={snippet.id}
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
                                {snippet.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-4">
                                {snippet.description}
                              </p>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Star className="h-4 w-4 mr-2" />
                              {snippet.likes}
                            </Button>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Code className="h-4 w-4" />
                              <span>{snippet.language}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <GitFork className="h-4 w-4" />
                              <span>{snippet.forks} forks</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              <span>{snippet.views} views</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {snippet.tags.map((tag) => (
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
            </TabsContent>

            {/* Repositories Tab */}
            <TabsContent value="repositories">
              <div className="space-y-4">
                {repositories.map((repo, index) => (
                  <motion.div
                    key={repo.id}
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
                                {repo.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-4">
                                {repo.description}
                              </p>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Star className="h-4 w-4 mr-2" />
                              {repo.stars}
                            </Button>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Code className="h-4 w-4" />
                              <span>{repo.language}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <GitFork className="h-4 w-4" />
                              <span>{repo.forks} forks</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>Updated {repo.lastUpdated}</span>
                            </div>
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

        {/* Sidebar */}
        <div className="space-y-6">
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
                  <span className="text-sm">Total Snippets</span>
                  <span className="text-sm font-medium">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Repositories</span>
                  <span className="text-sm font-medium">567</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Contributors</span>
                  <span className="text-sm font-medium">234</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 