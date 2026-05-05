// app/dashboard/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import DashboardNavbar from "../components/DashboardHeader";
import { supabase } from "@/lib/supabaseClient";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();
  }, []);

  return (
    <>
      {/* Dashboard header (navbar) */}
      <DashboardNavbar />

      {/* Main dashboard content: bento grid */}
      <div className="min-h-[calc(100vh-4rem)] bg-gray-50 pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#40513B] mb-6">
            Your Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. User Profile */}
            {user && (
              <div className="md:col-span-1 rounded-2xl bg-white p-6 shadow-sm border border-gray-200 flex flex-col">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  User Profile
                </h2>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-[#40513B] text-white flex items-center justify-center font-semibold text-lg">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {user.email?.split("@")[0]}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {user.email}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-auto">
                  Manage your personal details and travel preferences here.
                </p>
              </div>
            )}

            {/* 2. Plan Trip (Manual) */}
            <div className="md:col-span-2 rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Plan Trip (Manual Trip Planning)
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Create your own custom trips by selecting destinations, dates, and preferences.
              </p>
              <button
                type="button"
                className="px-5 py-2.5 rounded-lg bg-[#40513B] text-white text-sm font-medium hover:bg-[#30422d] transition-all active:translate-y-0.5"
                onClick={() => {
                  router.push("/dashboard/planner");
                }}
              >
                Start Planning
              </button>
            </div>

            {/* 3. My Trips */}
            <div className="md:col-span-2 rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  My Trips (Saved Planned Trips)
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Your trips generated from manual planning and Nimnim Plan AI are saved here.
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition">
                  <p className="font-medium text-gray-800 text-sm">
                    Beach Getaway – Cebu
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Created: Aug 10 · Manual Planning
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition">
                  <p className="font-medium text-gray-800 text-sm">
                    Nimnim AI Weekend – Baguio
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Created: Aug 8 · Nimnim Plan AI
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Nimnim Plan AI (placeholder) */}
            <div className="md:col-span-1 rounded-2xl bg-gradient-to-br from-[#EDF1D6] to-[#D8E2C2] p-6 shadow-sm border border-gray-200 flex flex-col">
              <h2 className="text-xl font-semibold text-[#40513B] mb-3">
                Nimnim Plan AI
              </h2>
              <p className="text-sm text-gray-700 mb-4 flex-1">
                Powered by your teammate’s AI‑driven trip planner. This is currently a placeholder.
              </p>
              <button
                type="button"
                className="px-5 py-2.5 rounded-lg bg-[#40513B] text-white text-sm font-medium hover:bg-[#30422d] transition-all active:translate-y-0.5"
                onClick={() => {
                  router.push("/dashboard/nimnim-ai");
                }}
              >
                Try Nimnim Plan AI
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}