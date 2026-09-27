"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkoutContext } from "@/context/WorkoutContext";
import { WorkoutItem } from "@/component/homepage/Worksout";

const MyPlan = () => {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const { planWorkouts = [], setPlanWorkouts, savedWorkouts = [], setSavedWorkouts } =
    useContext(WorkoutContext);

  
  const currentList: WorkoutItem[] =
    activeTab === "plan" ? planWorkouts : savedWorkouts;

 

  return (
    <main className="min-h-screen bg-[#090a0c] text-white px-6 py-10">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-black uppercase tracking-tight">MY PLAN</h1>
        <p className="text-xs text-zinc-400 mt-1 mb-8">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center bg-[#12141a] p-1 rounded-xl border border-zinc-800">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`text-xs px-5 py-2 rounded-lg font-bold transition cursor-pointer ${
                activeTab === "plan"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Today's Plan
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`text-xs px-5 py-2 rounded-lg font-bold transition cursor-pointer ${
                activeTab === "saved"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="text-xs text-zinc-500">
            Sort By: <span className="text-zinc-300 font-semibold cursor-pointer">Duration ▾</span>
          </div>
        </div>

        
        {currentList.length > 0 ? (
          <div className="space-y-3">
            {currentList.map((workout: WorkoutItem) => (
              <div
                key={workout.id}
                className="flex items-center justify-between p-3.5 bg-[#12141a] border border-zinc-800 rounded-xl"
              >
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 relative rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 shrink-0">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase text-white tracking-wide">
                      {workout.name}
                    </h4>
                    <div className="flex items-center gap-2 text-[11px] text-zinc-400 mt-1">
                      <span>⏱ {workout.duration} min</span>
                      <span>•</span>
                      <span>🔥 {workout.caloriesBurned} kcal</span>
                      <span>•</span>
                      <span>⭐ {workout.rating}</span>
                    </div>
                  </div>
                </div>

                
                <div className="flex items-center gap-2.5">
                  <Link href={`/workouts/${workout.id}`}>
                    <button className="text-[11px] text-zinc-400 hover:text-white px-3 py-1.5 rounded-md border border-zinc-800 cursor-pointer">
                      View Details
                    </button>
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      onClick={() =>
                        setPlanWorkouts(
                          planWorkouts.filter(
                            (item: WorkoutItem) => item.id !== workout.id
                          )
                        )
                      }
                      className="bg-[#ccff00] text-black text-[11px] font-extrabold px-3 py-1.5 rounded-md hover:bg-[#b8e600] transition cursor-pointer flex items-center gap-1"
                    >
                      ✓ Mark as Done
                    </button>
                  )}

                 
                  <button
                    onClick={() => {
                      if (activeTab === "plan") {
                        setPlanWorkouts(
                          planWorkouts.filter(
                            (item: WorkoutItem) => item.id !== workout.id
                          )
                        );
                      } else {
                        setSavedWorkouts(
                          savedWorkouts.filter(
                            (item: WorkoutItem) => item.id !== workout.id
                          )
                        );
                      }
                    }}
                    className="text-zinc-500 hover:text-red-400 text-sm px-2 py-1 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          
          <div className="border border-zinc-800/80 border-dashed rounded-2xl p-16 text-center space-y-4 bg-[#12141a]/40">
            <h3 className="font-extrabold text-sm uppercase tracking-widest text-zinc-200">
              NOTHING HERE YET
            </h3>
            <p className="text-xs text-zinc-400 max-w-xs mx-auto">
              Browse the library and add a lift to get today moving.
            </p>
            <div className="pt-2">
              <Link href="/">
                <button className="bg-[#ccff00] text-black font-extrabold text-xs px-6 py-2.5 rounded-lg uppercase hover:bg-[#b8e600] transition cursor-pointer">
                  Go to workouts
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlan;