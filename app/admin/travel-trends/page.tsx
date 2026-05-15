'use client';

import AnalyticsCard from '../components/AnalyticsCard';
import SimpleBarChart from '../components/SimpleBarChart';
import DestinationsList from '../components/DestinationsList';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import HorizontalBarChart from '../components/HorizontalBarChart';

export default function TravelTrendsPage() {
  const destinationChartData = [
    { label: 'Palawan', value: 4800, maxValue: 6000, color: '#2D5A34' },
    { label: 'Boracay', value: 4100, maxValue: 6000, color: '#4A7C59' },
    { label: 'Siargao', value: 3300, maxValue: 6000, color: '#6DAB7A' },
    { label: 'Cebu', value: 3000, maxValue: 6000, color: '#8FAF8A' },
    { label: 'Batanes', value: 1800, maxValue: 6000, color: '#B8D4BD' },
  ];

  const destinations = [
    { rank: 1, name: 'Palawan', count: '4.8k', change: '+12%', percentage: 100 },
    { rank: 2, name: 'Boracay', count: '4.1k', change: '+8%', percentage: 85 },
    { rank: 3, name: 'Siargao', count: '3.3k', change: '+21%', percentage: 69 },
    { rank: 4, name: 'Cebu', count: '3.0k', change: '+5%', percentage: 63 },
    { rank: 5, name: 'Batanes', count: '1.8k', change: '+34%', percentage: 37 },
  ];

  const groupSizes = [
    { label: 'Solo (1)', size: '1', percentage: 18, color: '#4A7C59' },
    { label: 'Couple (2)', size: '2', percentage: 31, color: '#7BAD8A' },
    { label: 'Small (3–5)', size: '3–5', percentage: 29, color: '#A8D5B0' },
    { label: 'Medium (6–10)', size: '6–10', percentage: 14, color: '#C8842A' },
    { label: 'Large (11+)', size: '11+', percentage: 8, color: '#E8C99A' },
  ];

  const travelTypes = [
    { label: 'Beach', count: 10000, color: '#2D5A34' },
    { label: 'Adventure', count: 6700, color: '#4A7C59' },
    { label: 'Cultural', count: 5100, color: '#6DAB7A' },
    { label: 'Nature', count: 4345, color: '#8FAF8A' },
    { label: 'Food Tour', count: 3050, color: '#B8D4BD' },
    { label: 'Heritage', count: 2060, color: '#2D5A34' },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-[#EDE9DA]">
        <div className="p-6 space-y-6">
          {/* Analytics Cards Grid */}
          <div className="grid grid-cols-4 gap-6">
            <AnalyticsCard
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              value="₱16,200"
              label="Avg. User Budget"
              subtitle="Per trip, April 2026"
              change="+3.8%"
              changeColor="green"
            />
            <AnalyticsCard
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              value="38,214"
              label="Total Itineraries"
              subtitle="Generated this month"
              change="+11.8%"
              changeColor="green"
            />
            <AnalyticsCard
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              }
              value="3.4"
              label="Avg. Group Size"
              subtitle="People per trip"
              change="+0.2"
              changeColor="green"
            />
            <AnalyticsCard
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              }
              value="Palawan"
              label="Top Destination"
              subtitle="4,820 requests this month"
              change="+12%"
              changeColor="orange"
            />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Most Requested Destinations */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#1E3A23] font-semibold text-base">Most Requested Destinations</h3>
                <div className="px-2.5 py-1 bg-[#E8F2EB] rounded-full">
                  <span className="text-[#4A7C59] text-xs font-semibold">Top 5</span>
                </div>
              </div>
              <p className="text-[#9FA89F] text-xs mb-6">Based on itinerary requests, April 2026</p>

              {/* Bar Chart */}
              <div className="mb-8">
                <SimpleBarChart data={destinationChartData} height={220} />
              </div>

              {/* Detailed List */}
              <DestinationsList destinations={destinations} />
            </div>

            {/* Typical Group Sizes */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/6">
              <h3 className="text-[#1E3A23] font-semibold text-base mb-6">Typical Group Sizes</h3>
              <p className="text-[#9FA89F] text-xs mb-8">Distribution of travelers per itinerary</p>

              <PieChart slices={groupSizes} />
            </div>
          </div>

          {/* Trend Charts */}
          <div className="grid grid-cols-2 gap-6">
            {/* Average Budget Trend */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#1E3A23] font-semibold text-base">Average Budget Trend</h3>
                <div className="px-3 py-1 bg-[#E8F2EB] rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3 text-[#4A7C59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-7" />
                  </svg>
                  <span className="text-[#4A7C59] text-xs font-semibold">+3.8% this month</span>
                </div>
              </div>
              <p className="text-[#9FA89F] text-xs mb-6">7-month rolling average (PHP)</p>

              <div className="h-80">
                <LineChart />
              </div>
            </div>

            {/* Popular Travel Types */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/6">
              <h3 className="text-[#1E3A23] font-semibold text-base mb-6">Popular Travel Types</h3>
              <p className="text-[#9FA89F] text-xs mb-8">Itinerary categories this month</p>

              <div className="h-80">
                <HorizontalBarChart data={travelTypes} maxValue={10000} />
              </div>
            </div>
          </div>

          {/* Data Disclaimer */}
          <div className="bg-[#F5F2EA] border border-[#E0DDD4] rounded-[14px] px-4 py-3 flex items-start gap-3">
            <span className="text-xl mt-0.5">📊</span>
            <p className="text-[#8FAF8A] text-xs leading-relaxed">
              All analytics are based on aggregated, anonymized data. No personally identifiable information is processed in this dashboard. Data refreshes every 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
