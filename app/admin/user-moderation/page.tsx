'use client';

import ModerationStatCard from '../components/ModerationStatCard';
import UserTable from '../components/UserTable';
import { User } from '../components/UserTable';

const sampleUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    joinDate: 'Jan 15, 2024',
    location: 'Manila, PH',
    itineraries: 3,
    status: 'active',
    initials: 'SJ',
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria.s@email.com',
    joinDate: 'Jan 10, 2024',
    location: 'Cebu, PH',
    itineraries: 5,
    status: 'active',
    initials: 'MS',
  },
  {
    id: '3',
    name: 'John Reyes',
    email: 'john.r@email.com',
    joinDate: 'Jan 8, 2024',
    location: 'Davao, PH',
    itineraries: 2,
    status: 'active',
    initials: 'JR',
  },
  {
    id: '4',
    name: 'Ana Cruz',
    email: 'ana.cruz@email.com',
    joinDate: 'Jan 5, 2024',
    location: 'Quezon City, PH',
    itineraries: 4,
    status: 'suspended',
    initials: 'AC',
  },
  {
    id: '5',
    name: 'Miguel Fernandez',
    email: 'miguel.f@email.com',
    joinDate: 'Dec 28, 2023',
    location: 'Makati, PH',
    itineraries: 1,
    status: 'active',
    initials: 'MF',
  },
  {
    id: '6',
    name: 'Linda Tan',
    email: 'linda.tan@email.com',
    joinDate: 'Dec 20, 2023',
    location: 'BGC, PH',
    itineraries: 6,
    status: 'banned',
    initials: 'LT',
  },
  {
    id: '7',
    name: 'Carlos Mendoza',
    email: 'carlos.m@email.com',
    joinDate: 'Dec 15, 2023',
    location: 'Iloilo, PH',
    itineraries: 3,
    status: 'active',
    initials: 'CM',
  },
  {
    id: '8',
    name: 'Rosa Villanueva',
    email: 'rosa.v@email.com',
    joinDate: 'Dec 10, 2023',
    location: 'Laguna, PH',
    itineraries: 2,
    status: 'suspended',
    initials: 'RV',
  },
  {
    id: '9',
    name: 'Diego Lopez',
    email: 'diego.l@email.com',
    joinDate: 'Dec 5, 2023',
    location: 'Pasay, PH',
    itineraries: 7,
    status: 'active',
    initials: 'DL',
  },
  {
    id: '10',
    name: 'Elena Rodriguez',
    email: 'elena.r@email.com',
    joinDate: 'Nov 28, 2023',
    location: 'Paranaque, PH',
    itineraries: 4,
    status: 'banned',
    initials: 'ER',
  },
  {
    id: '11',
    name: 'Francisco Torres',
    email: 'francisco.t@email.com',
    joinDate: 'Nov 20, 2023',
    location: 'Antipolo, PH',
    itineraries: 2,
    status: 'active',
    initials: 'FT',
  },
  {
    id: '12',
    name: 'Gloria Castillo',
    email: 'gloria.c@email.com',
    joinDate: 'Nov 15, 2023',
    location: 'Cavite, PH',
    itineraries: 5,
    status: 'active',
    initials: 'GC',
  },
  {
    id: '13',
    name: 'Antonio Rivera',
    email: 'antonio.r@email.com',
    joinDate: 'Nov 10, 2023',
    location: 'Bulacan, PH',
    itineraries: 1,
    status: 'suspended',
    initials: 'AR',
  },
  {
    id: '14',
    name: 'Beatriz Gonzalez',
    email: 'beatriz.g@email.com',
    joinDate: 'Nov 5, 2023',
    location: 'Rizal, PH',
    itineraries: 3,
    status: 'active',
    initials: 'BG',
  },
  {
    id: '15',
    name: 'Roberto Martinez',
    email: 'roberto.m@email.com',
    joinDate: 'Oct 30, 2023',
    location: 'Taguig, PH',
    itineraries: 8,
    status: 'banned',
    initials: 'RM',
  },
];

export default function UserModerationPage() {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#EDE9DA]">
      <div className="flex-1 overflow-y-auto">
        <div className="p-8 space-y-8">
          {/* Page Title */}
          <div>
            <h1 className="text-2xl font-bold text-[#1E3A23] mb-1">User Moderation</h1>
            <p className="text-[#6B8F74] text-sm">Manage and monitor platform users</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4">
            <ModerationStatCard
              icon="👥"
              value={15}
              label="Total Users"
              bgColor="#E8F2EB"
              iconColor="#4A7C59"
            />
            <ModerationStatCard
              icon="✓"
              value={9}
              label="Active"
              bgColor="#E8F2EB"
              iconColor="#4A7C59"
            />
            <ModerationStatCard
              icon="⏸"
              value={3}
              label="Suspended"
              bgColor="#F5EDDF"
              iconColor="#C8842A"
            />
            <ModerationStatCard
              icon="🚫"
              value={3}
              label="Banned"
              bgColor="#F5E4E2"
              iconColor="#C05A4E"
            />
          </div>

          {/* User Table */}
          <UserTable users={sampleUsers} />

          {/* Privacy Notice */}
          <div className="bg-[#F8F6F0] border border-[#E0DDD4] rounded-2xl p-5">
            <div className="flex gap-3">
              <div className="text-lg flex-shrink-0">ℹ️</div>
              <div>
                <p className="text-[#1E3A23] font-medium text-sm mb-1">User moderation policy</p>
                <p className="text-[#6B8F74] text-xs leading-relaxed">
                  Users can be suspended for violating community guidelines or banned for severe violations. All actions are logged and can be reviewed in the audit trail. Contact users via email before taking enforcement actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
