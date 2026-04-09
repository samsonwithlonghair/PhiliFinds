// app/components/Header.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
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
        <Link href="/login">
          <button className="px-5 py-2 rounded-full border border-stone-700 text-stone-700 hover:bg-stone-100 transition">
            Get Started
          </button>
        </Link>

        {/* Sign Up */}
        <Link href="/signup">
          <button className="px-5 py-2 rounded-full bg-stone-700 text-lime-100 hover:bg-stone-800 transition">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;