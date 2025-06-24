import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div 
      className={cn(
        "grid h-screen w-full bg-background text-foreground",
        // Defines a layout with a fixed-width sidebar and a header/main content area.
        // col 1: auto-sized (based on sidebar's w-64)
        // col 2: remaining flexible space
        // row 1: auto-sized (based on header's h-16)
        // row 2: remaining flexible space
        "grid-cols-[auto_1fr] grid-rows-[auto_1fr]"
      )}
    >
      {/* 
        Sidebar is placed in the first column and spans both rows.
        A right border is added for visual separation. 
        The SidebarNav within collapses on mobile, shrinking this column.
      */}
      <Sidebar className="row-span-2 border-r" />

      {/* 
        Header is placed in the first row of the second column.
        The TopHeader component inside defines its own height and bottom border.
      */}
      <Header />

      {/* 
        Main content area for pages. It occupies the remaining grid cell.
        It scrolls independently of the sidebar and header.
        Padding is applied here as per layout requirements for the main content container.
      */}
      <main className="overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
