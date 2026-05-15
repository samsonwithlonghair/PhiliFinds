// app/components/DashboardHeader.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardHeader() {
  const router = useRouter();

  const [user, setUser] = useState<any | null>(null);
  const [profile, setProfile] = useState<any | null>(null);

  // Separate dropdown states
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  // FETCH SESSION + PROFILE
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.push("/builder");
        return;
      }

      const authUser = data.session.user;
      setUser(authUser);

      // FETCH PROFILE
      const { data: profileData, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", authUser.id)
        .single();

      if (!error) {
        setProfile(profileData);
      }
    };

    getSession();
  }, [router]);

  // REALTIME PROFILE UPDATE (FIXED)
  useEffect(() => {
    if (!user?.id) return;


    const channelName = `profile-${user.id}`;

    // 🧠 ALWAYS clean up existing channel first
    const existing = supabase.getChannels().find(
      (ch) => ch.topic === `realtime:${channelName}`
    );

    if (existing) {
      supabase.removeChannel(existing);
    }

    const channel = supabase.channel(channelName);

    channel.on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "profiles",
        filter: `id=eq.${user.id}`,
      },
      (payload) => {
        setProfile(payload.new);
      }
    );

    channel.subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user?.id]);

  // CLOSE MENU WHEN CLICK OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setHomeDropdownOpen(false);
        setMenuDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // LOGOUT
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white shadow-sm flex items-center justify-between py-4 px-10 z-50">

      {/* LOGO */}
      <Link href="/dashboard" className="flex items-center">
        <Image
          src="/philifinds-logo.svg"
          alt="PhiliFinds Logo"
          width={135}
          height={45}
          className="object-contain mt-1"
          priority
        />
      </Link>

      <div className="flex-1" />

      <div className="flex items-center gap-2" ref={menuRef}>

        {/* HOME ICON DROPDOWN */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setHomeDropdownOpen((prev) => !prev);
              setMenuDropdownOpen(false);
            }}
            className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#EDF1D6] transition"
            aria-haspopup="true"
            aria-expanded={homeDropdownOpen}
          >
            <img
              src="/home-icon.svg"
              alt="Home"
              width={28}
              height={28}
            />
          </button>
          {homeDropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg z-50">
              <Link
                href="/dashboard"
                onClick={() => setHomeDropdownOpen(false)}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Dashboard Home
              </Link>
              <Link
                href="/about"
                onClick={() => setHomeDropdownOpen(false)}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setHomeDropdownOpen(false)}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>

        {/* PROFILE AVATAR */}
        <Link
          href="/profile"
          className="h-10 w-10 rounded-full overflow-hidden border-2 border-[#40513B] flex items-center justify-center bg-[#40513B]"
        >
          {profile?.avatar_url ? (
            <img
              src={profile.avatar_url}
              alt="Profile Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white text-lg font-medium">
              {profile?.username?.charAt(0).toUpperCase() ||
                user?.email?.charAt(0).toUpperCase()}
            </span>
          )}
        </Link>

        {/* MENU */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setMenuDropdownOpen((prev) => !prev);
              setHomeDropdownOpen(false);
            }}
            className="rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#EDF1D6] transition"
          >
            <Image
              src="/hamburger-icon.svg"
              alt="Menu icon"
              width={28}
              height={28}
            />
          </button>
          {menuDropdownOpen && (
            <div className="absolute right-0 mt-3 w-44 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg z-50">
              <Link
                href="/profile"
                onClick={() => setMenuDropdownOpen(false)}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link
                href="/dashboard/settings"
                onClick={() => setMenuDropdownOpen(false)}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}