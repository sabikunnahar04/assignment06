import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png"; 
import NavCounters from "./NavCounter";

const Navbar = () => {
  return (
    <div className="bg-[#0f1115] border-b border-zinc-800">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
       
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="FITLOG" width={32} height={32} />
          <span className="font-extrabold text-white text-lg ">
            FITLOG
          </span>
        </Link>


        <nav className="flex items-center gap-3 text-sm font-medium">
          <Link
            href="/"
            className="bg-[#243315] text-[#a3e635] px-4 py-1.5 rounded-full hover:brightness-110 "
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

       <NavCounters/>
      </div>
    </div>
  );
};

export default Navbar;