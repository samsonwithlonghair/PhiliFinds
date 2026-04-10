// app/components/SignupOverlay.tsx
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Signup({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Account created!");
      router.push("/login");
      onClose();
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/builder`,
      },
    });

    if (error) {
      alert(error.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      {/* 546×671 card */}
      <div className="relative w-[546px] h-[671px] px-6">
        {/* Main card */}
        <div className="absolute left-0 top-0 w-full h-full bg-white rounded-[50px] shadow-[-2px_-2px_4px_0px_rgba(0,0,0,0.25),_2px_2px_2px_rgba(0,0,0,0.25)]"></div>

        {/* Centered logo */}
        <div className="absolute left-1/2 top-[55px] w-40 h-14 -translate-x-1/2 overflow-hidden">
          <img
            src="/Philifinds-Logo.svg"
            alt="PhiliFinds logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Close button */}
        <div
          className="absolute right-5 top-5 w-11 h-11 overflow-hidden cursor-pointer hover:bg-gray-200 active:bg-gray-300 active:scale-[0.90] active:opacity-85 transition-all duration-75 rounded-full flex items-center justify-center"
          onClick={onClose}
        >
          <img src="/close-exit.svg" alt="Close" className="w-7 h-7" />
        </div>

        {/* Title */}
        <div className="absolute left-1/2 top-[139px] -translate-x-1/2 text-[#40513B] text-5xl font-normal font-['Lato'] text-center">
          Welcome to PhiliFinds
        </div>

        {/* Entire form group (centered) */}
        <div className="absolute mt-16 left-1/2 top-[201px] -translate-x-1/2 w-96">
          {/* Email label */}
          <div className="absolute left-[20px] top-0 text-black text-xs font-normal font-poppins">
            Email
          </div>

          {/* Email input (centered) */}
          <div className="absolute left-0 top-[18px] w-96 h-10">
            <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border-[0.5px] border-black/30"></div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="absolute inset-0 w-full h-full px-[24.05px] py-2 bg-transparent text-black/60 text-xl font-normal font-poppins outline-none"
            />
          </div>

          {/* Password label */}
          <div className="absolute left-[20px] top-[98px] text-black text-xs font-normal font-poppins">
            Password
          </div>

          {/* Password input (centered) */}
          <div className="absolute left-0 top-[116px] w-96 h-10">
            <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border-[0.5px] border-black/30"></div>
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="absolute inset-0 w-full h-full px-[24.05px] py-2 bg-transparent text-black/60 text-xl font-normal font-poppins outline-none"
            />
          </div>

          {/* Password hint */}
          <div className="absolute left-0 top-[167px] w-96 text-center text-stone-700 text-xs font-normal font-poppins">
            Use 8 or more letters, numbers and symbols
          </div>

          {/* Continue button (with press effect) */}
          <div
            onClick={handleSignup}
            className="absolute left-0 top-[204px] w-96 h-10 flex items-center justify-center cursor-pointer active:scale-[0.98] active:opacity-90 transition-transform duration-75"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#40513B] to-[#609966] rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#40513B]/20 to-[#609966]/20 rounded-2xl pointer-events-none"></div>
            <span className="relative z-10 text-white text-xl font-normal font-sans">
              Continue
            </span>
          </div>

          {/* OR line */}
          <div className="absolute left-0 top-[273px] w-96 h-4 flex items-center">
            <div className="flex-1 h-[1px] bg-black/30"></div>
            <div className="px-4 bg-white text-center text-black/30 text-base font-normal font-sans whitespace-nowrap">
              OR
            </div>
            <div className="flex-1 h-[1px] bg-black/30"></div>
          </div>

          {/* Google sign‑in (inside the same centered group) */}
          <div
            onClick={handleGoogleSignIn}
            className="absolute left-0 top-[320px] w-96 h-10 cursor-pointer active:scale-[0.98] active:opacity-90 transition-transform duration-75"
          >
            <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border border-black/30 pointer-events-none"></div>
            <div className="absolute inset-0 flex items-center justify-center gap-2.5">
              <div className="w-6 h-6 overflow-hidden">
                <img
                  src="/google-icon.svg"
                  alt="Google logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-black text-xs font-medium font-['Poppins']">
                Sign in with Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}