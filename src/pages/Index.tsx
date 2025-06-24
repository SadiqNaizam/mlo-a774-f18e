import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import GraphCard from '../components/Dashboard/GraphCard';
import StatsOverview from '../components/Dashboard/StatsOverview';

/**
 * The main dashboard page for the Leads Dashboard Clone application.
 * 
 * This component serves as the central hub, assembling various data visualization
 * and navigation organisms into a cohesive user interface. It utilizes the `MainAppLayout`
 * to establish the primary structure (sidebar and header) and then populates the main
 * content area with specialized dashboard components.
 * 
 * The content is arranged in a responsive grid, ensuring an optimal user experience
 * on both large and small screens.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        The main content area is structured as a responsive grid.
        On large screens (lg and up), it's a 2-column grid. On smaller screens, it collapses to a single column.
        Components like PageHeader, GraphCard, and StatsOverview are designed to span both columns using `col-span-2` in their definitions.
        StatsCardGrid provides two individual cards that will slot into the two columns on large screens.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PageHeader />
        <StatsCardGrid />
        <GraphCard />
        <StatsOverview />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
