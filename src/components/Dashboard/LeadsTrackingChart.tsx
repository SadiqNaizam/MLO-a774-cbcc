import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area
} from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface LeadsTrackingChartProps {
  className?: string;
}

const chartData = [
  { name: 'March', closedWon: 68, closedLost: 82 },
  { name: 'April', closedWon: 55, closedLost: 38 },
  { name: 'May', closedWon: 78, closedLost: 32 },
  { name: 'June', closedWon: 90, closedLost: 8 },
  { name: 'July', closedWon: 62, closedLost: 42 },
  { name: 'August', closedWon: 98, closedLost: 30 },
];

const LeadsTrackingChart: React.FC<LeadsTrackingChartProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card text-card-foreground shadow-sm rounded-md', className)}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">Leads tracking</CardTitle>
            <div className="flex items-baseline space-x-4 mt-1">
                <p className="text-3xl font-bold text-foreground">680 <span className="text-sm font-normal text-muted-foreground">total closed</span></p>
                <p className="text-3xl font-bold text-foreground">70 <span className="text-sm font-normal text-muted-foreground">total lost</span></p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
                <button className="px-3 py-1 text-xs rounded-md bg-muted text-muted-foreground hover:bg-secondary">Leads came</button>
                <button className="px-3 py-1 text-xs rounded-md bg-primary/10 text-primary hover:bg-primary/20">Leads Converted</button>
                <button className="px-3 py-1 text-xs rounded-md bg-muted text-muted-foreground hover:bg-secondary">Total deals size</button>
            </div>
            <Select defaultValue="last-6-months">
                <SelectTrigger className="w-[150px] text-xs bg-card text-card-foreground border-border focus:ring-ring">
                <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent className="bg-popover text-popover-foreground border-border">
                <SelectItem value="last-6-months">Last 6 months</SelectItem>
                <SelectItem value="last-3-months">Last 3 months</SelectItem>
                </SelectContent>
            </Select>
          </div> 
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis 
                dataKey="name" 
                tickLine={false} 
                axisLine={false} 
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                domain={[0, 'dataMax + 10']}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}
                labelStyle={{ color: 'hsl(var(--card-foreground))', fontWeight: 'bold' }}
                itemStyle={{ color: 'hsl(var(--card-foreground))' }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="square" 
                iconSize={10}
                wrapperStyle={{ fontSize: '12px', color: 'hsl(var(--muted-foreground))' }}
              />
              <Area type="monotone" dataKey="closedWon" name="Closed won" stroke="#10B981" fillOpacity={1} fill="url(#colorClosedWon)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#10B981' }} activeDot={{ r: 6, fill: '#10B981', stroke: 'hsl(var(--card))' }}/>
              <Area type="monotone" dataKey="closedLost" name="Closed lost" stroke="#EF4444" fillOpacity={1} fill="url(#colorClosedLost)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#EF4444' }} activeDot={{ r: 6, fill: '#EF4444', stroke: 'hsl(var(--card))' }}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
