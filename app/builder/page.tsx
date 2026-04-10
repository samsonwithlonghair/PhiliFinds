"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Builder() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    destination: "",
    days: "",
    budget: "",
    groupSize: "",
    preferences: "",
    intensity: "",
  });

  // 🔒 Protect route
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.push("/login");
      }
    };

    checkUser();
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Build Your Trip</h1>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 rounded mb-6">
        <div
          className="bg-black h-2 rounded"
          style={{ width: `${(step / 6) * 100}%` }}
        />
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <>
          <h2>Where are you going?</h2>
          <input
            className="border p-2 w-full"
            placeholder="Cebu, Bohol..."
            onChange={(e) =>
              setData({ ...data, destination: e.target.value })
            }
          />
          <button onClick={() => setStep(2)}>Next</button>
        </>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <>
          <h2>How many days?</h2>
          <input
            className="border p-2 w-full"
            placeholder="e.g. 3"
            onChange={(e) => setData({ ...data, days: e.target.value })}
          />
          <button onClick={() => setStep(3)}>Next</button>
        </>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <>
          <h2>Your budget?</h2>
          <input
            className="border p-2 w-full"
            placeholder="e.g. 5000 PHP"
            onChange={(e) => setData({ ...data, budget: e.target.value })}
          />
          <button onClick={() => setStep(4)}>Next</button>
        </>
      )}

      {/* Step 4 */}
      {step === 4 && (
        <>
          <h2>Group size?</h2>
          <input
            className="border p-2 w-full"
            placeholder="e.g. 2 people"
            onChange={(e) => setData({ ...data, groupSize: e.target.value })}
          />
          <button onClick={() => setStep(5)}>Next</button>
        </>
      )}

      {/* Step 5 */}
      {step === 5 && (
        <>
          <h2>Preferences?</h2>
          <input
            className="border p-2 w-full"
            placeholder="food, nature, nightlife..."
            onChange={(e) =>
              setData({ ...data, preferences: e.target.value })
            }
          />
          <button onClick={() => setStep(6)}>Next</button>
        </>
      )}

      {/* Step 6 */}
      {step === 6 && (
        <>
          <h2>Activity intensity?</h2>
          <input
            className="border p-2 w-full"
            placeholder="relaxed / moderate / intense"
            onChange={(e) =>
              setData({ ...data, intensity: e.target.value })
            }
          />

          <button
            onClick={async () => {
              const res = await fetch("/api/generate", {
                method: "POST",
                body: JSON.stringify(data),
              });

              const result = await res.json();

              localStorage.setItem("itinerary", result.itinerary);

              router.push("/results");
            }}
          >
            Generate Itinerary
          </button>
        </>
      )}
    </div>
  );
}