"use client";

import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { WorkoutItem } from "@/component/homepage/Worksout";

export interface WorkoutContextType {
  planWorkouts: WorkoutItem[];
  setPlanWorkouts: Dispatch<SetStateAction<WorkoutItem[]>>;
  savedWorkouts: WorkoutItem[];
  setSavedWorkouts: Dispatch<SetStateAction<WorkoutItem[]>>;
}

export const WorkoutContext = createContext<WorkoutContextType>({} as WorkoutContextType);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [planWorkouts, setPlanWorkouts] = useState<WorkoutItem[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<WorkoutItem[]>([]);

  const sharedData: WorkoutContextType = {
    planWorkouts,
    setPlanWorkouts,
    savedWorkouts,
    setSavedWorkouts,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};