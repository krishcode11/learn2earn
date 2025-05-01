'use client';

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
  BookOpen,
  Trophy,
  Users,
  Wallet,
  Code,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Learn Blockchain',
    description: 'Access comprehensive courses on blockchain technology, smart contracts, and Web3 development.',
  },
  {
    icon: Trophy,
    title: 'Earn Rewards',
    description: 'Get rewarded with L2E tokens for completing courses and contributing to the community.',
  },
  {
    icon: Users,
    title: 'Join Community',
    description: 'Connect with fellow learners, share knowledge, and grow together in our vibrant community.',
  },
  {
    icon: Wallet,
    title: 'Manage Tokens',
    description: 'Track your earnings, manage your L2E tokens, and participate in token economics.',
  },
  {
    icon: Code,
    title: 'Build Projects',
    description: 'Apply your knowledge by building real-world blockchain projects and applications.',
  },
  {
    icon: Sparkles,
    title: 'Earn Achievements',
    description: 'Unlock achievements and badges as you progress through your learning journey.',
  },
];

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Blockchain enthusiast with 8+ years of experience in Web3 development and education.',
    image: '/team/alex.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Head of Education',
    bio: 'Former blockchain developer turned educator, passionate about making Web3 accessible to everyone.',
    image: '/team/sarah.jpg',
  },
  {
    name: 'Michael Park',
    role: 'Lead Developer',
    bio: 'Full-stack developer specializing in smart contracts and decentralized applications.',
    image: '/team/michael.jpg',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <BackButton />
              <h1 className="text-4xl font-bold tracking-tight">About Learn2Earn</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Empowering the next generation of blockchain developers through education and rewards.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                Learn2Earn is on a mission to make blockchain education accessible, engaging, and rewarding.
                We believe that everyone should have the opportunity to learn about blockchain technology
                and be rewarded for their efforts in building the future of Web3.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:border-mint-400/50 transition-colors">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-mint-400 mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Team Section */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="group hover:border-mint-400/50 transition-colors">
                  <CardHeader className="p-0">
                    <div className="relative aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2">{member.name}</CardTitle>
                    <p className="text-mint-400 mb-2">{member.role}</p>
                    <CardDescription>{member.bio}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>Start Your Blockchain Journey</CardTitle>
              <CardDescription>
                Join thousands of learners who are already building their future in Web3.
                Start learning, earning, and growing with Learn2Earn today.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="mint" size="lg">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 