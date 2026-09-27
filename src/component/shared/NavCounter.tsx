"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { WorkoutContext } from "@/context/WorkoutContext";

const NavCounters = () => {
  const { planWorkouts = [], savedWorkouts = [] } = useContext(WorkoutContext);

  return (
    <div className="flex items-center gap-5 text-sm text-zinc-300">
      <Link href="/my-plan" className="flex items-center gap-1.5 hover:text-white ">
        <span>Plan</span>
        <span className="bg-[#a3e635] text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {planWorkouts.length}
        </span>
      </Link>
      <Link href="/my-plan" className="flex items-center gap-1.5 text-zinc-400 hover:text-white">
        <span>Saved</span>
        <span className="border border-zinc-700 text-zinc-400 text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {savedWorkouts.length}
        </span>
      </Link>
    </div>
  );
};

export default NavCounters;