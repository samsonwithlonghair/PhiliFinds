"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import DashboardNavbar from "../components/DashboardHeader";
import { supabase } from "@/lib/supabaseClient";

export default function Dashboard() {
  const router = useRouter();
  const [profile, setProfile] = useState<any | null>(null);

  // LIVE TIME
  const [time, setTime] = useState(new Date());

  // WEATHER STATE
  const [weather, setWeather] = useState<any | null>(null);

  // CALENDAR STATE
  const [currentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(
    new Date().getDate()
  );
 useEffect(() => {
  const getUserProfile = async () => {
    const { data: authData } = await supabase.auth.getUser();

    if (!authData.user) return;

    const { data: profile, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    if (!error) {
      setProfile(profile);
    }
  };

  getUserProfile();
}, []);

  // LIVE CLOCK
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // WEATHER FETCH (Open-Meteo - Cebu default coords)
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=10.3157&longitude=123.8854&current_weather=true"
        );
        const data = await res.json();
        setWeather(data.current_weather);
      } catch (err) {
        console.error("Weather fetch failed:", err);
      }
    };

    fetchWeather();
  }, []);


  const uploadAvatar = async (file: File) => {
    if (!profile) return;

    const fileExt = file.name.split(".").pop();
    const filePath = `${profile.id}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.error(uploadError);
      return;
    }

    const { data } = supabase.storage
      .from("avatars")
      .getPublicUrl(filePath);

    const publicUrl = data.publicUrl;

    await supabase
      .from("profiles")
      .update({ avatar_url: publicUrl })
      .eq("id", profile.id);

    setProfile({ ...profile, avatar_url: publicUrl });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    await uploadAvatar(file);
  };

  // CALENDAR LOGIC
  const daysInMonth = useMemo(() => {
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
  }, [currentDate]);

  const firstDay = useMemo(() => {
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
  }, [currentDate]);

  const calendarDays = useMemo(() => {
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);
    return days;
  }, [daysInMonth, firstDay]);


  // TRIP DATA (TEMP - replace later with Supabase)
const trips = [
  { status: "completed" },
  { status: "completed" },
  { status: "ongoing" },
  { status: "upcoming" },
  { status: "upcoming" },
  { status: "upcoming" },
];

// SUMMARY CALCULATION
const summary = useMemo(() => {
  const total = trips.length;

  const completed = trips.filter(t => t.status === "completed").length;
  const ongoing = trips.filter(t => t.status === "ongoing").length;
  const upcoming = trips.filter(t => t.status === "upcoming").length;

  return { total, completed, ongoing, upcoming };
}, []);

// PERCENTAGES
const completedPct = (summary.completed / summary.total) * 100;
const ongoingPct = (summary.ongoing / summary.total) * 100;
const upcomingPct = (summary.upcoming / summary.total) * 100;

  return (
    <>
      <DashboardNavbar />

      <section className="min-h-screen bg-[#f8f8f5] px-6 md:px-16 lg:px-24 py-10">
        <div className="max-w-[1400px] mx-auto">

          {/* GREETING */}
          <h1 className="ml-36 mt-10 mb-20 text-3xl md:text-4xl font-bold font-['Playfair_Display'] tracking-[4px] text-stone-700 ">
            Hello, {profile?.username || "Guest"}!
          </h1>

          <div className="flex flex-col xl:flex-row gap-10 justify-center items-center xl:items-start">

            {/* ================= LEFT SIDE ================= */}
            <div className="relative w-full max-w-[697px] h-[954px]  ">

              {/* PROFILE IMAGE */}
              <img
                src={profile?.avatar_url || "/dashboard-profile.png"}
                alt="profile"
                className="absolute w-[261px] h-[393px] left-0 top-0 rounded-[50px]
                object-cover cursor-pointer shadow-[0.5px_0.5px_1px_rgba(0,0,0,0.25),-0.5px_-0.5px_1px_rgba(0,0,0,0.25)]
                transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98] active:translate-y-[2px]"
              />

              {/* USER OVERLAY */}

              <p className="absolute left-[34px] top-[18px] text-white text-lg font-sans tracking-widest hover:underline cursor-pointer drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
                @{profile?.username || profile?.full_name || "Guest"}
              </p>

              {/* TRIP OVERVIEW */}
              <div
                className="absolute w-56 h-52 left-[283px] top-0 bg-[#EDF1D6] rounded-[50px]
                shadow-[0.5px_0.5px_1px_rgba(0,0,0,0.25),-0.5px_-0.5px_1px_rgba(0,0,0,0.25)]
                cursor-pointer transition-all duration-300
                hover:-translate-y-1 hover:shadow-2xl
                active:scale-[0.98] active:translate-y-[2px]"

              >
                {/* TITLE */}
                <h2 className="absolute top-4 left-6 text-[#40513B] text-xl font-semibold tracking-widest">
                  Trip Overview
                </h2>

                {/* DONUT CHART */}
                <div className="absolute inset-0 flex items-center justify-center pt-6">

                  <div className="relative w-36 h-36">

                    <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">

                      {/* BACKGROUND RING */}
                      <circle
                        cx="80"
                        cy="80"
                        r="58"
                        fill="none"
                        stroke="#DDE7D6"
                        strokeWidth="16"
                      />

                      {/* COMPLETED */}
                      <circle
                        cx="80"
                        cy="80"
                        r="58"
                        fill="none"
                        stroke="#40513B"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeDasharray={`${completedPct * 3.64} 364`}
                        strokeDashoffset="0"
                      />

                      {/* ONGOING */}
                      <circle
                        cx="80"
                        cy="80"
                        r="58"
                        fill="none"
                        stroke="#9DC08B"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeDasharray={`${ongoingPct * 3.64} 364`}
                        strokeDashoffset={`-${completedPct * 3.64}`}
                      />

                      {/* UPCOMING */}
                      <circle
                        cx="80"
                        cy="80"
                        r="58"
                        fill="none"
                        stroke="#609966"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeDasharray={`${upcomingPct * 3.64} 364`}
                        strokeDashoffset={`-${(completedPct + ongoingPct) * 3.64}`}
                      />

                    </svg>

                    {/* CENTER TEXT */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[#40513B] text-xl font-semibold tracking-widest">
                        {summary.total}
                      </span>
                      <span className="text-black/30 text-[10px] font-semibold">
                        Total Trips
                      </span>
                    </div>

                  </div>
                </div>
              </div>

              {/* UPCOMING CARD */}
              <div className="absolute w-56 h-40 left-[283px] top-[228px] bg-[#40513B] rounded-[50px]
                cursor-pointer shadow-[0.5px_0.5px_1px_rgba(0,0,0,0.25),-0.5px_-0.5px_1px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center gap-2 text-center
                transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98] active:translate-y-[2px]">

                {/* TITLE */}
                <h2 className="text-[#EDF1D6] text-xl font-semibold tracking-widest">
                  Upcoming Trips
                </h2>

                {/* ICON */}
                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src="/calendar-icon.svg"
                    alt="calendar icon"
                    className="w-full h-full object-contain"
                  />
                </div>

              </div>

              {/* NIMNIM */}
              <Link 
              href="/builder"
              className="absolute w-[513px] h-36 left-0 top-[415px] rounded-[50px] cursor-pointer shadow-[0.5px_0.5px_1px_rgba(0,0,0,0.25),-0.5px_-0.5px_1px_rgba(0,0,0,0.25)]
                transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98] active:translate-y-[2px]">
                

                <img
                  src="/nimnim.svg"
                  className="absolute w-28 h-28 left-[34px] top-[19px] rounded-[20px]"
                />

                <div className="absolute left-[164px] top-[52px] flex items-center gap-2">
                  
               
                  <img
                    src="/shimmer.svg"
                    alt="shimmer icon"
                    className="w-8 h-8 object-contain"
                  />

                  <h2 className="text-[#40513B] text-3xl font-semibold tracking-[3px] ">
                    Let Nimnim Plan
                  </h2>
                </div>
              </Link>

            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="relative w-[312px] flex flex-col items-center">

              {/* TIME + WEATHER (NOW FUNCTIONAL) */}
              <div className="w-80 h-20 bg-[#40513B] rounded-[50px]
                flex items-center justify-center
                shadow-[0.5px_0.5px_1px_rgba(0,0,0,0.25),-0.5px_-0.5px_1px_rgba(0,0,0,0.25)]">

                <p className="text-[#EDF1D6] text-xl font-semibold tracking-widest">
                  {time.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}

                  {" | "}

                  {weather
                    ? `${weather.temperature}°C · ${weather.weathercode}`
                    : "Loading weather..."}
                </p>
              </div>

             
              {/* CALENDAR */}
              <div className="relative w-80 h-96 mt-6 bg-[#EDF1D6] rounded-[50px]
              shadow-[0.5px_0.5px_1px_rgba(0,0,0,0.25),-0.5px_-0.5px_1px_rgba(0,0,0,0.25)]
              flex flex-col items-center justify-center px-6">

                {/* TITLE */}
                <h2 className="text-stone-700 text-xl font-semibold tracking-widest mb-4">
                  Calendar
                </h2>

                {/* WEEK LABELS */}
                <div className="grid grid-cols-7 w-full text-center text-xs text-[#40513B] mb-3">
                  {["S","M","T","W","T","F","S"].map((d, i) => (
                    <span key={i}>{d}</span>
                  ))}
                </div>

                {/* DAYS GRID */}
                <div className="grid grid-cols-7 gap-y-3 text-center text-black/50 text-sm w-full">
                  {calendarDays.map((day, i) => {
                    if (!day) return <div key={i}></div>;

                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedDate(day)}
                        className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center
                        transition
                        ${selectedDate === day ? "bg-[#40513B] text-white font-bold" : "hover:bg-[#40513B]/20"}`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

              </div>



            </div>

          </div>
        </div>
      </section>
    </>
  );
}