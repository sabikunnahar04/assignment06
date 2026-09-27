import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-[#090a0c] text-white px-4">
      <div className="max-w-md w-full text-center space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12141a] border border-zinc-800 text-[11px] font-semibold text-[#a3e635] tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
          Error 404
        </div>

        {/* 404 Number */}
        <h1 className="text-7xl sm:text-8xl font-black tracking-tighter text-white">
          4<span className="text-[#a3e635]">0</span>4
        </h1>

        {/* Text */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide">
            Page Not Found
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto">
            The lift or page you are looking for has been moved, completed, or doesnt exist.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto bg-[#a3e635] hover:bg-[#86efac] text-black font-extrabold text-xs px-6 py-3 rounded-lg uppercase tracking-wider transition cursor-pointer"
          >
            Back to Workouts
          </Link>
          
          <Link
            href="/my-plan"
            className="w-full sm:w-auto border border-zinc-800 hover:border-zinc-700 bg-[#12141a] text-zinc-300 hover:text-white font-bold text-xs px-6 py-3 rounded-lg uppercase tracking-wider transition cursor-pointer"
          >
            Check My Plan
          </Link>
        </div>

      </div>
    </main>
  );
};

export default NotFound;