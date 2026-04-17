'use client';

import { useState, useEffect } from 'react';

export default function AdminHeader() {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const formatDate = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      };
      return now.toLocaleDateString('en-US', options);
    };
    setCurrentDate(formatDate());
  }, []);

  return (
    <div className="bg-white border-b border-black/8 px-6 py-5 flex items-center justify-between">
      {/* Left side - Title */}
      <div>
        <h1 className="text-[#1E3A23] text-xl font-semibold">Dashboard Overview</h1>
        <p className="text-[#6B8F74] text-sm">Welcome back, Admin</p>
      </div>

      {/* Right side - Search and Date */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="bg-[#F5F2EA] border border-[#D8D3C6] rounded-[10px] px-3 py-2.5 flex items-center gap-2 w-52">
          <svg
            className="w-4 h-4 text-[#8FAF8A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-[#3D4D3E] text-sm placeholder-[#3D4D3E]/50 outline-none flex-1"
          />
        </div>

        {/* Date and Time */}
        <div className="text-right">
          <p className="text-[#3D4D3E] text-xs font-medium">{currentDate}</p>
          <p className="text-[#8FAF8A] text-xs">Philippines Standard Time</p>
        </div>

        {/* Notification Bell */}
        <div className="relative w-9 h-9 bg-[#F5F2EA] rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
          <svg
            className="w-5 h-5 text-[#4A7C59]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <div className="absolute top-1 right-1 w-2 h-2 bg-[#E05A4E] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
