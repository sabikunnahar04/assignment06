import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png"; 

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
            href="/apps"
            className="text-zinc-400 hover:text-white px-3 py-1.5 "
          >
            My Plan
          </Link>
        </nav>

       
        <div className="flex items-center gap-5 text-sm text-zinc-300">
          <Link href="/apps" className="flex items-center gap-1.5 hover:text-white ">
            <span>Plan</span>
            <span className="bg-[#a3e635] text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Saved</span>
            <span className="border border-zinc-700 text-zinc-400 text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;