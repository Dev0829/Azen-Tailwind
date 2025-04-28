import React from "react";

export const FrameWrapper = (): JSX.Element => {
  return (
    <div className="flex flex-wrap w-[1280px] items-start gap-[20px_20px] absolute top-10 left-0">
      <div className="flex flex-col w-[630px] h-[395px] items-start gap-2.5 p-[30px] relative bg-[#151517] rounded-[20px]">
        <div className="flex flex-col h-[335px] items-start gap-10 relative self-stretch w-full">
          <img
            className="relative w-[568px] h-[190px]"
            alt="Frame"
            src="/src/assets/feature-card-1.png"
          />

          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                0.1
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                Flexible settings
              </div>
            </div>

            <p className="relative self-stretch [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-lg tracking-[0] leading-[normal]">
              EPG, parental control, change of players, the leading IPTV player
              offering high quality and multiple platforms.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[630px] h-[395px] items-start gap-2.5 p-[30px] relative rounded-[20px] border border-solid border-[#353535]">
        <div className="flex flex-col h-[321px] items-start gap-10 relative self-stretch w-full">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                0.2
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                Stable streaming
              </div>
            </div>

            <p className="relative self-stretch [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-lg tracking-[0] leading-[normal]">
              No freezes or buffering, the leading IPTV player offering high
              quality and multiple platforms.
            </p>
          </div>

          <img
            className="relative w-[568px] h-[190px] mb-[-6.00px]"
            alt="Frame"
            src="/src/assets/feature-card-2.png"
          />
        </div>
      </div>

      <div className="flex flex-col w-[630px] h-[395px] items-start gap-2.5 p-[30px] relative bg-[#151517] rounded-[20px]">
        <div className="flex flex-col h-[321px] items-start gap-10 relative self-stretch w-full">
          <img
            className="relative w-[568px] h-[190px]"
            alt="Frame"
            src="/src/assets/feature-card-3.png"
          />

          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto] mb-[-6.00px]">
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                0.3
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                Compatibility
              </div>
            </div>

            <p className="relative self-stretch [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-lg tracking-[0] leading-[normal]">
              TVs, smartphones, tablets, the leading IPTV player offering high
              quality and multiple platforms.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[630px] h-[395px] items-start gap-2.5 p-[30px] relative bg-[#151517] rounded-[20px]">
        <div className="flex flex-col h-[321px] items-start gap-10 relative self-stretch w-full">
          <img
            className="relative w-[568px] h-[190px]"
            alt="Frame"
            src="/src/assets/feature-card-4.png"
          />

          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto] mb-[-6.00px]">
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                0.4
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                Supports various formats
              </div>
            </div>

            <p className="relative self-stretch [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-lg tracking-[0] leading-[normal]">
              M3U, Xtream Codes API, the leading IPTV player offering high
              quality and multiple platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
