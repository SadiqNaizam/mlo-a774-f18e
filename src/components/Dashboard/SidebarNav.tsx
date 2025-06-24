import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  LayoutGrid,
  Users,
  User,
  FileText,
  Receipt,
  ShoppingCart,
  Mail,
  Archive,
  Calendar,
  HelpCircle,
  Settings,
  Menu
} from 'lucide-react';

interface NavItem {
  name: string;
  icon: React.ElementType;
  href: string;
  active: boolean;
}

const mainNavItems: NavItem[] = [
  { name: 'Dashboard', icon: LayoutGrid, href: '#', active: true },
  { name: 'Leads', icon: Users, href: '#', active: false },
  { name: 'Customers', icon: User, href: '#', active: false },
  { name: 'Proposals', icon: FileText, href: '#', active: false },
  { name: 'Invoices', icon: Receipt, href: '#', active: false },
  { name: 'Items', icon: ShoppingCart, href: '#', active: false },
  { name: 'Mail', icon: Mail, href: '#', active: false },
  { name: 'Shoebox', icon: Archive, href: '#', active: false },
  { name: 'Calendar', icon: Calendar, href: '#', active: false },
];

const supportNavItems: NavItem[] = [
  { name: 'Help', icon: HelpCircle, href: '#', active: false },
  { name: 'Settings', icon: Settings, href: '#', active: false },
];

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-64 flex-col bg-sidebar text-sidebar-foreground p-4 hidden md:flex">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
           <div className="bg-foreground text-background p-2 rounded-lg flex items-center justify-center">
              <span className="font-bold text-sm">bo</span>
           </div>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <nav className="flex flex-col gap-1">
          {mainNavItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={cn(
                'w-full justify-start gap-2',
                item.active
                  ? 'bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary'
                  : 'hover:bg-accent'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Button>
          ))}
        </nav>
        <div>
          <Separator className="my-4" />
          <nav className="flex flex-col gap-1">
            {supportNavItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={cn(
                  'w-full justify-start gap-2',
                  item.active
                    ? 'bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary'
                    : 'hover:bg-accent'
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default SidebarNav;
