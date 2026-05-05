// app/components/Header.tsx

"use client";
import React, { use, useState } from "react";
import Login from "@/app/components/login/page";
import Signup from "@/app/components/signup/page";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/dist/client/components/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

 // Hide this header only on dashboard routes
  const showHeader = !pathname.startsWith("/dashboard");

  if (!showHeader) return null;

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white shadow-md flex items-center justify-between py-4 px-10 z-50">
      
      {/* Logo */}
      <Link href="/" className="flex items-center ">
        <Image
          src="/philifinds-logo.svg"
          alt="PhiliFinds Logo"
          width={135}
          height={45}
          className="object-contain mt-1"
          priority
        />
      </Link>

      {/* Navigation */}
      
      <nav className="hidden md:flex items-center gap-10 text-[#40513B] text-lg font-medium font-poppins">
        <Link href="/" className="relative group inline-block hover:text-[#2f3b2b] transition">
          Home
          <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-[#40513B] transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>

        <Link href="/about" className="relative group inline-block hover:text-[#2f3b2b] transition">
          About Us
          <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-[#40513B] transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>

        <Link href="/features" className="relative group inline-block hover:text-[#2f3b2b] transition">
          Features
          <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-[#40513B] transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>

        <Link href="/contact" className="relative group inline-block hover:text-[#2f3b2b] transition">
          Contact
          <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-[#40513B] transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>

        <Link href="/itinerary-builder" className="relative group inline-block hover:text-[#2f3b2b] transition">
          Plan Trip
          <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-[#40513B] transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>

        <Link href="/settings" className="relative group inline-block hover:text-[#2f3b2b] transition">
          Settings
          <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-[#40513B] transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* User Menu */}
        <div className="relative">
          <button 
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition flex items-center gap-2">
            <div className="w-6 h-6 bg-[#7C9273] rounded-full flex items-center justify-center text-xs font-medium">
              JD
            </div>
            <span className="text-sm font-medium">John Doe</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          
          {/* Dropdown Menu */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-50">
              <Link 
                href="/itinerary-builder" 
                className="block w-full text-left px-4 py-2 text-[#2C4A3E] hover:bg-gray-100 rounded-lg transition"
                onClick={() => setShowUserMenu(false)}
              >
                Plan Trip
              </Link>
              <Link 
                href="/settings" 
                className="block w-full text-left px-4 py-2 text-[#2C4A3E] hover:bg-gray-100 rounded-lg transition"
                onClick={() => setShowUserMenu(false)}
              >
                Settings
              </Link>
              <Link 
                href="/profile" 
                className="block w-full text-left px-4 py-2 text-[#2C4A3E] hover:bg-gray-100 rounded-lg transition"
                onClick={() => setShowUserMenu(false)}
              >
                Profile
              </Link>
              <button 
                className="block w-full text-left px-4 py-2 text-[#2C4A3E] hover:bg-gray-100 rounded-lg transition"
                onClick={() => {
                  setShowUserMenu(false);
                  console.log("Logout clicked");
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Get Started */}
        
          <button 
            onClick={() => {
                console.log("Start Planning clicked",showLogin);
                setShowLogin(true)

              }}
            className="px-5 py-2 rounded-full border border-stone-700 text-stone-700 hover:bg-stone-100 transition">
            Get Started
          </button>
        

        {/* Sign Up */}
        
        <button 
          onClick={() => {
                console.log("Start Planning clicked",showSignup);
                setShowSignup(true)

              }}
          className="px-5 py-2 rounded-full bg-[#40513B] text-white hover:bg-[#] transition">
            
          Sign Up
        </button>
        
      </div>
      
      {/* Login overlay */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {/* Signup overlay */}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}

    </header>
  );
};

export default Header;