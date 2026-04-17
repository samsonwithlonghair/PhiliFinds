'use client';

import { useState } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  location: string;
  itineraries: number;
  status: 'active' | 'suspended' | 'banned';
  initials: string;
}

interface UserTableProps {
  users: User[];
  onFilterChange?: (filter: string) => void;
}

const statusColors = {
  active: { bg: '#E8F2EB', text: '#4A7C59', label: 'Active' },
  suspended: { bg: '#F5EDDF', text: '#C8842A', label: 'Suspended' },
  banned: { bg: '#F5E4E2', text: '#C05A4E', label: 'Banned' },
};

const statusIcons = {
  active: (
    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  suspended: (
    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
  banned: (
    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
};

export default function UserTable({ users, onFilterChange }: UserTableProps) {
  const [filter, setFilter] = useState<string>('all');

  const filteredUsers =
    filter === 'all' ? users : users.filter((user) => user.status === filter);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    onFilterChange?.(newFilter);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-black/6 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-[#F0EDE6]">
        {/* Search */}
        <div className="flex-1 bg-[#F5F2EA] border border-[#D8D3C6] rounded-[10px] px-3 py-2.5 flex items-center gap-2">
          <svg className="w-4 h-4 text-[#8FAF8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search by name or email..."
            className="bg-transparent text-[#3D4D3E] text-sm placeholder-[#3D4D3E]/50 outline-none flex-1"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          {['all', 'active', 'suspended', 'banned'].map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`px-3 py-1.5 rounded-[10px] text-xs font-medium transition-colors ${
                filter === f
                  ? 'bg-[#1E3A23] text-[#EDE9DA]'
                  : 'bg-[#F0EDE6] text-[#6B8F74] hover:bg-[#E8E4DA]'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Header Row */}
          <thead>
            <tr className="bg-[#F8F6F0] border-b border-[#F0EDE6]">
              <th className="text-left px-5 py-3 text-[#8FAF8A] text-xs font-semibold tracking-wider">USER</th>
              <th className="text-left px-5 py-3 text-[#8FAF8A] text-xs font-semibold tracking-wider">EMAIL</th>
              <th className="text-left px-5 py-3 text-[#8FAF8A] text-xs font-semibold tracking-wider">JOIN DATE</th>
              <th className="text-left px-5 py-3 text-[#8FAF8A] text-xs font-semibold tracking-wider">LOCATION</th>
              <th className="text-center px-5 py-3 text-[#8FAF8A] text-xs font-semibold tracking-wider">ITINERARIES</th>
              <th className="text-left px-5 py-3 text-[#8FAF8A] text-xs font-semibold tracking-wider">STATUS</th>
              <th className="text-center px-5 py-3 text-[#8FAF8A] text-xs font-semibold tracking-wider">ACTIONS</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t border-[#F0EDE6] hover:bg-[#FAFAF8] transition-colors">
                {/* User */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8.5 h-8.5 bg-[#E8F2EB] rounded-full flex items-center justify-center">
                      <span className="text-[#4A7C59] text-xs font-bold">{user.initials}</span>
                    </div>
                    <span className="text-[#1E3A23] text-sm font-medium">{user.name}</span>
                  </div>
                </td>

                {/* Email */}
                <td className="px-5 py-4 text-[#6B8F74] text-sm">{user.email}</td>

                {/* Join Date */}
                <td className="px-5 py-4 text-[#3D4D3E] text-sm">{user.joinDate}</td>

                {/* Location */}
                <td className="px-5 py-4 text-[#3D4D3E] text-sm">{user.location}</td>

                {/* Itineraries */}
                <td className="px-5 py-4 text-[#3D4D3E] text-sm text-center font-medium">{user.itineraries}</td>

                {/* Status */}
                <td className="px-5 py-4">
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: statusColors[user.status].bg,
                      color: statusColors[user.status].text,
                    }}
                  >
                    <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: statusColors[user.status].text }} />
                    {statusColors[user.status].label}
                  </div>
                </td>

                {/* Actions */}
                <td className="px-5 py-4 text-center">
                  <button className="w-7 h-7 rounded-[10px] hover:bg-[#E8E4DA] flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-[#6B8F74]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-[#FDFCF8] border-t border-[#F0EDE6] text-[#9FA89F] text-xs">
        <span>Showing 1–{filteredUsers.length} of {users.length} users</span>
        <div className="flex items-center gap-1">
          <button className="w-7 h-7 rounded-[10px] flex items-center justify-center opacity-40 hover:opacity-60">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="w-7 h-7 bg-[#1E3A23] rounded-[10px] flex items-center justify-center text-[#EDE9DA] text-xs font-semibold">
            1
          </div>
          <button className="w-7 h-7 flex items-center justify-center text-[#6B8F74] hover:bg-[#E8E4DA] rounded-[10px] text-xs">
            2
          </button>
          <button className="w-7 h-7 rounded-[10px] flex items-center justify-center hover:opacity-60">
            <svg className="w-3 h-3 text-[#4A7C59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
