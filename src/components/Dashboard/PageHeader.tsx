import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CalendarDays } from 'lucide-react';

interface PageHeaderProps {
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<string>('leads');

  return (
    <div
      className={cn('flex items-center justify-between mb-6', className)}
    >
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
        <TabsList className="bg-muted p-1 rounded-md">
          <TabsTrigger 
            value="sales" 
            className="px-4 py-1.5 text-sm data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-sm"
          >
            Sales
          </TabsTrigger>
          <TabsTrigger 
            value="leads" 
            className="px-4 py-1.5 text-sm data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-sm"
          >
            Leads
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Select defaultValue="last-6-months">
        <SelectTrigger className="w-[180px] bg-card text-card-foreground border-border focus:ring-ring">
          <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
          <SelectValue placeholder="Select period" />
        </SelectTrigger>
        <SelectContent className="bg-popover text-popover-foreground border-border">
          <SelectItem value="last-6-months">Last 6 months</SelectItem>
          <SelectItem value="last-3-months">Last 3 months</SelectItem>
          <SelectItem value="last-month">Last month</SelectItem>
          <SelectItem value="all-time">All time</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PageHeader;
