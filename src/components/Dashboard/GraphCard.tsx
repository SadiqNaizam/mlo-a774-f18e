import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { cn } from '@/lib/utils';

interface ChartData {
  name: string;
  closedWon: number;
  closedLost: number;
}

const graphData: ChartData[] = [
  { name: 'March', closedWon: 88, closedLost: 65 },
  { name: 'April', closedWon: 62, closedLost: 45 },
  { name: 'May', closedWon: 95, closedLost: 68 },
  { name: 'June', closedWon: 82, closedLost: 8 },
  { name: 'July', closedWon: 90, closedLost: 42 },
  { name: 'August', closedWon: 30, closedLost: 98 },
];

const GraphCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'came' | 'converted' | 'size'>('converted');

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-2 border rounded-md shadow-lg">
          <p className="label font-bold">{`${label}`}</p>
          <p className="intro text-[#3E8E9E]">{`Closed Won : ${payload[0].value}`}</p>
          <p className="intro text-red-500">{`Closed Lost : ${payload[1].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Leads tracking</p>
            <div className="flex items-baseline gap-4 mt-1">
                <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold">680</p>
                    <p className="text-muted-foreground text-sm">total closed</p>
                </div>
                <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold">70</p>
                    <p className="text-muted-foreground text-sm">total lost</p>
                </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-secondary rounded-md p-1 flex items-center gap-1">
                <Button size="sm" variant={activeTab === 'came' ? 'ghost' : 'ghost'} onClick={() => setActiveTab('came')} className={cn(activeTab === 'came' ? 'bg-background shadow-sm' : '')}>Leads came</Button>
                <Button size="sm" variant={activeTab === 'converted' ? 'ghost' : 'ghost'} onClick={() => setActiveTab('converted')} className={cn(activeTab === 'converted' ? 'bg-background shadow-sm' : '')}>Leads Converted</Button>
                <Button size="sm" variant={activeTab === 'size' ? 'ghost' : 'ghost'} onClick={() => setActiveTab('size')} className={cn(activeTab === 'size' ? 'bg-background shadow-sm' : '')}>Total deals size</Button>
            </div>
             <Button variant="outline" className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>last 6 months</span>
                <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={graphData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3E8E9E" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#3E8E9E" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{fill: '#64748B'}} />
              <YAxis tickLine={false} axisLine={false} tick={{fill: '#64748B'}} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }} />
              <Area type="monotone" dataKey="closedWon" stroke="#3E8E9E" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" dot={{ r: 4, fill: '#3E8E9E' }} activeDot={{ r: 6 }}/>
              <Area type="monotone" dataKey="closedLost" stroke="#EF4444" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" dot={{ r: 4, fill: '#EF4444' }} activeDot={{ r: 6 }}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#3E8E9E]"></div>
                <span>Closed won</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GraphCard;