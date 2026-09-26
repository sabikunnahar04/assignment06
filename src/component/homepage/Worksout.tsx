import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface WorkoutItem {
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
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data: WorkoutItem[] = await res.json();
    return data;
};

const Worksout = async () => {
    const worksData = await getWorks();

    return (
        <div className="min-h-screen bg-[#090a0c] text-white px-4 py-8">
            <div className="container mx-auto max-w-6xl px-4 py-8">

                <h2 className="text-xl font-black uppercase tracking-wider text-white">
                    THE LIBRARY
                </h2>
                <p className="text-xs text-zinc-400 mt-1 mb-6">
                    Twelve lifts covering every major muscle group.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {worksData?.map((item: WorkoutItem) => (
                        <div
                            key={item.id}
                            className="group bg-[#12141a] border border-zinc-800 rounded-xl overflow-hidden text-white cursor-pointer transition-all duration-300 hover:border-zinc-700"
                        >
                            
                            <div className="w-full h-48 bg-zinc-900 overflow-hidden relative">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={400}
                                    height={200}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                />
                            </div>

                            <div className="p-4 space-y-3">
                                <div className="flex flex-wrap gap-2">
                                    {item.muscleGroups?.map((group: string, idx: number) => (
                                        <span
                                            key={idx}
                                            className="bg-[#243315] text-[#a3e635] text-[10px] font-bold px-2 py-0.5 rounded uppercase"
                                        >
                                            {group}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="font-extrabold text-base uppercase group-hover:text-[#a3e635] transition-colors">
                                    {item.name}
                                </h3>

                                <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
                                    <span>{item.equipment}</span>
                                    <span>⭐ {item.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Worksout;