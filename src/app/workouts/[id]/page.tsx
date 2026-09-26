import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkoutItem } from "@/components/homepage/Worksout";

// Dynamic API theke data fetch
async function getSingleWorkout(id: string): Promise<WorkoutItem> {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  if (!res.ok) {
    throw new Error("Failed to load workout details");
  }
  return res.json();
}

export default async function WorkoutDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = await getSingleWorkout(id);

  return (
    <main className="min-h-screen bg-[#090a0c] text-white px-4 py-8">
      <div className="container mx-auto max-w-5xl">
        <Link
          href="/"
          className="text-xs text-zinc-400 hover:text-[#a3e635] mb-6 inline-flex items-center gap-1.5 transition"
        >
          ← Back to Library
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-4">
          {/* Big Image */}
          <div className="w-full bg-[#12141a] border border-zinc-800 rounded-2xl overflow-hidden aspect-square relative">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
              priority
            />
          </div>

         
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-black uppercase tracking-tight">
                {workout.name}
              </h1>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                {workout.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups?.map((group: string, idx: number) => (
                <span
                  key={idx}
                  className="bg-[#243315] text-[#a3e635] text-xs font-bold px-3 py-1 rounded uppercase"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="border-t border-b border-zinc-800 divide-y divide-zinc-800/60 text-xs">
              <div className="flex justify-between py-2.5">
                <span className="text-zinc-500 uppercase">Equipment</span>
                <span className="font-semibold text-zinc-200">{workout.equipment}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-zinc-500 uppercase">Difficulty</span>
                <span className="font-semibold text-zinc-200">{workout.difficulty}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-zinc-500 uppercase">Sets & Reps</span>
                <span className="font-semibold text-zinc-200">{workout.sets} sets × {workout.reps}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-zinc-500 uppercase">Duration</span>
                <span className="font-semibold text-zinc-200">{workout.duration} mins</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-zinc-500 uppercase">Rating</span>
                <span className="font-semibold text-[#a3e635]">⭐ {workout.rating}</span>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                INSTRUCTIONS
              </h3>
              <ol className="list-decimal list-inside space-y-1.5 text-xs text-zinc-300">
                {workout.instructions?.map((step: string, idx: number) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}