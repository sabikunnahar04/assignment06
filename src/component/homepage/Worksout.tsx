import React from 'react';
import WorkCard from '../shared/WorkCard';

export interface WorkoutItem {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

const getWorks = async (): Promise<WorkoutItem[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  const data: WorkoutItem[] = await res.json();
  return data;
};

const Worksout = async () => {
  const worksData = await getWorks();

  return (
   
    <section id="library" className="min-h-screen bg-[#090a0c] text-white px-4 py-8 scroll-mt-16">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-xl font-black uppercase tracking-wider text-white">
          THE LIBRARY
        </h2>
        <p className="text-xs text-zinc-400 mt-1 mb-6">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {worksData?.map((item: WorkoutItem) => {
            return <WorkCard key={item.id} workout={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Worksout;