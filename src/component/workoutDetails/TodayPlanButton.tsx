"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { WorkoutItem } from "@/component/homepage/Worksout";
import React, { useContext } from "react";

const TodayPlanButton = ({ workout }: { workout: WorkoutItem }) => {
  const { planWorkouts, setPlanWorkouts } = useContext(WorkoutContext);

  const handleAddPlan = () => {
    console.log("add plan btn triggered", workout);
    setPlanWorkouts([...planWorkouts, workout]);
    alert(`You have added "${workout.name}" to Today's Plan`);
  };

  return (
    <button
      onClick={handleAddPlan}
      className="btn btn-primary flex-1 bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs py-3.5 px-4 rounded-lg uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition"
    >
      <span>📁</span> Add to today's plan
    </button>
  );
};

export default TodayPlanButton;