import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-64 right-0 z-10 flex items-center justify-between px-6 bg-background border-b border-border h-16',
        className
      )}
    >
      <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Create
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-card text-card-foreground border-border">
          <DropdownMenuItem className="hover:bg-muted focus:bg-muted">New Lead</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-muted focus:bg-muted">New Customer</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-muted focus:bg-muted">New Proposal</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default TopHeader;
