import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  /**
   * This Sidebar component is a structural wrapper around the SidebarNav organism.
   * Its purpose is to integrate the navigation content (from SidebarNav) into the 
   * application's main grid layout. It accepts a className to handle positioning
   * properties like `row-span-2` passed from MainAppLayout.
   * The SidebarNav component is hidden on small screens (`md:flex`), which allows
   * this container to collapse gracefully for a mobile-friendly layout.
   */
  return (
    <div className={cn(className)}>
      <SidebarNav />
    </div>
  );
};

export default Sidebar;
