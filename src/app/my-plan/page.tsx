"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";

const MyPlan = () => {
  const { planWorkouts, savedWorkouts } = useContext(WorkoutContext);

  console.log(planWorkouts, savedWorkouts, "planWorkouts", "savedWorkouts");

  return <div>My Plan workouts</div>;
};

export default MyPlan;