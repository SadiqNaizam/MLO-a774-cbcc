import React from 'react';
import { cn } from '@/lib/utils';
import StatCard from './StatCard';
import {
  PieChart as PieChartIcon, 
  ListFilter, 
  DollarSign, 
  Percent, 
  Users, 
  Target
} from 'lucide-react';

interface StatsCardGridProps {
  className?: string;
}

const funnelCountData = {
  title: 'Funnel count',
  mainStat: { value: '600', label: 'active leads' },
  type: 'funnel' as const,
  items: [
    { name: 'Discovery', value: 200, cost: '$ 200', duration: '2 days', color: 'bg-red-500' },
    { name: 'Qualified', value: 100, cost: '$ 100', duration: '2 days', color: 'bg-yellow-400' },
    { name: 'In conversation', value: 50, cost: '$ 100', duration: 'avg time on this stage', color: 'bg-indigo-500', highlight: true },
    { name: 'Negotiations', value: 20, cost: '$ 50', duration: '8 days', color: 'bg-green-500' },
    { name: 'Closed won', value: 20, cost: '$ 50', duration: '10 days', color: 'bg-purple-500' },
  ],
};

const sourcesData = {
  title: 'Sources',
  type: 'pieChart' as const,
  pieChartData: [
    { name: 'Clutch', value: 50, cost: '$ 3000', fill: '#EF4444' }, // red-500
    { name: 'Behance', value: 25, cost: '$ 1000', fill: '#FBBF24' }, // amber-400 (yellow-400 from Tailwind might be too light)
    { name: 'Instagram', value: 15, cost: '$ 1000', fill: '#14B8A6' }, // teal-500
    { name: 'Dribbble', value: 10, cost: '$ 1000', fill: '#6366F1' }, // indigo-500
  ],
  footerText: 'from leads total',
};


const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6 mb-6', className)}>
      <StatCard {...funnelCountData} icon={ListFilter} />
      <StatCard {...sourcesData} icon={PieChartIcon} />
    </div>
  );
};

export default StatsCardGrid;
