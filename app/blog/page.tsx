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
import { BackButton } from '../components/ui/back-button';
import {
  Calendar,
  Clock,
  Tag,
  Search,
  ChevronRight,
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const categories = [
  'All',
  'Blockchain',
  'Smart Contracts',
  'Web3',
  'DeFi',
  'NFTs',
  'Tutorials',
];

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Solidity Development',
    excerpt: 'Learn the basics of Solidity programming language and start building your first smart contract.',
    category: 'Smart Contracts',
    date: '2024-03-15',
    readTime: '10 min read',
    image: '/blog/solidity.jpg',
  },
  {
    id: 2,
    title: 'Understanding DeFi Protocols',
    excerpt: 'A comprehensive guide to decentralized finance protocols and how they work.',
    category: 'DeFi',
    date: '2024-03-14',
    readTime: '15 min read',
    image: '/blog/defi.jpg',
  },
  {
    id: 3,
    title: 'NFT Marketplace Development',
    excerpt: 'Step-by-step guide to building your own NFT marketplace using Web3 technologies.',
    category: 'NFTs',
    date: '2024-03-13',
    readTime: '20 min read',
    image: '/blog/nft.jpg',
  },
  {
    id: 4,
    title: 'Web3 Authentication Best Practices',
    excerpt: 'Learn how to implement secure authentication in your Web3 applications.',
    category: 'Web3',
    date: '2024-03-12',
    readTime: '12 min read',
    image: '/blog/web3.jpg',
  },
  {
    id: 5,
    title: 'Blockchain Consensus Mechanisms',
    excerpt: 'Understanding different consensus mechanisms and their role in blockchain networks.',
    category: 'Blockchain',
    date: '2024-03-11',
    readTime: '18 min read',
    image: '/blog/consensus.jpg',
  },
  {
    id: 6,
    title: 'Building DApps with React and Web3.js',
    excerpt: 'Tutorial on creating decentralized applications using React and Web3.js.',
    category: 'Tutorials',
    date: '2024-03-10',
    readTime: '25 min read',
    image: '/blog/dapps.jpg',
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <BackButton />
              <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Latest insights, tutorials, and updates from the blockchain world.
            </p>
          </div>

          {/* Search and Categories */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'mint' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group hover:border-mint-400/50 transition-colors">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="mb-2 group-hover:text-mint-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Tag className="h-4 w-4" />
                      <span>{post.category}</span>
                    </div>
                    <Button variant="ghost" className="group-hover:text-mint-400">
                      Read More
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>Subscribe to Our Newsletter</CardTitle>
              <CardDescription>
                Get the latest blockchain insights and tutorials delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input placeholder="Enter your email" type="email" />
                <Button variant="mint">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 