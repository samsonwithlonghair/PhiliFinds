'use client';

import { useState } from 'react';
import ContactStatCard from '../components/ContactStatCard';
import ContactCard from '../components/ContactCard';

interface Contact {
  id: string;
  name: string;
  organization: string;
  phoneNumber: string;
  category: string;
  categoryColor: string;
  lastVerified: string;
  status: 'verified' | 'pending';
}

const contacts: Contact[] = [
  {
    id: '1',
    name: 'National Emergency Hotline',
    organization: 'Philippine National Police',
    phoneNumber: '911',
    category: 'Police / Emergency',
    categoryColor: '#2D5A34',
    lastVerified: 'Mar 28, 2026',
    status: 'verified',
  },
  {
    id: '2',
    name: 'Philippine Red Cross',
    organization: 'Red Cross Philippines',
    phoneNumber: '143',
    category: 'Medical / Rescue',
    categoryColor: '#C05A4E',
    lastVerified: 'Mar 15, 2026',
    status: 'verified',
  },
  {
    id: '3',
    name: 'DOT Emergency Hotline',
    organization: 'Department of Tourism',
    phoneNumber: '(02) 8525-2318',
    category: 'Tourism Assistance',
    categoryColor: '#3A6B9A',
    lastVerified: 'Apr 1, 2026',
    status: 'verified',
  },
  {
    id: '4',
    name: 'BFP Fire Emergency',
    organization: 'Bureau of Fire Protection',
    phoneNumber: '(02) 8426-0219',
    category: 'Fire / Rescue',
    categoryColor: '#C8842A',
    lastVerified: 'Mar 20, 2026',
    status: 'verified',
  },
  {
    id: '5',
    name: 'Philippine Coast Guard',
    organization: 'PCG Command Center',
    phoneNumber: '(02) 8527-3877',
    category: 'Maritime / Search & Rescue',
    categoryColor: '#4A7F9E',
    lastVerified: 'Feb 28, 2026',
    status: 'verified',
  },
  {
    id: '6',
    name: 'NDRRMC Operations Center',
    organization: 'National Disaster Risk Reduction and Management Council',
    phoneNumber: '(02) 8911-1406',
    category: 'Disaster Response',
    categoryColor: '#B56D28',
    lastVerified: 'Jan 10, 2026',
    status: 'pending',
  },
  {
    id: '7',
    name: 'Lifeline Crisis Intervention',
    organization: 'Natasha Goulbourn Foundation',
    phoneNumber: '1800-1888-8817',
    category: 'Mental Health / Crisis',
    categoryColor: '#8F6BAA',
    lastVerified: 'Dec 5, 2025',
    status: 'pending',
  },
];

export default function EmergencyContactsPage() {
  const [filter, setFilter] = useState<'all' | 'verified' | 'pending'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [contactList, setContactList] = useState<Contact[]>(contacts);

  const handleVerify = (id: string) => {
    if (confirm('Verify this contact as accurate?')) {
      const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      setContactList((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: 'verified' as const, lastVerified: today } : c))
      );
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this emergency contact? This cannot be undone.')) {
      setContactList((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const filteredContacts = contactList.filter((c) => {
    const matchesStatus = filter === 'all' || c.status === filter;
    const matchesSearch = searchQuery === '' ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phoneNumber.includes(searchQuery);
    return matchesStatus && matchesSearch;
  });

  const verifiedCount = contactList.filter((c) => c.status === 'verified').length;
  const pendingCount = contactList.filter((c) => c.status === 'pending').length;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#EDE9DA]">
      <div className="flex-1 overflow-y-auto">
        <div className="p-8 space-y-8">
          {/* Page Title */}
          <div>
            <h1 className="text-2xl font-bold text-[#1E3A23] mb-1">
              Emergency Contacts
            </h1>
            <p className="text-[#6B8F74] text-sm">
              Manage safety hotlines and emergency resources
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 max-w-xs">
            <ContactStatCard value={verifiedCount} label="Verified" />
            <ContactStatCard value={pendingCount} label="Pending" />
          </div>

          {/* Top Bar with Search and Filters */}
          <div className="flex items-center gap-3 bg-white rounded-2xl shadow-sm border border-black/6 px-4 py-3">
            {/* Search */}
            <div className="flex-1 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#8FAF8A] flex-shrink-0"
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
                placeholder="Search contacts by name, org, or number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-[#3D4D3E] text-sm placeholder-[#3D4D3E]/50 outline-none flex-1"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 border-l border-[#F0EDE6] pl-3">
              {(
                ['all', 'verified', 'pending'] as const
              ).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded-[8px] text-[12px] font-semibold leading-[18px] transition-colors ${
                    filter === f
                      ? 'bg-[#1E3A23] text-[#EDE9DA]'
                      : 'text-[#6B8F74] hover:bg-[#F0EDE6]'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Contacts List */}
          <div className="space-y-4">
            {filteredContacts.map((contact) => (
              <ContactCard
                key={contact.id}
                name={contact.name}
                organization={contact.organization}
                phoneNumber={contact.phoneNumber}
                category={contact.category}
                categoryColor={contact.categoryColor}
                lastVerified={contact.lastVerified}
                status={contact.status}
                onVerify={() => handleVerify(contact.id)}
                onDelete={() => handleDelete(contact.id)}
              />
            ))}
          </div>

          {/* Privacy Notice */}
          <div className="bg-[#F8F6F0] border border-[#E0DDD4] rounded-2xl p-5">
            <div className="flex gap-3">
              <div className="text-lg flex-shrink-0">ℹ️</div>
              <div>
                <p className="text-[#1E3A23] font-semibold text-[12px] mb-1 leading-[18px]">
                  Verification Notice
                </p>
                <p className="text-[#8FAF8A] text-[12px] leading-[18px] font-normal">
                  Please ensure all emergency contacts are regularly verified for accuracy.
                  Outdated or incorrect hotlines may endanger travelers. Contacts with
                  &quot;Pending&quot; status should be reviewed and verified promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
