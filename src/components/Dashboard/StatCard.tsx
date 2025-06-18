import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip as RechartsTooltip } from 'recharts';
import { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface FunnelItem {
  name: string;
  value: number;
  cost: string;
  duration: string;
  color: string;
  highlight?: boolean;
}

interface PieChartItem {
  name: string;
  value: number;
  cost: string;
  fill: string;
}

interface StatCardProps {
  title: string;
  icon: LucideIcon;
  type: 'funnel' | 'pieChart';
  mainStat?: { value: string; label: string };
  items?: FunnelItem[];
  pieChartData?: PieChartItem[];
  footerText?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  icon: Icon,
  type,
  mainStat,
  items,
  pieChartData,
  footerText,
  className,
}) => {
  const totalFunnelValue = items ? items.reduce((sum, item) => sum + item.value, 0) : 0;

  return (
    <Card className={cn('bg-card text-card-foreground shadow-sm rounded-md', className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center">
          {/* <Icon className="h-5 w-5 mr-2 text-muted-foreground" /> Removing icon from here as per image. Title only. */}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {type === 'funnel' && items && mainStat && (
          <div className="space-y-3">
            <div className="flex items-baseline">
              <p className="text-4xl font-bold text-foreground">{mainStat.value}</p>
              <p className="ml-2 text-sm text-muted-foreground">{mainStat.label}</p>
            </div>
            <div className="w-full h-3 bg-muted rounded-full flex overflow-hidden mb-4">
              {items.map((item) => (
                <div
                  key={item.name}
                  className={cn(item.color, 'h-full')}
                  style={{ width: `${(item.value / totalFunnelValue) * 100}%` }}
                  title={`${item.name}: ${item.value}`}
                />
              ))}
            </div>
            <ul className="space-y-2 text-sm">
              {items.map((item) => (
                <li key={item.name} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-3">
                  <span className={cn('w-3 h-3 rounded-full', item.color)} />
                  <span className="text-muted-foreground">{item.name}</span>
                  <span className="text-foreground font-medium text-right">{item.value}</span>
                  <span className="text-muted-foreground text-right pr-1">{item.cost}</span>
                  <span className={cn('col-start-4 text-muted-foreground text-right', item.highlight && 'bg-gray-700 text-white px-2 py-0.5 rounded-sm text-xs')}>
                    {item.duration}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {type === 'pieChart' && pieChartData && (
          <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
            <div className="w-full md:w-1/2 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    dataKey="value"
                    paddingAngle={2}
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} stroke={entry.fill} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    formatter={(value: number, name: string) => [`${value}%`, name]}
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}
                    labelStyle={{ color: 'hsl(var(--card-foreground))' }}
                    itemStyle={{ color: 'hsl(var(--card-foreground))' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2 space-y-2 text-sm">
              {pieChartData.map((entry) => (
                <div key={entry.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.fill }} />
                    <span className="text-muted-foreground">{entry.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-foreground font-medium mr-3">{entry.cost}</span>
                    <span className="text-muted-foreground w-8 text-right">{entry.value}%</span>
                  </div>
                </div>
              ))}
              {footerText && 
                <div className="flex justify-end mt-2">
                    <Badge variant="secondary" className="bg-muted text-muted-foreground font-normal text-xs py-1 px-2">{footerText}</Badge>
                </div>
              }
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
