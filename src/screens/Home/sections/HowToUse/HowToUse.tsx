import React from "react";

export const HowToUse = (): JSX.Element => {
  return (
    <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 w-full py-[80px]">
      {/* Card 1 */}
      <div className="flex flex-col items-center gap-8 p-8 [font-family:'Maven_Pro',Helvetica] font-normal bg-[#151517] rounded-[20px] border border-solid border-[#353535]">
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="w-full">
            <span className="text-[#e56db1] text-sm md:text-base">0.1</span>
          </div>
          <img
            className="w-40 h-40 object-contain"
            alt="Register Illustration"
            src="/src/assets/hero-illustration.png"
          />
        </div>

        <div className="flex flex-col items-center gap-5 w-full">
          <h3 className="text-white text-2xl md:text-3xl text-center">
            Register for free
          </h3>
          <p className="text-[#989898] text-base md:text-lg text-center">
            Stream effortlessly with XCIPTV Player Live Stream, the leading IPTV
            player offering high quality and multiple platforms.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center gap-8 p-8 [font-family:'Maven_Pro',Helvetica] font-normal bg-[#151517] rounded-[20px] border border-solid border-[#353535]">
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="w-full">
            <span className="text-[#e56db1] text-sm md:text-base">0.2</span>
          </div>
          <img
            className="w-40 h-40 object-contain"
            alt="Feature Icon"
            src="/src/assets/feature-icon.png"
          />
        </div>

        <div className="flex flex-col items-center gap-5 w-full">
          <h3 className="text-white text-2xl md:text-3xl text-center">
            Add your playlists
          </h3>
          <p className="text-[#989898] text-base md:text-lg text-center">
            Stream effortlessly with XCIPTV Player Live Stream, the leading IPTV
            player offering high quality and multiple platforms.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center gap-8 p-8 [font-family:'Maven_Pro',Helvetica] font-normal bg-[#151517] rounded-[20px] border border-solid border-[#353535]">
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="w-full">
            <span className="text-[#e56db1] text-sm md:text-base">0.3</span>
          </div>
          <img
            className="w-40 h-40 object-contain"
            alt="Camera Icon"
            src="/src/assets/camera-icon.png"
          />
        </div>

        <div className="flex flex-col items-center gap-5 w-full">
          <h3 className="text-white text-2xl md:text-3xl text-center">
            Activate your device
          </h3>
          <p className="text-[#989898] text-base md:text-lg text-center">
            Stream effortlessly with XCIPTV Player Live Stream, the leading IPTV
            player offering high quality and multiple platforms.
          </p>
        </div>
      </div>
    </div>
  );
};
