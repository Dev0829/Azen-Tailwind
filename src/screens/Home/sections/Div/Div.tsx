import React from "react";

export const Div = (): JSX.Element => {
  return (
    <div className="absolute w-[1440px] h-[299px] top-[6290px] left-0 bg-[#151517]">
      <div className="absolute w-[126px] h-[97px] top-[101px] left-20">
        <div className="relative h-[97px]">
          <img
            className="absolute w-[126px] h-[97px] top-0 left-0"
            alt="Clip path group"
            src="/src/assets/footer-logo.png"
          />
        </div>
      </div>

      <div className="flex flex-col w-[901px] items-start gap-[30px] absolute top-10 left-[459px]">
        <div className="inline-flex items-start gap-[120px] relative flex-[0_0_auto]">
          <div className="flex flex-col w-48 items-start gap-5 relative">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal]">
              Locations
            </div>

            <p className="relative self-stretch [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-base tracking-[0] leading-[normal]">
              2517-2501 Sweetbriar Ct, <br />
              Edmond, OK 73034, USA
            </p>
          </div>

          <div className="flex flex-col w-[108px] items-start gap-5 relative">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal]">
              Support
            </div>

            <div className="relative self-stretch [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-base tracking-[0] leading-[normal]">
              FAQ
            </div>

            <div className="relative self-stretch [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-base tracking-[0] leading-[normal]">
              Contact Us
            </div>
          </div>

          <div className="flex flex-col w-[161px] items-start gap-[51px] relative">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal]">
              Follow
            </div>

            <div className="flex items-center gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-6 h-6"
                alt="Element"
                src="/src/assets/linkedin.svg"
              />

              <img
                className="relative w-6 h-6"
                alt="Element"
                src="/src/assets/facebook.svg"
              />

              <img
                className="relative w-6 h-6"
                alt="Element"
                src="/src/assets/twitter.svg"
              />
            </div>
          </div>
        </div>

        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src="/src/assets/divider-line.svg"
        />

        <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-base tracking-[0] leading-[normal] whitespace-nowrap">
            2025 - Azen IPTV Streaming LLC. All rights reserved.
          </p>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Terms and Condition
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};
