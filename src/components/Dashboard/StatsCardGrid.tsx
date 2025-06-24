import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { Button } from '@/components/ui/button';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-500' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: 'average time on this stage', color: 'bg-slate-800' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-500' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600' },
];

const totalFunnelCount = funnelData.reduce((sum, item) => sum + item.count, 0);

interface SourceData {
  name: string;
  value: number;
  dealValue: number;
  color: string;
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 50, dealValue: 3000, color: '#F45D48' }, // red-orange
  { name: 'Behance', value: 40, dealValue: 1000, color: '#F3D26D' }, // yellow
  { name: 'Instagram', value: 10, dealValue: 1000, color: '#3E8E9E' }, // teal
  { name: 'Dribbble', value: 10, dealValue: 1000, color: '#88D6A6' }, // light green
];

const StatsCardGrid: React.FC = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Funnel count</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2 mb-4">
            <p className="text-4xl font-bold">600</p>
            <p className="text-muted-foreground">active leads</p>
          </div>
          <div className="w-full h-2 flex rounded-full overflow-hidden mb-6">
            {funnelData.map((stage) => (
              <div
                key={stage.name}
                className={stage.color}
                style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }}
              ></div>
            ))}
          </div>
          <div className="space-y-3 text-sm">
            {funnelData.map((stage) => (
              <div key={stage.name} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-4">
                <div className={`w-2.5 h-2.5 rounded-full ${stage.color}`}></div>
                <p className="text-muted-foreground">{stage.name}</p>
                <p className="font-medium justify-self-end">{stage.count}</p>
                <p className="text-muted-foreground justify-self-end">$ {stage.value}</p>
                <p className="text-muted-foreground justify-self-end col-start-4">{stage.duration}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={sourcesData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={1}>
                    {sourcesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                    </Pie>
                    <RechartsTooltip />
                </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 text-sm">
            {sourcesData.map((source) => (
              <div key={source.name} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: source.color }}></div>
                <p className="text-muted-foreground">{source.name}</p>
                <p className="text-muted-foreground justify-self-end">$ {source.dealValue.toLocaleString()}</p>
                <p className="font-medium justify-self-end">{source.value}%</p>
              </div>
            ))}
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="link" className="text-xs text-muted-foreground p-0 h-auto mt-2 float-right">from leads total</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Percentage is calculated from the total number of leads.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>
      </Card>
    </>
  );
};

export default StatsCardGrid;