import React from "react";
import { Recycle } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "h-12", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* High-Clarity Scalable Graphic Container */}
      <div className="relative h-full aspect-square shrink-0">
        
        {/* Emerald Green Rounded Square */}
        <div className="absolute top-0 left-0 w-[85%] h-[85%] bg-[#02b36c] rounded-[22%] flex items-center justify-center shadow-sm">
          <Recycle size="55%" className="text-white" strokeWidth={2.5} />
        </div>
        
        {/* White Circle Overlay */}
        <div className="absolute bottom-0 right-0 w-[45%] h-[45%] bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-white">
          {/* Custom Leaf Vector pointing top-right */}
          <svg viewBox="0 0 24 24" className="w-[60%] h-[60%] text-[#02b36c] fill-current -ml-[1px] mt-[1px]" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.4 2.6C20.9 2.2 20.3 2 19.6 2C15.6 2 11.7 4.5 9.4 8.2C7.9 10.5 7 13.2 7 16L4.3 18.7C3.9 19.1 3.9 19.7 4.3 20.1C4.5 20.3 4.7 20.4 5 20.4C5.3 20.4 5.5 20.3 5.7 20.1L8.4 17.4C11.2 17.4 13.9 16.5 16.2 15C19.9 12.7 22.4 8.8 22.4 4.8C22.4 4.1 22.2 3.5 21.4 2.6Z" />
          </svg>
        </div>
      </div>

      {/* Typography Part */}
      {showText && (
        <div className="flex flex-col justify-center text-left leading-none pt-[2px]">
          {/* Single Line Brand Name */}
          <div className="flex items-center gap-1 text-[16px] sm:text-[18px] md:text-[26px] font-[900] tracking-tight uppercase">
            <span className="text-[#033323]">NAMMA</span>
            <span className="text-[#02b36c]">E-WASTE</span>
          </div>
          {/* Tagline */}
          <div className="text-[6px] sm:text-[7px] md:text-[9px] font-bold text-slate-400 tracking-[0.12em] uppercase mt-[2px] md:mt-[4px]">
            Recycle Today. Better Tomorrow.
          </div>
        </div>
      )}
    </div>
  );
}
