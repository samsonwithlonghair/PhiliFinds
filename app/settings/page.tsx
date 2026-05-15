'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function UserSettings() {
  const [activeTab, setActiveTab] = useState('profile');

  const handleSaveChanges = () => {
    // Handle save logic here
    console.log('Changes saved');
  };

  const handleCancel = () => {
    // Handle cancel logic here
    console.log('Cancelled');
  };

  return (
    <div className="w-full min-h-screen pt-20" style={{ backgroundColor: '#E8E8D0' }}>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-20 bg-[#2C4A3E] shadow-lg flex items-center justify-between px-6 z-50">
        <Link href="/" className="flex items-center">
          <Image
            src="/philifinds-logo.svg"
            alt="PhiliFinds Logo"
            width={135}
            height={45}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-white/90 text-base font-normal">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About Us</Link>
          <Link href="/features" className="hover:text-white transition">Features</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>

        <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full">
          <div className="w-8 h-8 bg-[#7C9273] rounded-full flex items-center justify-center text-white text-sm font-medium">
            JD
          </div>
          <span className="text-white text-base font-medium">John Doe</span>
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-8 pb-12">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#2C4A3E] mb-2">Account Settings</h1>
          <p className="text-base text-[#7C9273] font-normal">Manage your account preferences and settings</p>
        </div>

        {/* Settings Layout */}
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 bg-white rounded-xl shadow-sm p-2">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                activeTab === 'profile'
                  ? 'bg-[#7C9273] text-white'
                  : 'text-[#2C4A3E] hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Profile Information</span>
            </button>

            <button
              onClick={() => setActiveTab('notifications')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                activeTab === 'notifications'
                  ? 'bg-[#7C9273] text-white'
                  : 'text-[#2C4A3E] hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="font-medium">Notifications</span>
            </button>

            <button
              onClick={() => setActiveTab('security')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === 'security'
                  ? 'bg-[#7C9273] text-white'
                  : 'text-[#2C4A3E] hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-medium">Security & Privacy</span>
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-xl shadow-sm p-8">
            {/* Profile Information Tab */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-semibold text-[#2C4A3E] mb-8">Profile Information</h2>

                {/* Profile Picture Section */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-[#2C4A3E] mb-3">Profile Picture</label>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 bg-[#7C9273] rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl font-medium">JD</span>
                    </div>
                    <button className="px-4 py-2.5 bg-[#6DA370] text-white rounded-lg font-medium hover:bg-[#5d9360] transition flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Change Photo
                    </button>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                  {/* First Name and Last Name Row */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#2C4A3E] mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-[#6DA370]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2C4A3E] mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-[#6DA370]"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C4A3E] mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-[#6DA370]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C4A3E] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-[#6DA370]"
                    />
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C4A3E] mb-2">Bio</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-[#6DA370]"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleCancel}
                    className="px-6 py-2.5 border border-gray-300 rounded-lg text-[#2C4A3E] font-medium hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveChanges}
                    className="px-6 py-2.5 bg-[#6DA370] text-white rounded-lg font-medium hover:bg-[#5d9360] transition"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-2xl font-semibold text-[#2C4A3E] mb-6">Notification Settings</h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
                    <span className="text-[#2C4A3E] font-medium">Email notifications for new itineraries</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
                    <span className="text-[#2C4A3E] font-medium">Email notifications for activity updates</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded" />
                    <span className="text-[#2C4A3E] font-medium">Weekly digest</span>
                  </label>
                </div>
              </div>
            )}

            {/* Security & Privacy Tab */}
            {activeTab === 'security' && (
              <div>
                <h2 className="text-2xl font-semibold text-[#2C4A3E] mb-6">Security & Privacy</h2>
                <div className="space-y-6">
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-medium text-[#2C4A3E] mb-2">Change Password</h3>
                    <p className="text-sm text-gray-600 mb-4">Update your password to keep your account secure</p>
                    <button className="px-4 py-2 bg-[#6DA370] text-white rounded-lg font-medium hover:bg-[#5d9360] transition">
                      Change Password
                    </button>
                  </div>

                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-medium text-[#2C4A3E] mb-2">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account</p>
                    <button className="px-4 py-2 bg-[#6DA370] text-white rounded-lg font-medium hover:bg-[#5d9360] transition">
                      Enable 2FA
                    </button>
                  </div>

                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-medium text-[#2C4A3E] mb-2">Account Privacy</h3>
                    <label className="flex items-center gap-3 mt-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <span className="text-sm text-[#2C4A3E]">Make my profile public</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
