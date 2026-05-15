'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  
  const menuItems = [
    { name: 'Overview', path: '/admin', icon: '📊' },
    { name: 'Travel Trends', path: '/admin/travel-trends', icon: '📈' },
    { name: 'User Moderation', path: '/admin/user-moderation', icon: '👥' },
    { name: 'Emergency Contacts', path: '/admin/emergency-contacts', icon: '📞' },
  ];

  const isActive = (path: string) => {
    if (path === '/admin') return pathname === '/admin';
    return pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-[#EDE9DA]">
      {/* Sidebar */}
      <div className="w-64 bg-[#1E3A23] flex flex-col">
        {/* Logo Section */}
        <div className="h-24 border-b border-white/10 flex items-center px-4 gap-3">
          <div className="w-9 h-9 bg-[#4A7C59] rounded-[10px] flex items-center justify-center">
            <div className="w-4 h-5 border-2 border-[#EDE9DA] relative flex items-center justify-center">
              <div className="w-1 h-3 border-r-2 border-[#EDE9DA]"></div>
              <div className="w-1 h-1 border-2 border-[#EDE9DA] absolute bottom-0"></div>
            </div>
          </div>
          <div>
            <h1 className="text-[#EDE9DA] font-georgia text-lg font-bold leading-tight">
              PhiliFinds
            </h1>
            <p className="text-[#8FAF8A] text-xs leading-tight">Admin Dashboard</p>
          </div>
        </div>

        {/* Main Menu */}
        <div className="px-4 py-5 text-[#8FAF8A] text-xs font-semibold tracking-widest">
          MAIN MENU
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-2 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`w-full h-10 px-3 rounded-[10px] flex items-center gap-3 transition-colors ${
                isActive(item.path)
                  ? 'bg-[#4A7C59] text-white'
                  : 'text-[#B8D4BD] hover:bg-[#2D5A34]'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
              {isActive(item.path) && (
                <div className="ml-auto w-1.5 h-1.5 bg-[#A8D5B0] rounded-full"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="mx-4 h-px bg-white/10"></div>

        {/* Super Admin Access */}
        <div className="m-4 p-3 bg-[#4A7C59]/20 rounded-[10px] flex items-center gap-2">
          <div className="w-3.5 h-3.5 border-2 border-[#8FAF8A]"></div>
          <span className="text-[#8FAF8A] text-xs font-medium">Super Admin Access</span>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 p-4 space-y-3">
          <button className="w-full flex items-center gap-3 text-[#B8D4BD] hover:text-white transition-colors p-2">
            <span>🔔</span>
            <span className="text-sm font-medium">Notifications</span>
          </button>
          <button className="w-full flex items-center gap-3 text-[#B8D4BD] hover:text-white transition-colors p-2">
            <span>⚙️</span>
            <span className="text-sm font-medium">Settings</span>
          </button>
          <div className="border-t border-white/10 pt-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#4A7C59] rounded-full flex items-center justify-center">
              <span className="text-[#EDE9DA] font-bold text-sm">A</span>
            </div>
            <div className="flex-1">
              <p className="text-[#EDE9DA] text-xs font-medium">Admin User</p>
              <p className="text-[#8FAF8A] text-xs">admin@philifinds.ph</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
