// app/components/Header.tsx

"use client";
import React, { use, useState } from "react";
import Login from "@/app/components/login/page";
import Signup from "@/app/components/signup/page";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

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
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-3">
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
          className="px-5 py-2 rounded-full bg-stone-700 text-lime-100 hover:bg-stone-800 transition">
            
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