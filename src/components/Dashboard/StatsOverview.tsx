import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const StatsOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <p className="text-4xl font-bold">40%</p>
              <p className="text-sm text-muted-foreground">The proposal is unclear</p>
            </div>
            <div>
              <p className="text-4xl font-bold">20%</p>
              <p className="text-sm text-muted-foreground">However venture pursuit</p>
            </div>
            <div>
              <p className="text-4xl font-bold">10%</p>
              <p className="text-sm text-muted-foreground">Other</p>
            </div>
            <div>
              <p className="text-4xl font-bold">30%</p>
              <p className="text-sm text-muted-foreground">The proposal is unclear</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col justify-center">
              <p className="text-4xl font-bold">900</p>
              <p className="text-sm text-muted-foreground">total leads count</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-4xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">days in average to convert lead</p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <p className="text-4xl font-bold">30</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Leads that have not been contacted in over 30 days.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="text-sm text-muted-foreground">inactive leads</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsOverview;
