import React from "react";

export const Basic = (): JSX.Element => {
  return (
    <div className="flex w-[1183px] h-[600px] items-center gap-10 p-[30px] absolute top-0 left-[261px] bg-[#151517] rounded-[20px]">
      <img
        className="relative w-[636px] h-[533px] object-cover"
        alt="Image"
        src="/src/assets/hero-image.png"
      />

      <div className="flex flex-col w-[427px] h-[481px] items-start justify-between relative">
        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal]">
            Basic
          </div>

          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <p className="self-stretch mt-[-1.00px] text-[#989898] text-base text-justify relative [font-family:'Maven_Pro',Helvetica] font-normal tracking-[0] leading-[normal]">
              Stream effortlessly with XCIPTV Player Live Stream, the leading
              IPTV player offering high quality and multiple platforms. <br />
              <br />
              Stream effortlessly with XCIPTV Player Live Stream, the leading
              IPTV player offering high quality and multiple platforms.
            </p>

            <img
              className="relative self-stretch w-full h-px object-cover"
              alt="Line"
              src="/src/assets/separator-line.svg"
            />

            <div className="flex w-[426px] items-center justify-between relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Tariff
              </div>

              <p className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="[font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-xl tracking-[0]">
                  price
                </span>

                <span className="font-medium"> $18,380/mth</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-[230px] h-[60px] items-center justify-around gap-[52px] relative bg-[#ffc72c] rounded-[10px]">
          <div className="flex flex-col w-[139px] items-start relative">
            <div className="font-semibold text-neutral-950 relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Download now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};