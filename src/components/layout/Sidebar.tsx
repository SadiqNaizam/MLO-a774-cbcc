import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  UserCircle2,
  FileText,
  Receipt,
  ShoppingBag,
  Mail,
  Archive,
  CalendarDays,
  Settings,
  HelpCircle,
  LucideIcon,
  BriefcaseBusiness
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, href: '#' },
  { id: 'leads', label: 'Leads', icon: Users, href: '#' },
  { id: 'customers', label: 'Customers', icon: UserCircle2, href: '#' },
  { id: 'proposals', label: 'Proposals', icon: FileText, href: '#' },
  { id: 'invoices', label: 'Invoices', icon: Receipt, href: '#' },
  { id: 'items', label: 'Items', icon: ShoppingBag, href: '#' },
  { id: 'mail', label: 'Mail', icon: Mail, href: '#' },
  { id: 'shoebox', label: 'Shoebox', icon: Archive, href: '#' },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays, href: '#' },
];

const footerNavItems: NavItem[] = [
  { id: 'settings', label: 'Settings', icon: Settings, href: '#' },
  { id: 'help', label: 'Help', icon: HelpCircle, href: '#' },
];

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [activeItem, setActiveItem] = useState<string>('dashboard');

  const renderNavItem = (item: NavItem) => (
    <a
      key={item.id}
      href={item.href}
      onClick={(e) => {
        e.preventDefault(); // Prevent page reload for '#' hrefs
        setActiveItem(item.id);
      }}
      className={cn(
        'flex items-center px-4 py-2.5 text-sm font-medium rounded-md',
        'transition-colors duration-150 ease-in-out',
        activeItem === item.id
          ? 'bg-sidebar-primary text-sidebar-primary-foreground'
          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:outline-none focus:ring-2 focus:ring-sidebar-ring'
      )}
    >
      <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
      {item.label}
    </a>
  );

  return (
    <aside
      className={cn(
        'flex flex-col h-full bg-sidebar text-sidebar-foreground w-64 p-4 space-y-1 fixed left-0 top-0 bottom-0 border-r border-sidebar-border',
        className
      )}
    >
      <div className="flex items-center mb-6 px-2 pt-2">
        <BriefcaseBusiness className="h-8 w-8 text-primary mr-2 flex-shrink-0" /> 
        <span className="text-xl font-bold text-foreground">Sales Dashboard</span>
      </div>
      <nav className="flex-grow space-y-1 overflow-y-auto">
        {mainNavItems.map(renderNavItem)}
      </nav>
      <div className="mt-auto space-y-1 border-t border-sidebar-border pt-4">
        {footerNavItems.map(renderNavItem)}
      </div>
    </aside>
  );
};

export default Sidebar;
