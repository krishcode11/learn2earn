import { useState, useEffect } from 'react';
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
import { Line, Doughnut } from 'react-chartjs-2';

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

interface ProgressData {
  labels: string[];
  values: number[];
}

interface ProgressVisualizationProps {
  courseProgress: ProgressData;
  completionRate: number;
  timeSpent: number;
}

export default function ProgressVisualization({
  courseProgress,
  completionRate,
  timeSpent,
}: ProgressVisualizationProps) {
  const [chartData, setChartData] = useState({
    labels: courseProgress.labels,
    datasets: [
      {
        label: 'Course Progress',
        data: courseProgress.values,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  const completionData = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [completionRate, 100 - completionRate],
        backgroundColor: ['rgb(75, 192, 192)', 'rgb(200, 200, 200)'],
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Progress Over Time</h3>
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
              },
            }}
          />
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Completion Rate</h3>
          <div className="h-64">
            <Doughnut
              data={completionData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Completion Rate</h4>
          <p className="text-2xl font-bold">{completionRate}%</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Time Spent</h4>
          <p className="text-2xl font-bold">{Math.round(timeSpent / 60)} hours</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Remaining Time</h4>
          <p className="text-2xl font-bold">
            {Math.round((100 - completionRate) * (timeSpent / completionRate) / 60)} hours
          </p>
        </div>
      </div>
    </div>
  );
} 