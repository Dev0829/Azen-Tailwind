import React from "react";

export const FrameWrapper = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full [font-family:'Maven_Pro',Helvetica]">
      {/* Card 1 */}
      <div className="flex flex-col gap-8 p-8 bg-[#151517] rounded-[20px]">
        <img
          className="w-full h-48 object-cover rounded-lg"
          alt="Flexible Settings"
          src="/src/assets/feature-card-1.png"
        />

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 md:gap-5">
            <span className="text-[#e56db1] text-2xl md:text-3xl">0.1</span>
            <h3 className="text-white text-2xl md:text-3xl">Flexible settings</h3>
          </div>

          <p className="text-[#989898] text-base md:text-lg">
            EPG, parental control, change of players, the leading IPTV player
            offering high quality and multiple platforms.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col gap-8 p-8 rounded-[20px] border border-solid border-[#353535]">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 md:gap-5">
            <span className="text-[#e56db1] text-2xl md:text-3xl">0.2</span>
            <h3 className="text-white text-2xl md:text-3xl">Stable streaming</h3>
          </div>

          <p className="text-[#989898] text-base md:text-lg">
            No freezes or buffering, the leading IPTV player offering high
            quality and multiple platforms.
          </p>
        </div>

        <img
          className="w-full h-48 object-cover rounded-lg"
          alt="Stable Streaming"
          src="/src/assets/feature-card-2.png"
        />
      </div>

      {/* Card 3 */}
      <div className="flex flex-col gap-8 p-8 bg-[#151517] rounded-[20px]">
        <img
          className="w-full h-48 object-cover rounded-lg"
          alt="Compatibility"
          src="/src/assets/feature-card-3.png"
        />

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 md:gap-5">
            <span className="text-[#e56db1] text-2xl md:text-3xl">0.3</span>
            <h3 className="text-white text-2xl md:text-3xl">Compatibility</h3>
          </div>

          <p className="text-[#989898] text-base md:text-lg">
            TVs, smartphones, tablets, the leading IPTV player offering high
            quality and multiple platforms.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col gap-8 p-8 bg-[#151517] rounded-[20px]">
        <img
          className="w-full h-48 object-cover rounded-lg"
          alt="Format Support"
          src="/src/assets/feature-card-4.png"
        />

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 md:gap-5">
            <span className="text-[#e56db1] text-2xl md:text-3xl">0.4</span>
            <h3 className="text-white text-2xl md:text-3xl">Supports various formats</h3>
          </div>

          <p className="text-[#989898] text-base md:text-lg">
            M3U, Xtream Codes API, the leading IPTV player offering high
            quality and multiple platforms.
          </p>
        </div>
      </div>
    </div>
  );
};
