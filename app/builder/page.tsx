"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardNavbar from "../components/DashboardHeader";
import { supabase } from "@/lib/supabaseClient";

export default function BuilderPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  // FORM STATE
  const [form, setForm] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    travelers: "",
    style: "balanced", // adventurous | relaxed | balanced
    interests: [] as string[],
  });

  const interestOptions = [
    "Food",
    "Nature",
    "Adventure",
    "Culture",
    "Shopping",
    "Nightlife",
    "Photography",
  ];

  const toggleInterest = (item: string) => {
    setForm((prev) => {
      const exists = prev.interests.includes(item);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((i) => i !== item)
          : [...prev.interests, item],
      };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      alert("Please log in first.");
      router.push("/login");
      return;
    }

    const { error } = await supabase.from("itinerary_preferences").insert([
      {
        user_id: userData.user.id,
        destination: form.destination,
        start_date: form.startDate,
        end_date: form.endDate,
        budget: Number(form.budget),
        travelers: form.travelers,
        style: form.style,
        interests: form.interests,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Failed to save preferences.");
      return;
    }

    router.push("/builder/loading");
  };

  return (
    <>
      <DashboardNavbar />
      <div className="min-h-screen bg-[#f8f8f5] flex items-center justify-center px-6">
        <div className="mt-40 mb-40 w-full max-w-3xl bg-white rounded-[40px] shadow-xl p-10">

          {/* TITLE */}
          <h1 className="text-3xl font-extrabold font-playfair text-[#40513B] text-center tracking-widest mb-2">
            Nimnim Thinks. You Explore.
          </h1>

          <p className="text-sm text-stone-500 text-center mb-8">
            Set your travel preferences and let Nimnim plan everything for you.
          </p>

          <img
            src="/nimnim-cutout.png"
            alt="Nimnim"
            className=" absolute right-0 top-1/2 -translate-y-1/2 w-36 h-36 object-contain animate-bounce"
          />

          {/* DESTINATION */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-[#40513B]">Destination (Cities)</label>
            <input
              name="destination"
              value={form.destination}
              onChange={handleChange}
              placeholder="e.g. Cebu, Siargao, Baguio"
              className="w-full mt-2 p-3 rounded-xl border border-stone-200 text-black/60 focus:outline-none focus:ring-1 focus:ring-[#40513B]"
            />
          </div>

          {/* DATES */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="relative">
              <label className="text-sm font-semibold text-[#40513B]">Start Date</label>
              
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className={`w-full mt-2 p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-[#40513B] ${form.startDate ? "text-black/60" :  "text-black/40"}`}
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#40513B]">End Date</label>
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                className={`w-full mt-2 p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-[#40513B] ${form.endDate ? "text-black/60" :  "text-black/40"}`}
              />
            </div>
          </div>

          {/* BUDGET + TRAVELERS */}
          <div className="grid grid-cols-2 gap-4 mb-5">
           <div className="relative">
            <label className="text-sm font-semibold text-[#40513B]">Budget (PHP)</label>

              <input
                type="number"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                placeholder="0.00"
                min={0}
                className={`w-full mt-2 p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-[#40513B] ${form.budget !== "" ? "text-black/60" :  "text-black/30"}`}
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#40513B]">Number of Travelers</label>
              <input
                type="number"
                name="travelers"
                value={form.travelers}
                onChange={handleChange}
                placeholder="minimum of 1" 
                min={1}              
                className={`w-full mt-2 p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-[#40513B] ${form.travelers !== "" && form.travelers !== null ? "text-black/60" :  "text-black/30"}`}
              />
            </div>

          </div>

          {/* STYLE */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-[#40513B]">Travel Style</label>
            <select
              name="style"
              value={form.style}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-[#40513B] appearance-none bg-white bg-[url('/dropdown-arrow.svg')] bg-no-repeat bg-right-4"
            >
              <option value="adventurous">Adventurous</option>
              <option value="relaxed">Relaxed</option>
              <option value="balanced">Balanced</option>
            </select>
          </div>

          {/* INTERESTS */}
          <div className="mb-8">
            <label className="text-sm font-semibold text-[#40513B]">
              Interests
            </label>

            <div className="flex flex-wrap gap-2 mt-3">
              {interestOptions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleInterest(item)}
                  className={`px-4 py-2 rounded-full border text-sm transition
                    ${
                      form.interests.includes(item)
                        ? "bg-[#40513B] text-white"
                        : "border-stone-300 text-stone-600 hover:bg-stone-100"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* SUBMIT */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-[#40513B] text-white font-semibold tracking-widest
            hover:bg-[#2f3d2a] active:scale-[0.98] transition"
          >
            {loading ? "Generating..." : "Generate Itinerary"}
          </button>
        </div>
      </div>
    </>
  );
}