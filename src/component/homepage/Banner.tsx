import React from 'react';
import Link from "next/link";

import Gym from "@/assets/banner.png"
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="min-h-screen bg-[#090a0c] text-white px-4 py-8">
      <div className="container mx-auto max-w-6xl">
       
        <div className="bg-[#12141a] rounded-2xl p-8 md:p-14 border border-zinc-800/80 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          
         
          <div className="max-w-xl space-y-5">
            <span className="text-[#a3e635] text-xs font-bold ">
              WORKOUT LIBRARY
            </span>

            <h1 className="text-4xl md:text-5xl font-black  text-white">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="text-zinc-400 text-sm md:text-base ">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into todays plan, and watch the weeks work add up.
            </p>

            <div className="pt-2">
              <Link
                href="#library"
                className="inline-block bg-[#a3e635] hover:bg-[#86efac] text-black font-extrabold text-xs px-6 py-3 rounded-md uppercase  transition-colors"
              >
                Browse Workouts
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center w-full max-w-md">
          
            <Image
            src={Gym}
              alt="Workout Machine"
              className="w-full h-auto  max-h-360px"/>
           
            
          </div>

        </div>
      </div>
    </div>
    );
};

export default Banner;