'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  Users,
  BookOpen,
  Star,
  Target,
  TrendingUp,
  Activity,
} from 'lucide-react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface Metric {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
  }[];
}

export function AnalyticsDashboard() {
  const metrics: Metric[] = [
    {
      title: 'Active Learners',
      value: '1,234',
      change: 12.5,
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: 'Courses Completed',
      value: '456',
      change: 8.3,
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      title: 'Tokens Distributed',
      value: '50,000',
      change: 15.7,
      icon: <Star className="h-5 w-5" />,
    },
    {
      title: 'Skill Mastery',
      value: '89%',
      change: 5.2,
      icon: <Target className="h-5 w-5" />,
    },
  ];

  const learningProgressData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Course Completion',
        data: [30, 45, 60, 75, 85, 90],
        borderColor: '#10B981',
      },
      {
        label: 'Project Completion',
        data: [20, 35, 50, 65, 80, 85],
        borderColor: '#3B82F6',
      },
    ],
  };

  const communityEngagementData: ChartData = {
    labels: ['Discussions', 'Projects', 'Reviews', 'Events'],
    datasets: [
      {
        label: 'Engagement',
        data: [300, 150, 200, 100],
        backgroundColor: '#10B981',
        borderColor: '#10B981',
      },
    ],
  };

  const tokenDistributionData: ChartData = {
    labels: ['Course Rewards', 'Project Rewards', 'Community Rewards', 'Achievements'],
    datasets: [
      {
        label: 'Tokens',
        data: [40, 30, 20, 10],
        backgroundColor: '#10B981',
        borderColor: '#10B981',
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart className="h-5 w-5" />
          Analytics Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      {metric.icon}
                    </div>
                    <span
                      className={`text-sm ${
                        metric.change > 0 ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {metric.change > 0 ? '+' : ''}
                      {metric.change}%
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{metric.value}</h3>
                  <p className="text-sm text-muted-foreground">{metric.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Tabs defaultValue="learning" className="space-y-6">
          <TabsList>
            <TabsTrigger value="learning">Learning Progress</TabsTrigger>
            <TabsTrigger value="community">Community Engagement</TabsTrigger>
            <TabsTrigger value="tokens">Token Distribution</TabsTrigger>
          </TabsList>

          <TabsContent value="learning">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Learning Progress Over Time</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-green-500">Course Completion</span>
                    <span className="text-sm text-blue-500">Project Completion</span>
                  </div>
                </div>
                <div className="h-80">
                  <Line
                    data={learningProgressData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Community Engagement</h3>
                  <Activity className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="h-80">
                  <Pie
                    data={communityEngagementData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tokens">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Token Distribution</h3>
                  <TrendingUp className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="h-80">
                  <Pie
                    data={tokenDistributionData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
} 