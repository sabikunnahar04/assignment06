"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";

const MyPlan = () => {
  const { planWorkouts, savedWorkouts } = useContext(WorkoutContext);

  console.log(planWorkouts, savedWorkouts, "planWorkouts", "savedWorkouts");

  return <div>
Listed plan | Total plan : {planWorkouts.length} <br /> | Total save {savedWorkouts.length}

  </div>;
};

export default MyPlan;