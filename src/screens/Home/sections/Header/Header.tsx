import React from "react";

export const Header = (): JSX.Element => {
  return (
    <div className="flex w-[1440px] h-[105px] items-center justify-between px-20 py-[30px] absolute top-0 left-0 bg-[#151517]">
      <img
        className="relative w-[76.69px] h-[44.98px]"
        alt="Main Logo"
        src="/src/assets/main-logo.svg"
      />

      <div className="inline-flex items-center gap-[70px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Pricing
        </div>

        <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Team
        </div>

        <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Resellers
        </div>

        <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Playlists
        </div>

        <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-base tracking-[0] leading-[normal] whitespace-nowrap">
          FAQ
        </div>

        <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Contact Us
        </div>
      </div>
    </div>
  );
};
