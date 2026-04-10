// app/components/login/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

export default function Login({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push("/builder");
      onClose();
    }
  };



  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/builder`, // landing after Google auth
      },
    });

    if (error) {
      alert(error.message);
    }
  };



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      {/* Your 940×584 card */}
      <div className="relative w-[840px] h-[584px] pl-6 md:pl-10">
        {/* Main card */}
        <div className="absolute left-0 top-0 w-full h-full bg-white rounded-[50px] shadow-[-3px_-3px_0px_rgba(0,0,0,0.25),_3px_3px_3px_rgba(0,0,0,0.25)]"></div>

        {/* Image on right */}
        <div className="absolute left-[490px] top-[61px] w-80 h-[500px]">
          <img
            src="/login-photo.jpg"
            alt="Travel"
            className="w-full h-full object-cover rounded-[50px]"
          />
        </div>

        {/* Welcome text */}
        <div className="absolute left-[103px] top-[61px] text-[#40513B] text-4xl font-semibold font-playfair">
          Welcome to PhiliFinds
        </div>

        {/* Email label */}
        <div className="absolute left-[89px] top-[123px] text-black text-xs font-normal font-poppins">
          Email
        </div>

        {/* Email input (real input) */}
        <div className="absolute left-[74px] top-[141px] w-96 h-10">
          <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border-[0.5px] border-black/30"></div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="absolute inset-0 w-full h-full px-[25px] py-2 bg-transparent text-black/60 text-xl font-normal font-poppins outline-none"
          />
        </div>

        {/* Password label */}
        <div className="absolute left-[89px] top-[222px] text-black text-xs font-normal font-poppins">
          Password
        </div>

        {/* Password input (real input) */}
        <div className="absolute left-[74px] top-[241px] w-96 h-10">
          <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border-[0.5px] border-black/30"></div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="absolute inset-0 w-full h-full px-[25px] py-2 bg-transparent text-black/60 text-xl font-normal font-poppins outline-none"
          />
        </div>

        {/* Forgot Password */}
        <div className="absolute left-[76px] top-[293px] text-stone-700 text-xs font-normal font-poppins">
          Forgot Password?
        </div>

        {/* Login button (with press effect) */}
        <div
          onClick={handleLogin}
          className="absolute left-[74px] top-[330px] w-96 h-10 flex items-center justify-center cursor-pointer active:scale-[0.98] active:opacity-90 transition-all duration-75"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#40513B] to-[#609966] rounded-2xl"></div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#40513B]/20 to-[#609966]/20 rounded-2xl pointer-events-none"></div>
          {/* Text centered */}
          <span className="relative z-10 text-white text-xl font-normal font-sans">
            Log in
          </span>
        </div>

        {/* OR line */}
        <div className="absolute left-[74px] top-[399px] w-96 h-4 flex items-center">
          <div className="flex-1 h-[1px] bg-black/30"></div>
          <div className="px-4 bg-white text-center text-black/30 text-base font-normal font-sans whitespace-nowrap">
            OR
          </div>
          <div className="flex-1 h-[1px] bg-black/30"></div>
        </div>

        {/* Google sign‑in */}
        <div 
          onClick={handleGoogleSignIn}
          className="absolute left-[74px] top-[446px] w-96 h-10 cursor-pointer active:scale-[0.98] active:opacity-90">

          {/* Button background */}
          <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border border-black/30 pointer-events-none"></div>
          {/* Inner content (icon + text) */}
          <div className="absolute inset-0 flex items-center justify-center gap-2.5">
            {/* Google logo image */}
            <div className="w-6 h-6 overflow-hidden">
              <img
                src="/google-icon.svg"
                alt="Google logo"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Text */}
            <div className="text-black text-xs font-medium font-['Poppins']">
              Sign in with Google
            </div>
          </div>
        </div>

        {/* Close X (top‑right) */}
        <div
          className="absolute right-5 top-5 w-11 h-11 overflow-hidden cursor-pointer hover:bg-gray-200 active:bg-gray-300 active:scale-[0.90] active:opacity-85 transition-all duration-75 rounded-full flex items-center justify-center"
          onClick={onClose}
        >
          <img
            src="/close-exit.svg"
            alt="Close"
            className="w-7 h-7 object-cover"
          />
        </div>
      </div>
    </div>
  );
}