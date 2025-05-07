import React from "react";

export const AzenIptvStreaming = (): JSX.Element => {
  return (
    <div className="container hover_effect mx-auto max-w-[1280px] [font-family:'Maven_Pro',Helvetica] flex flex-col items-start gap-[47px] relative">
      <p className="relative self-stretch font-bold text-white text-[45px] md:text-[70px] tracking-[0] leading-[normal]">
        Azen IPTV Streaming LLC
      </p>

      <p className="w-[261px] md:w-[482px] text-transparent md:text-xl relative font-normal tracking-[0] leading-[normal]">
        <span className="text-[#b9b9b9]">Stream effortlessly with </span>

        <span className="font-bold text-[#ffc72c]">
          Azen IPTV Streaming LLC
        </span>

        <span className="text-[#b9b9b9]">
          , the leading IPTV player offering high quality and multiple
          platforms.
        </span>
      </p>

      <p className="relative self-stretch font-normal text-[#b9b9b9] md:text-xl tracking-[0] leading-[normal]">
        Enjoy high-quality content today!
      </p>

      <button 
        className="group flex w-full sm:w-[230px] h-[60px] items-center justify-center gap-[52px] bg-neutral-950 rounded-[10px] border-[0.5px] border-solid border-[#ffc72c] hover:bg-[#ffc72c] cursor-pointer transition-all duration-300"
        aria-label="Download now"
      >
        <span className="font-maven-pro font-semibold text-[#ffc72c] text-xl whitespace-nowrap group-hover:text-black transition-colors">
          Download now
        </span>
      </button>
    </div>
  );
};
