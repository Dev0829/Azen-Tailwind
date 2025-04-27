import React from "react";

export const AzenIptvStreaming = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[849px] items-start gap-[47px] absolute top-[301px] left-20">
      <div className="relative self-stretch mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-bold text-white text-[70px] tracking-[0] leading-[normal]">
        Azen IPTV Streaming LLC
      </div>

      <p className="w-[482px] text-transparent text-xl relative [font-family:'Maven_Pro',Helvetica] font-normal tracking-[0] leading-[normal]">
        <span className="text-[#b9b9b9]">Stream effortlessly with </span>

        <span className="font-bold text-[#ffc72c]">
          Azen IPTV Streaming LLC
        </span>

        <span className="text-[#b9b9b9]">
          , the leading IPTV player offering high quality and multiple
          platforms.
        </span>
      </p>

      <div className="relative self-stretch [font-family:'Maven_Pro',Helvetica] font-normal text-[#b9b9b9] text-xl tracking-[0] leading-[normal]">
        Enjoy high-quality content today!
      </div>

      <div className="flex w-[230px] h-[60px] items-center justify-around gap-[52px] relative bg-neutral-950 rounded-[10px] border-[0.5px] border-solid border-[#ffc72c]">
        <div className="flex flex-col w-[139px] items-start relative">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-semibold text-[#ffc72c] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Download now
          </div>
        </div>
      </div>
    </div>
  );
};
