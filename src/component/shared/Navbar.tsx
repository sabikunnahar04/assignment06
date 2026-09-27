import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png"; 
import NavCounters from "./NavCounter";

const Navbar = () => {
  return (
    <div className="bg-[#0f1115] border-b border-zinc-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
       
        
        <div className="flex items-center gap-2">
          
          <div className="dropdown lg:hidden">
            <label tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-[#12141a] border border-zinc-800 rounded-box w-48 space-y-2">
              <li>
                <Link href="/" className="text-zinc-300 hover:text-white">Workouts</Link>
              </li>
              <li>
                <Link href="/my-plan" className="text-zinc-400 hover:text-white">My Plan</Link>
              </li>
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="FITLOG" width={32} height={32} />
            <span className="font-extrabold text-white text-base md:text-lg">
              FITLOG
            </span>
          </Link>
        </div>

        
        <nav className="hidden lg:flex items-center gap-3 text-sm font-medium">
          <Link
            href="/"
            className="bg-[#243315] text-[#a3e635] px-4 py-1.5 rounded-full hover:brightness-110"
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className="text-zinc-400 hover:text-white px-3 py-1.5 transition"
          >
            My Plan
          </Link>
        </nav>

       
        <NavCounters />
      </div>
    </div>
  );
};

export default Navbar;