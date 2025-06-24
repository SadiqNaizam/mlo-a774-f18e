import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  /**
   * This Header component is a structural wrapper for the TopHeader organism.
   * Its purpose is to place the TopHeader within the application's main grid layout.
   * It accepts a `className` prop to apply grid-related styles from the parent layout.
   * The actual header content and styling are encapsulated within the TopHeader component,
   * which is rendered as a child.
   */
  return (
    // A div is used here instead of a <header> to avoid nesting <header> tags,
    // as TopHeader is already a semantic <header> element.
    <div className={cn(className)}>
      <TopHeader />
    </div>
  );
};

export default Header;
