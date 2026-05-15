// app/page.tsx

"use client"; // at the very top, even if the rest is server‑sid
import { useState } from "react";
import Login from "@/app/components/login/page";
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  const [showLogin, setShowLogin] = useState(false);

  const activities = [
    { title: "Island Hopping", img: "https://placehold.co/230x304" },
    { title: "Trekking", img: "https://placehold.co/230x304" },
    { title: "Beach", img: "https://placehold.co/230x304" },
    { title: "Waterfalls", img: "https://placehold.co/230x304" },
    { title: "Diving & Snorkeling", img: "https://placehold.co/230x304" },
  ];

  const destinations = [
    { title: "Palawan", img: "https://placehold.co/350x220" },
    { title: "Bohol", img: "https://placehold.co/350x220" },
    { title: "Siargao", img: "https://placehold.co/350x220" },
    { title: "Cebu", img: "https://placehold.co/350x220" },
  ];

  return (
    <div className="w-full overflow-x-hidden font-sans bg-white">

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">

        {/* 🎥 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* 🌑 Optional Dark Overlay (VERY IMPORTANT for readability) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* 📝 Content */}
        <div className="relative z-10">
          <h1
            className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[96px] font-semibold font-playfair text-center leading-[1.05] tracking-[-0.03em] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            style={{ fontVariationSettings: "'wght' 600, 'opsz' 72" }}
          >
            Take the step.<br />The world will meet you there.
          </h1>

          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white drop-shadow-md max-w-2xl mx-auto">
            Plan smarter trips across the Philippines with AI-powered itineraries tailored to your budget, time, and travel style.
          </p>

          
            <button 
              onClick={() => {
                console.log("Start Planning clicked",showLogin);
                setShowLogin(true)

              }}
              className="mt-8 px-8 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/30 text-white text-base font-semibold tracking-wider  hover:bg-white/20 transition-all duration-300">
              Start Planning
            </button>
          
        </div>
      </section>

      {/* Story Transition Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto text-center justify-center px-10">
          <h2 className="text-xl sm:text-xl   text-[#40513B]/60 tracking-wide text-center max-w-2xl mx-auto leading-relaxed">
           But for many travelers… the journey doesn’t begin with excitement.
          </h2>
        </div>
      </section>


      {/* Story Section */}
      <section className="py-20 bg-[#EDF1D6]">
        <div className=" flex text-center mb-12 mx-auto px-10 justify-center">
          <h2 className="relative text-3xl sm:text-6xl font-bold font-playfair text-[#40513B] leading-tight">
            It Begins with Stress,<br /><span className="text-[#609966]">Not Adventure.</span>
          </h2>
        </div>

        {/* Pain Flow */}
        <div className="max-w-5xl mx-auto py-10 px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-[#40513B]/80 text-base tracking-wide">

            {/* Text 1 */}
            <p className="relative max-w-xs font-poppins font-medium">
              Comparing destinations, estimating costs, and planning routes can take hours.
            </p>

            {/* Text 2 */}
            <p className="relative max-w-xs font-poppins font-medium">
              Too many tabs, too many decisions, and too much guesswork.
            </p>

            {/* Text 3 */}
            <p className="relative max-w-xs font-poppins font-medium">
              The trip hasn’t even begun…<br />
              but you’re already tired.
            </p>

          </div>

        </div>
        
      </section>

      <section className="py-20 md:pb-48 bg-white">
        <div className="w-full flex justify-center mx-auto">
          <div className="relative w-full max-w-[1206px]" style={{ aspectRatio: "1206/847" }}>

            {/* TITLE — left:137 top:0 */}
            <div
              className="relative text-3xl sm:text-6xl text-center text-[#40513B] font-bold font-playfair tracking-[4px] text-[clamp(0.8rem,2.8vw,2.25rem)]"
              
            >
              Meet Your AI Travel Companion
            </div>

            {/* SUBTITLE — w:821 left:76 top:84 */}
            <div
              className="mt-10 mb-[500px] text-base sm:text-lg text-center text-black/50 font-normal  tracking-wide text-[clamp(0.45rem,1.1vw,1.1rem)] leading-relaxed"
              
            >
              PhiliFinds transforms complex planning into a simple experience.
              Tell us your budget, your time, your preferences—and we'll create
              a journey designed just for you.
            </div>

            {/* RIGHT IMAGE — left:802 top:176 w:384 h:607 */}
            <img
              src="/about-us-2.png"
              alt="Travel destination"
              className="absolute object-cover rounded-xl"
              style={{ left: "66.50%", top: "30.78%", width: "31.84%", height: "71.66%" }}
            />

            {/* LEFT IMAGE — left:0 top:187 w:384 h:660 rounded-[100px] */}
            <img
              src="/about-us-1.png"
              alt="Travel destination"
              className="absolute object-cover z-20 shadow-2xl"
              style={{
                left: "0%", top: "30.08%",
                width: "31.84%", height: "77.92%",
                borderRadius: "clamp(16px,4vw,100px)"
              }}
            />

            {/* CENTER TITLE — w:384 left:427 top:266 */}
            <div
              className="absolute text-center text-[#40513B] font-bold font-playfair tracking-[3.5px] z-10 text-[clamp(0.6rem,2vw,1.8rem)]"
              style={{ width: "31.84%", left: "33.00%", top: "40.00%" }}
            >
              From Idea to Itinerary in Minutes
            </div>

            {/* BAR 1 — left:370 top:445 w:384 h:128  rounded-tr rounded-br */}
            <div
              className="absolute bg-[#EDF1D6] rounded-tr-[20px] rounded-br-[20px] shadow-[2px_-2px_4px_0px_rgba(0,0,0,0.25)]"
              style={{ left: "30.68%", top: "62.54%", width: "31.84%", height: "15.11%" }}
            />
            {/* TEXT 1 — left:388 top:485 w:320 */}
            <div
              className="absolute text-center text-[#9DC08B] font-normal font-serif tracking-[3.5px] text-[clamp(0.45rem,1.6vw,1.4rem)] flex items-center justify-center"
              style={{ left: "32.00%", top: "62.54%", width: "26.53%", height: "15.11%" }}
            >
              Tell Us Your Plan
            </div>

            {/* BAR 2 — left:370 top:545 w:453 h:128 */}
            <div
              className="absolute bg-[#9DC08B] rounded-tr-[20px] rounded-br-[20px] shadow-[2px_-2px_4px_0px_rgba(0,0,0,0.25)]"
              style={{ left: "30.68%", top: "74.34%", width: "37.56%", height: "15.11%" }}
            />
            {/* TEXT 2 — left:388 top:585 w:384 */}
            <div
              className="absolute text-center text-[#EDF1D6] font-normal font-serif tracking-[3.5px] text-[clamp(0.45rem,1.6vw,1.4rem)] flex items-center justify-center"
              style={{ left: "32.00%", top: "74.34%", width: "31.84%", height: "15.11%" }}
            >
              Get Your AI Itinerary
            </div>

            {/* BAR 3 — left:370 top:655 w:543 h:128 */}
            <div
              className="absolute bg-[#40513B] rounded-tr-[20px] rounded-br-[20px] shadow-[2px_-2px_4px_0px_rgba(0,0,0,0.25)]"
              style={{ left: "30.68%", top: "87.33%", width: "45.02%", height: "15.11%" }}
            />
            {/* TEXT 3 — left:388 top:695 w:501 */}
            <div
              className="absolute text-center text-[#EDF1D6] font-normal font-serif tracking-[3.5px] text-[clamp(0.45rem,1.6vw,1.4rem)] flex items-center justify-center"
              style={{ left: "30.00%", top: "87.33%", width: "41.54%", height: "15.11%" }}
            >
              Travel Smarter Every Time
            </div>

          </div>
        </div>
      </section>
      


      









      {/* Features Section */}
      <section className="relative py-20 bg-[#EDF1D6]">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-6xl font-bold font-playfair text-[#40513B] py-5">
            Plan Smarter. <br />
            <span className="text-[#609966]">Travel Better.</span>
          </h2>
        </div>

        <div className="flex flex-row space-x-6 px-40 py-10">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-y-6">
            <div className="w-[454px] h-[416px] rounded-[50px] overflow-hidden shadow-[2px_2px_2px_rgba(0,0,0,0.25),-2px_-2px_2px_rgba(0,0,0,0.25)]">
              <img src="/group-1.png" alt="photo1" className="w-full h-full object-cover" />
            </div>
            <div className="w-[454px] h-[367px] rounded-[50px] overflow-hidden shadow-[2px_2px_2px_rgba(0,0,0,0.25),-2px_-2px_2px_rgba(0,0,0,0.25)]">
              <img src="/group-2.png" alt="photo2" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="flex flex-col gap-6">
            <div className="w-[453.28px] h-[292px] rounded-[50px] overflow-hidden shadow-[2px_2px_2px_rgba(0,0,0,0.25),-2px_-2px_2px_rgba(0,0,0,0.25)]">
              <img src="/group-3.png" alt="photo3" className="w-full h-full object-cover" />
            </div>
            <div className="w-[453.28px] h-[491px] rounded-[50px] overflow-hidden shadow-[2px_2px_2px_rgba(0,0,0,0.25),-2px_-2px_2px_rgba(0,0,0,0.25)]">
              <img src="/group-4.png" alt="photo4" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* RIGHT COLUMN (tables only) */}
          <div className="relative flex flex-col gap-6">
            {/* Table 1 */}
            <div
              className="relative w-[220px] h-[369px] rounded-[50px] shadow-[2px_2px_2px_rgba(0,0,0,0.25),-2px_-2px_2px_rgba(0,0,0,0.25)] bg-[#EDF1D6]"
              id="table-1"
            ></div>

            {/* Table 2 */}
            <div
              className="relative w-[220px] h-[413px] rounded-[50px] shadow-[2px_2px_2px_rgba(0,0,0,0.25),-2px_-2px_2px_rgba(0,0,0,0.25)] bg-[#EDF1D6]"
              id="table-2"
            ></div>
          </div>
        </div>

        {/* Overlapping images (on top, not inside rounded containers) */}
        {/* Image 1 over Table 1 */}
        <div 
          className="absolute top-[100px] left-[700px] pointer-events-none z-10"
          style={{ top: "320px", left: "1100px" }}
        >
          <img
            src="/group-5.svg"
            alt="photo5"
            className=" w-[75%] h-[75%] object-cover"
          />
        </div>

        {/* Image 2 over Table 2 */}
        <div 
          className="absolute top-[490px] left-[700px] pointer-events-none z-10"
          style={{ top: "740px", left: "1070px" }}
        >
          <img
            src="/group-6.svg"
            alt="photo6"
            className=" w-[70%] h-[70%] object-cover"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#40513B] text-white py-6 text-center">
        <p>&copy; 2026 PhiliFinds. All rights reserved.</p>
      </footer>



      {/* Login overlay */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      
    </div>
  );
}