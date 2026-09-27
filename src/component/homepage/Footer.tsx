import Image from 'next/image';
import React from 'react';
import Logo from "@/assets/logo.png"

const Footer = () => {
    return (
        <div>
            <footer className="w-full bg-[#0D0F12] border-t border-gray-800 text-gray-500 py-4 px-8 flex justify-between items-center text-xs">
  <div className="flex items-center gap-2 font-black text-[#CCFF00]">
     <Image
            src={Logo}
              alt="logo design "
              />
              <span className="font-extrabold text-white text-lg ">
            FITLOG
          </span>
  </div>
  <div>
    © 2026 FitLog — Tracked Every Set, Made Every Rep Count.
  </div>
</footer>
        </div>
    );
};

export default Footer;