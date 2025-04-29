import React from "react";

export const Frame = (): JSX.Element => {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <button 
          className="group flex items-center h-[50px] md:h-[60px] justify-center cursor-pointer z-10 px-8 py-4 bg-neutral-950 rounded-[10px] border border-solid border-[#e56db1] hover:bg-[#e56db1] hover:text-neutral-950 transition-colors duration-300"
          aria-label="Learn how it works"
        >
          <span className="group-hover:text-white [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-base md:text-xl hover:text-neutral-950">
            How It Works
          </span>
        </button>
      </div>

      <p className="relative w-fit [font-family:'Maven_Pro',Helvetica] font-medium text-white text-[30px] md:text-[50px] tracking-[0] leading-[normal]">
        How to use our Azen IPTV Streaming LLC?
      </p>
    </div>
  );
};
