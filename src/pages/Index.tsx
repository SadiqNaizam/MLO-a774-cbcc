import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import LeadsTrackingChart from '../components/Dashboard/LeadsTrackingChart';
import ReasonsLostGrid from '../components/Dashboard/ReasonsLostGrid';

/**
 * DashboardPage component
 * 
 * This page serves as the main dashboard overview, composing various 
 * dashboard-specific components within the MainAppLayout.
 * It displays a page header, statistics cards, a leads tracking chart, 
 * and a grid for reasons leads were lost.
 */
const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout headerTitle="Dashboard">
      {/* Page specific header with tabs and filters */}
      <PageHeader />

      {/* Grid display for key statistics cards */}
      <StatsCardGrid />

      {/* Chart for visualizing leads tracking over time */}
      <LeadsTrackingChart />

      {/* Grid for displaying reasons for lost leads and other data */}
      <ReasonsLostGrid />
    </MainAppLayout>
  );
};

export default DashboardPage;
