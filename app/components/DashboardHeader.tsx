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
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setUser(data.session.user);
      } else {
        router.push("/builder");
      }
    };
    getSession();
  }, [router]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white shadow-sm flex items-center justify-between py-4 px-10 z-50">
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

      <div className="flex items-center gap-3" ref={menuRef}>
        <Link
          href="/dashboard/profile"
          className="h-9 w-9 rounded-full bg-[#40513B] text-white flex items-center justify-center text-xl font-normal"
        >
          {user?.email?.charAt(0).toUpperCase()}
        </Link>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-full w-12 h-12 flex items-center justify-center bg-transparent hover:bg-[#EDF1D6] transition duration-200"
          >
            <Image
              src="/icon-hamburger.svg"
              alt="Menu icon"
              width={20}
              height={20}
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-3 w-44 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg z-50">
              <Link
                href="/dashboard/settings"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </Link>
              
              <button
                type="button"
                onClick={handleLogout}
                className="block w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100 active:bg-gray-200 active:translate-y-[1px] transition"
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
