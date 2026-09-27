"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className={`px-4 py-1.5 rounded-full transition ${
          pathname === "/"
            ? "bg-[#243315] text-[#a3e635]"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        Workouts
      </Link>
      <Link
        href="/my-plan"
        className={`px-4 py-1.5 rounded-full transition ${
          pathname === "/my-plan"
            ? "bg-[#243315] text-[#a3e635]"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        My Plan
      </Link>
    </>
  );
};

export default NavLinks;