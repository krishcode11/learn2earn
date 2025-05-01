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
  Briefcase,
  Building2,
  Users,
  Rocket,
  Search,
  MapPin,
  Clock,
  DollarSign,
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const jobListings = [
  {
    id: 1,
    title: 'Senior Blockchain Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120k - $180k',
    description: 'Join our team to build and maintain blockchain infrastructure and smart contracts.',
    requirements: [
      '5+ years of experience in blockchain development',
      'Strong knowledge of Solidity and Web3.js',
      'Experience with DeFi protocols',
    ],
  },
  {
    id: 2,
    title: 'Web3 UI/UX Designer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90k - $130k',
    description: 'Create intuitive and engaging user experiences for our Web3 platform.',
    requirements: [
      '3+ years of UI/UX design experience',
      'Portfolio showcasing Web3/dApp designs',
      'Experience with Figma and design systems',
    ],
  },
  {
    id: 3,
    title: 'Blockchain Content Writer',
    location: 'Remote',
    type: 'Contract',
    salary: '$60k - $80k',
    description: 'Create educational content and documentation for blockchain technologies.',
    requirements: [
      '2+ years of technical writing experience',
      'Understanding of blockchain concepts',
      'Strong research and communication skills',
    ],
  },
];

const benefits = [
  {
    icon: Rocket,
    title: 'Growth Opportunities',
    description: 'Continuous learning and career advancement in the Web3 space.',
  },
  {
    icon: Users,
    title: 'Remote-First Culture',
    description: 'Work from anywhere with our distributed team.',
  },
  {
    icon: Building2,
    title: 'Flexible Benefits',
    description: 'Comprehensive health, wellness, and learning benefits.',
  },
];

export default function CareerPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobListings.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <BackButton />
              <h1 className="text-4xl font-bold tracking-tight">Careers</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Join our mission to revolutionize blockchain education and build the future of Web3.
            </p>
          </div>

          {/* Company Culture */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>Why Join Learn2Earn?</CardTitle>
              <CardDescription>
                We're building the future of blockchain education while creating an inclusive,
                innovative, and rewarding work environment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <benefit.icon className="h-12 w-12 text-mint-400" />
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Job Listings */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-3xl font-bold">Open Positions</h2>
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search jobs..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="group hover:border-mint-400/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="mint">Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="bg-mint-400/10 border-mint-400/20">
            <CardHeader>
              <CardTitle>Don't See the Right Role?</CardTitle>
              <CardDescription>
                We're always looking for talented individuals to join our team.
                Send us your resume and we'll keep you in mind for future opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="mint" size="lg">
                Submit Resume
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 