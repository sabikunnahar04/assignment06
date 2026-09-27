"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { WorkoutItem } from "@/component/homepage/Worksout";
import React, { useContext } from "react";

const SavedButton = ({ workout }: { workout: WorkoutItem }) => {
  const { savedWorkouts, setSavedWorkouts } = useContext(WorkoutContext);

  const handleSaveWorkout = () => {
    console.log("save btn triggered", workout);
    const isAlreadySaved = savedWorkouts.find((item) => item.id === workout.id);

    if (isAlreadySaved) {
      alert(`⚠️ "${workout.name}" is already saved!`);
      return;
    }
    setSavedWorkouts([...savedWorkouts, workout]);
    alert(`You have saved "${workout.name}" for later`);
  };

  return (
    <button
      onClick={handleSaveWorkout}
      className="btn flex-1 border border-zinc-700 hover:border-zinc-500 bg-[#12141a]/60 text-zinc-300 font-bold text-xs py-3.5 px-4 rounded-lg uppercase flex items-center justify-center gap-2 cursor-pointer transition"
    >
      <span>🔖</span> Save for later
    </button>
  );
};

export default SavedButton;