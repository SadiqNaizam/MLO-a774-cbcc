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

interface HeaderProps {
  className?: string;
  title?: string; // Allow dynamic title if needed, default to Dashboard
}

const Header: React.FC<HeaderProps> = ({ className, title = 'Dashboard' }) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-64 right-0 z-30 flex items-center justify-between px-6 bg-background border-b border-border h-16',
        className
      )}
    >
      <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded">
            Create
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-card text-card-foreground border-border w-56 rounded-md shadow-lg">
          <DropdownMenuItem className="cursor-pointer hover:bg-muted focus:bg-muted rounded-sm text-sm p-2">New Lead</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer hover:bg-muted focus:bg-muted rounded-sm text-sm p-2">New Customer</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer hover:bg-muted focus:bg-muted rounded-sm text-sm p-2">New Proposal</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
