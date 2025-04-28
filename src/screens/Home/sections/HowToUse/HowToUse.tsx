import React from "react";
export const HowToUse = (): JSX.Element => {
  return (
    <div className="inline-flex items-center gap-[50px] absolute top-[1210px] left-20">
      <div className="flex flex-col w-[393px] h-[456px] items-start gap-2.5 px-0 py-[30px] relative bg-[#151517] rounded-[20px] border border-solid border-[#353535]">
        <div className="flex flex-col h-[230px] items-center gap-2.5 relative self-stretch w-full rounded-[20px]">
          <div className="flex flex-col w-[341px] items-start gap-5 relative flex-[0_0_auto]">
            <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                0.1
              </div>
            </div>
          </div>

          <img
            className="relative w-[153.75px] h-[153.75px]"
            alt="Vector"
            src="/src/assets/hero-illustration.png"
          />
        </div>

        <div className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-3xl text-center tracking-[0] leading-[normal]">
            Register for free
          </div>

          <p className="relative w-[313px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-lg text-center tracking-[0] leading-[normal]">
            Stream effortlessly with XCIPTV Player Live Stream, the leading IPTV
            player offering high quality and multiple platforms.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[393px] h-[456px] items-start gap-2.5 px-0 py-[30px] relative bg-[#151517] rounded-[20px] border border-solid border-[#353535]">
        <div className="flex flex-col h-[230px] items-center gap-2.5 relative self-stretch w-full rounded-[20px]">
          <div className="flex flex-col w-[341px] items-start gap-5 relative flex-[0_0_auto]">
            <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                0.2
              </div>
            </div>
          </div>

          <img
            className="relative w-[176.25px] h-[131.25px]"
            alt="Vector"
            src="/src/assets/feature-icon.png"
          />
        </div>

        <div className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-3xl text-center tracking-[0] leading-[normal]">
            Add your playlists
          </div>

          <p className="relative w-[313px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-lg text-center tracking-[0] leading-[normal]">
            Stream effortlessly with XCIPTV Player Live Stream, the leading IPTV
            player offering high quality and multiple platforms.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[393px] h-[456px] items-start gap-2.5 px-0 py-[30px] relative bg-[#151517] rounded-[20px] border border-solid border-[#353535]">
        <div className="flex flex-col h-[230px] items-center gap-2.5 relative self-stretch w-full rounded-[20px]">
          <div className="flex flex-col w-[341px] items-start gap-5 relative flex-[0_0_auto]">
            <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                0.3
              </div>
            </div>
          </div>

          <img
            className="relative w-[147px] h-[147px]"
            alt="Vector"
            src="/src/assets/camera-icon.png"
          />
        </div>

        <div className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-3xl text-center tracking-[0] leading-[normal]">
            Activate your device
          </div>

          <p className="relative w-[313px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-lg text-center tracking-[0] leading-[normal]">
            Stream effortlessly with XCIPTV Player Live Stream, the leading IPTV
            player offering high quality and multiple platforms.
          </p>
        </div>
      </div>
    </div>
  );
};
