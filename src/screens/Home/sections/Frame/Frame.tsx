import React from "react";

export const Frame = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[996px] items-center gap-10 absolute top-[971px] left-[222px]">
      <div className="flex w-[185px] h-[60px] items-center justify-around gap-[52px] relative bg-neutral-950 rounded-[10px] border border-solid border-[#e56db1]">
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            How It Works
          </div>
        </div>
      </div>

      <p className="relative w-fit [font-family:'Maven_Pro',Helvetica] font-medium text-white text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
        How to use our Azen IPTV Streaming LLC?
      </p>
    </div>
  );
};
