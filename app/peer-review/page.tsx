'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Users,
  CheckCircle2,
  Clock,
  Star,
  ChevronRight,
  MessageSquare,
} from 'lucide-react';

const submissions = [
  {
    id: 1,
    title: 'Smart Contract Implementation',
    author: 'John Doe',
    submittedAt: '2 hours ago',
    status: 'pending',
    type: 'Code Review',
    difficulty: 'Intermediate',
  },
  {
    id: 2,
    title: 'DeFi Protocol Analysis',
    author: 'Jane Smith',
    submittedAt: '5 hours ago',
    status: 'pending',
    type: 'Project Review',
    difficulty: 'Advanced',
  },
  {
    id: 3,
    title: 'Blockchain Architecture Design',
    author: 'Mike Johnson',
    submittedAt: '1 day ago',
    status: 'pending',
    type: 'Design Review',
    difficulty: 'Expert',
  },
];

const completedReviews = [
  {
    id: 1,
    title: 'Web3 Integration Project',
    author: 'Sarah Wilson',
    reviewedAt: '3 days ago',
    rating: 4.5,
    feedback: 'Excellent implementation with clear documentation',
  },
  {
    id: 2,
    title: 'NFT Marketplace Development',
    author: 'Alex Brown',
    reviewedAt: '1 week ago',
    rating: 4.0,
    feedback: 'Good work on the smart contract security',
  },
];

export default function PeerReview() {
  const [activeTab, setActiveTab] = useState<'pending' | 'completed'>('pending');

  return (
    <div className="container mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">Peer Review</h1>
          <p className="text-muted-foreground">
            Review and provide feedback on community submissions
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 border-b">
          <Button
            variant={activeTab === 'pending' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('pending')}
            className="relative"
          >
            <Clock className="h-4 w-4 mr-2" />
            Pending Reviews
            <span className="ml-2 bg-mint-400 text-black px-2 py-0.5 rounded-full text-xs">
              {submissions.length}
            </span>
          </Button>
          <Button
            variant={activeTab === 'completed' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('completed')}
          >
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Completed Reviews
          </Button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'pending' ? (
            submissions.map((submission) => (
              <Card key={submission.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-mint-400/10">
                        <MessageSquare className="h-6 w-6 text-mint-400" />
                      </div>
                      <div>
                        <CardTitle>{submission.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>By {submission.author}</span>
                          <span>•</span>
                          <span>{submission.submittedAt}</span>
                        </div>
                      </div>
                    </div>
                    <Button>
                      Review
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-mint-400" />
                      <span>{submission.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-mint-400" />
                      <span>{submission.difficulty}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            completedReviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-mint-400/10">
                      <CheckCircle2 className="h-6 w-6 text-mint-400" />
                    </div>
                    <div>
                      <CardTitle>{review.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>By {review.author}</span>
                        <span>•</span>
                        <span>{review.reviewedAt}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-mint-400" />
                      <span className="font-medium">{review.rating}/5.0</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {review.feedback}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
} 