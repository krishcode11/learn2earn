'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Code,
  BookOpen,
  Lightbulb,
  FileText,
  Search,
  ChevronDown,
  ChevronUp,
  Github,
  ExternalLink,
} from 'lucide-react';

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/courses',
    description: 'Retrieve a list of available courses',
    parameters: [
      {
        name: 'category',
        type: 'string',
        description: 'Filter courses by category',
      },
      {
        name: 'level',
        type: 'string',
        description: 'Filter courses by difficulty level',
      },
    ],
  },
  {
    method: 'POST',
    path: '/api/enroll',
    description: 'Enroll a user in a course',
    parameters: [
      {
        name: 'courseId',
        type: 'string',
        description: 'ID of the course to enroll in',
      },
      {
        name: 'userId',
        type: 'string',
        description: 'ID of the user enrolling',
      },
    ],
  },
];

const integrationGuides = [
  {
    title: 'GitHub Integration',
    description: 'Learn how to integrate with GitHub for code sharing and collaboration.',
    steps: [
      'Set up OAuth authentication',
      'Configure webhooks',
      'Implement repository syncing',
    ],
  },
  {
    title: 'Discord Integration',
    description: 'Integrate with Discord for community engagement and notifications.',
    steps: [
      'Create a Discord bot',
      'Set up event listeners',
      'Configure notification channels',
    ],
  },
];

const bestPractices = [
  {
    title: 'Course Creation',
    description: 'Best practices for creating effective courses',
    practices: [
      'Structure content logically',
      'Include practical exercises',
      'Provide clear learning objectives',
    ],
  },
  {
    title: 'Token Distribution',
    description: 'Guidelines for fair token distribution',
    practices: [
      'Set clear reward criteria',
      'Implement anti-abuse measures',
      'Ensure transparent distribution',
    ],
  },
];

const codeExamples = [
  {
    title: 'Course Enrollment',
    language: 'typescript',
    code: `// Enroll a user in a course
async function enrollUser(courseId: string, userId: string) {
  const response = await fetch('/api/enroll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ courseId, userId }),
  });
  return response.json();
}`,
  },
  {
    title: 'Token Reward',
    language: 'solidity',
    code: `// Smart contract for token rewards
contract Learn2EarnRewards {
    mapping(address => uint256) public rewards;
    
    function awardTokens(address user, uint256 amount) public {
        rewards[user] += amount;
    }
}`,
  },
];

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState('api');
  const [expandedEndpoint, setExpandedEndpoint] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn how to integrate with Learn2Earn and make the most of our platform
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="api">API Reference</TabsTrigger>
            <TabsTrigger value="integrations">Integration Guides</TabsTrigger>
            <TabsTrigger value="practices">Best Practices</TabsTrigger>
            <TabsTrigger value="examples">Code Examples</TabsTrigger>
          </TabsList>

          <TabsContent value="api">
            <div className="space-y-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search API endpoints..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-mint-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {apiEndpoints.map((endpoint) => (
                <Card key={endpoint.path}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        <span className="font-mono">{endpoint.method}</span>
                        <span className="font-mono text-muted-foreground">
                          {endpoint.path}
                        </span>
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setExpandedEndpoint(
                            expandedEndpoint === endpoint.path
                              ? null
                              : endpoint.path
                          )
                        }
                      >
                        {expandedEndpoint === endpoint.path ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  {expandedEndpoint === endpoint.path && (
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {endpoint.description}
                      </p>
                      <div className="space-y-4">
                        <h4 className="font-medium">Parameters</h4>
                        <div className="space-y-2">
                          {endpoint.parameters.map((param) => (
                            <div
                              key={param.name}
                              className="flex items-start gap-4"
                            >
                              <div className="font-mono text-sm bg-gray-800 px-2 py-1 rounded">
                                {param.name}
                              </div>
                              <div>
                                <p className="text-sm font-medium">
                                  {param.type}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {param.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="integrations">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {integrationGuides.map((guide) => (
                <Card key={guide.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Github className="h-5 w-5" />
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {guide.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium">Steps</h4>
                      <ol className="list-decimal list-inside space-y-2">
                        {guide.steps.map((step) => (
                          <li key={step} className="text-muted-foreground">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <Button variant="outline" className="mt-4">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="practices">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bestPractices.map((practice) => (
                <Card key={practice.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      {practice.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {practice.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium">Key Practices</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {practice.practices.map((item) => (
                          <li key={item} className="text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="examples">
            <div className="space-y-8">
              {codeExamples.map((example) => (
                <Card key={example.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      {example.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm font-mono">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                    <Button variant="outline" className="mt-4">
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 