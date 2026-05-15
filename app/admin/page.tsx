'use client';

import StatCard from './components/StatCard';
import QuickStatItem from './components/QuickStatItem';
import RecentActivity from './components/RecentActivity';

export default function AdminDashboard() {
  // Sample data
  const recentActivities = [
    {
      id: '1',
      message: 'New user registered: juan.delacruz@gmail.com',
      timestamp: '2 mins ago',
      type: 'success' as const,
    },
    {
      id: '2',
      message: 'Account suspended: spam_user_1283',
      timestamp: '18 mins ago',
      type: 'warning' as const,
    },
    {
      id: '3',
      message: 'Emergency contact updated: Red Cross Hotline',
      timestamp: '1 hour ago',
      type: 'info' as const,
    },
    {
      id: '4',
      message: 'Password reset forced: maria.santos@yahoo.com',
      timestamp: '2 hours ago',
      type: 'error' as const,
    },
    {
      id: '5',
      message: 'New contact added: DOT Emergency Line',
      timestamp: '3 hours ago',
      type: 'success' as const,
    },
    {
      id: '6',
      message: 'Account banned: malicious_bot_91',
      timestamp: '5 hours ago',
      type: 'error' as const,
    },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-[#EDE9DA]">
        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6">
            <StatCard
              icon={
                <svg className="w-5 h-5 text-[#4A7C59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              value="12,847"
              label="Total Users"
              change="+4.2%"
              changeColor="green"
            />
            <StatCard
              icon={
                <svg className="w-5 h-5 text-[#5A7FA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              value="38,214"
              label="Active Itineraries"
              change="+11.8%"
              changeColor="green"
            />
            <StatCard
              icon={
                <svg className="w-5 h-5 text-[#A87C4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              value="5 Regions"
              label="Trend Insights"
              change="Updated today"
              changeColor="green"
            />
            <StatCard
              icon={
                <svg className="w-5 h-5 text-[#C05A4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              value="24 Listed"
              label="Emergency Contacts"
              change="3 pending review"
              changeColor="orange"
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/6">
              <h3 className="text-[#1E3A23] font-semibold text-base mb-4">Quick Stats</h3>
              <div className="space-y-3 mb-6">
                <QuickStatItem
                  icon={
                    <svg className="w-full h-full text-[#C8842A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                  label="Suspended Accounts"
                  value="14"
                />
                <QuickStatItem
                  icon={
                    <svg className="w-full h-full text-[#4A7C59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  }
                  label="Active Sessions"
                  value="2,341"
                />
                <QuickStatItem
                  icon={
                    <svg className="w-full h-full text-[#4A7C59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                  label="Verified Contacts"
                  value="21"
                />
              </div>

              {/* Quick Navigation */}
              <div>
                <p className="text-[#8FAF8A] text-xs font-semibold tracking-widest mb-3">
                  QUICK NAVIGATION
                </p>
                <div className="space-y-2">
                  <button className="w-full text-left text-[#4A7C59] text-sm font-medium hover:opacity-75 py-2">
                    View Travel Trends →
                  </button>
                  <button className="w-full text-left text-[#4A7C59] text-sm font-medium hover:opacity-75 py-2">
                    Moderate Users →
                  </button>
                  <button className="w-full text-left text-[#4A7C59] text-sm font-medium hover:opacity-75 py-2">
                    Emergency Contacts →
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity - spans 2 columns */}
            <div className="col-span-2">
              <RecentActivity activities={recentActivities} />
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="bg-[#E8F2EB] border border-[#C2D9C8] rounded-[14px] px-4 py-3 flex items-center gap-3">
            <svg className="w-4 h-4 text-[#4A7C59] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-[#4A7C59] text-xs">
              All data is anonymized and aggregated in compliance with the Philippine Data Privacy Act (RA 10173).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
