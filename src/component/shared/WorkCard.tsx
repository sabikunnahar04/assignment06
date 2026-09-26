import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WorkoutItem } from '../homepage/Worksout';

const WorkCard = ({ workout }: { workout: WorkoutItem }) => {
    return (
        <div className="group bg-[#12141a] border border-zinc-800 rounded-xl overflow-hidden text-white flex flex-col justify-between">
            <div>
                {/* Image */}
                <div className="w-full h-48 bg-zinc-900 overflow-hidden relative">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                </div>

                <div className="p-4 space-y-3">
                   
                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups?.map((group: string, idx: number) => (
                            <span
                                key={idx}
                                className="bg-[#243315] text-[#a3e635] text-[10px] font-bold px-2 py-0.5 rounded uppercase"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    <h3 className="font-extrabold text-base uppercase group-hover:text-[#a3e635] transition-colors">
                        {workout.name}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
                        <span>{workout.equipment}</span>
                        <span>⭐ {workout.rating}</span>
                    </div>
                </div>
            </div>

           
            <div className="p-4 pt-0">
                <Link href={`/workouts/${workout.id}`}>
                    <button className="w-full py-2.5 bg-zinc-800 hover:bg-[#a3e635] hover:text-black text-xs font-bold uppercase rounded-lg transition-colors">
                        View Details →
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default WorkCard;