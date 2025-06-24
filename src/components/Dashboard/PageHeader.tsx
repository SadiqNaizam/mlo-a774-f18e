import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, ChevronDown } from 'lucide-react';

const PageHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-6 col-span-2">
      <Tabs defaultValue="leads" className="w-auto">
        <TabsList>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
        </TabsList>
      </Tabs>
      <Button variant="outline" className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <span>last 6 months</span>
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default PageHeader;
