import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string; 
  headerTitle?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className, headerTitle }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Sidebar /> 
      <Header title={headerTitle} /> 
      <main
        className={cn(
          "ml-64 pt-16", // Offset for fixed sidebar (w-64 = 16rem) and header (h-16 = 4rem)
          "flex-1", // Take up remaining vertical space
          "overflow-y-auto", // Make main area scrollable if content overflows
          className 
        )}
      >
        <div className="p-6"> {/* Padding from mainContent requirements */}
          <div className="max-w-7xl mx-auto flex flex-col gap-6"> {/* Max width and content flow from mainContent requirements */}
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
