import React from "react";
import { AzenIptvStreaming } from "./sections/AzenIptvStreaming";
import { Basic } from "./sections/Basic";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { Hed } from "./sections/Hed";
import { HowToUse } from "./sections/HowToUse";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-neutral-950 flex flex-row justify-center w-full">
      <div className="bg-neutral-950 overflow-hidden w-[1440px] h-[6589px] relative">
        <div className="absolute w-[1444px] h-[850px] top-[2935px] left-[-181px]">
          <div className="absolute w-[885px] h-[795px] top-[55px] left-0">
            <div className="relative w-[767px] h-[1010px] -top-24 left-[181px] bg-[url(https://c.animaapp.com/1RqcQWfO/img/vector-2.svg)] bg-[100%_100%]">
              <div className="relative w-[266px] h-[189px] top-[519px] left-[438px] bg-[#ffc72c] rounded-[133px/94.5px] blur-[100px]" />
            </div>
          </div>

          <Basic />
          <div className="flex w-[185px] h-[60px] items-center justify-around gap-[52px] absolute top-[780px] left-[261px] bg-neutral-950 rounded-[10px] border border-solid border-[#e56db1]">
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Why Us?
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[1440px] h-[918px] top-0 left-0">
          <img
            className="absolute w-[1440px] h-[823px] top-[95px] left-0 object-cover"
            alt="Photo"
            src="https://c.animaapp.com/1RqcQWfO/img/photo-1.png"
          />

          <AzenIptvStreaming />
          <Hed />
        </div>

        <Frame />
        <HowToUse />
        <div className="absolute w-[1280px] h-[850px] top-[1806px] left-20">
          <FrameWrapper />
          <div className="flex w-[185px] h-[60px] items-center justify-around gap-[52px] absolute top-0 left-[1010px] bg-neutral-950 rounded-[10px] border border-solid border-[#e56db1]">
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                All Features
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[161px] h-[59px] top-[2795px] left-20">
          <div className="absolute top-0 left-0 [font-family:'Maven_Pro',Helvetica] font-medium text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
            Pricing
          </div>

          <div className="absolute top-0 left-0 [font-family:'Maven_Pro',Helvetica] font-medium text-white text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
            Pricing
          </div>
        </div>

        <img
          className="absolute w-[67px] h-[67px] top-[3202px] left-[1293px]"
          alt="Frame"
          src="https://c.animaapp.com/1RqcQWfO/img/frame-427321506.svg"
        />

        <p className="absolute top-[3804px] left-20 [font-family:'Maven_Pro',Helvetica] font-medium text-white text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
          Why Choose Azen IPTV Streaming LLC?
        </p>

        <div className="absolute w-[306px] h-[284px] top-[3982px] left-[732px] bg-[url(https://c.animaapp.com/1RqcQWfO/img/vector-1-1.svg)] bg-[100%_100%]">
          <div className="flex flex-col w-[266px] items-start gap-10 absolute top-5 left-5">
            <div className="flex flex-col w-[30px] items-start justify-end gap-5 relative flex-[0_0_auto]">
              <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  0.3
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[normal]">
                  24/7
                  <br />
                  Support
                </div>
              </div>

              <p className="relative self-stretch [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-lg tracking-[0] leading-[normal]">
                Enjoy round-the-clock assistance with our dedicated support
                team, available anytime to help with your needs
              </p>
            </div>
          </div>

          <img
            className="absolute w-[60px] h-[60px] top-0 left-[246px]"
            alt="Frame"
            src="https://c.animaapp.com/1RqcQWfO/img/frame-427321530.svg"
          />
        </div>

        <p className="absolute w-[630px] top-[3883px] left-[732px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-xl tracking-[0] leading-[normal]">
          Experience seamless streaming with unmatched performance, device
          compatibility, and 24/7 support - all at an affordable price
        </p>

        <div className="flex flex-col w-[306px] h-[261px] items-start gap-10 p-5 absolute top-[4284px] left-20 bg-[#151517] rounded-[20px]">
          <div className="flex flex-col w-[30px] items-start justify-end gap-5 relative flex-[0_0_auto]">
            <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                0.4
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
                Simple UI
              </div>
            </div>

            <p className="relative w-[265px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-lg tracking-[0] leading-[normal]">
              Navigate effortlessly with our user-friendly interface designed
              for a smooth and intuitive experience
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[306px] h-[261px] items-start gap-10 p-5 absolute top-[4284px] left-[406px] bg-[#151517] rounded-[20px]">
          <div className="flex flex-col w-[30px] items-start justify-end gap-5 relative flex-[0_0_auto]">
            <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                0.5
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
                Multilingual
              </div>
            </div>

            <p className="relative w-[265px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-lg tracking-[0] leading-[normal]">
              Access content in your preferred language with support for
              multiple languages, making it easy for everyone to enjoy
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[306px] h-[282px] items-start gap-10 p-5 absolute top-[3982px] left-[406px] bg-[#151517] rounded-[20px]">
          <div className="flex flex-col w-[30px] items-start justify-end gap-5 relative flex-[0_0_auto]">
            <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                0.2
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[normal]">
                Device <br />
                Compatibility
              </div>
            </div>

            <p className="relative w-[257px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-lg tracking-[0] leading-[normal]">
              Stream seamlessly across all your devices, including smartphones,
              tablets, smart TVs, and more
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[305px] h-[418px] items-start gap-[100px] p-5 absolute top-[4127px] left-[1057px] bg-[#151517] rounded-[20px]">
          <div className="flex flex-col w-[30px] items-start justify-end gap-5 relative flex-[0_0_auto]">
            <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                0.6
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                Affordable Pricing
              </div>
            </div>

            <p className="relative w-[265px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-lg tracking-[0] leading-[normal]">
              Get top-tier performance at <br />a lower cost with our <br />
              budget-friendly activation plan, designed to give you more value
              for less
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[306px] h-[145px] items-start gap-10 p-5 absolute top-[3982px] left-20 bg-[#151517] rounded-[20px]">
          <div className="flex flex-col w-[30px] items-start justify-end gap-5 relative flex-[0_0_auto]">
            <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                0.1
              </div>
            </div>
          </div>

          <div className="relative w-fit [font-family:'Maven_Pro',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
            Fast Streaming
          </div>
        </div>

        <div className="flex flex-col w-[509px] items-start gap-5 absolute top-[4885px] left-20">
          <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-medium text-white text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
              Download AIS Player
            </div>
          </div>

          <p className="relative w-[510px] mr-[-1.00px] [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-xl tracking-[0] leading-[normal]">
            Experience seamless streaming with XCIPTV Player Live Stream—your
            ultimate destination for downloading and enjoying high-quality
            videos
          </p>
        </div>

        <div className="absolute w-[777px] h-[1083px] top-[4553px] left-[663px]">
          <img
            className="absolute w-[679px] h-[1083px] top-0 left-[98px]"
            alt="Ellipse"
            src="https://c.animaapp.com/1RqcQWfO/img/ellipse-7.png"
          />

          <img
            className="absolute w-[648px] h-[594px] top-[273px] left-[129px] object-cover"
            alt="Image"
            src="https://c.animaapp.com/1RqcQWfO/img/image-63455617.png"
          />

          <div className="flex w-[254px] h-[254px] items-center justify-center gap-2.5 p-[7px] absolute top-[475px] left-3 rotate-[-5.95deg]">
            <img
              className="relative w-[208.68px] h-[208.68px] rotate-[5.95deg]"
              alt="Frame"
              src="https://c.animaapp.com/1RqcQWfO/img/frame-427321571.png"
            />
          </div>
        </div>

        <div className="flex w-[185px] h-[60px] items-center justify-around gap-[52px] absolute top-[4685px] left-20 bg-neutral-950 rounded-[10px] border border-solid border-[#e56db1]">
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="font-normal text-[#e56db1] relative w-fit mt-[-1.00px] [font-family:'Maven_Pro',Helvetica] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Download App
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[542px] items-start gap-5 absolute top-[5252px] left-20">
          <div className="flex flex-wrap items-start gap-[20px_20px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-[261px] h-[84px] items-center justify-center gap-2.5 relative bg-[#151517] rounded-[20px]">
              <img
                className="relative w-[163.66px] h-[42px]"
                alt="Group"
                src="https://c.animaapp.com/1RqcQWfO/img/group-5@2x.png"
              />
            </div>

            <div className="flex flex-col w-[261px] h-[84px] items-center justify-center gap-2.5 relative bg-[#151517] rounded-[20px]">
              <div className="relative w-[175.6px] h-[42px]">
                <img
                  className="absolute w-[60px] h-2.5 top-0.5 left-11"
                  alt="Vector"
                  src="https://c.animaapp.com/1RqcQWfO/img/vector-4.svg"
                />

                <img
                  className="absolute w-[132px] h-[26px] top-4 left-11"
                  alt="Vector"
                  src="https://c.animaapp.com/1RqcQWfO/img/vector-5.svg"
                />

                <img
                  className="absolute w-9 h-10 top-0 left-0"
                  alt="Group"
                  src="https://c.animaapp.com/1RqcQWfO/img/group@2x.png"
                />
              </div>
            </div>

            <div className="flex flex-col w-[261px] h-[84px] items-center justify-center gap-2.5 relative bg-[#151517] rounded-[20px]">
              <div className="relative w-[198px] h-[42px] overflow-hidden">
                <img
                  className="absolute w-[90px] h-[13px] top-0 left-[45px]"
                  alt="Group"
                  src="https://c.animaapp.com/1RqcQWfO/img/group-1@2x.png"
                />

                <img
                  className="absolute w-[154px] h-[19px] top-[21px] left-11"
                  alt="Vector"
                  src="https://c.animaapp.com/1RqcQWfO/img/vector-6.svg"
                />

                <div className="absolute w-9 h-[42px] top-0 left-0">
                  <div className="h-[42px]">
                    <div className="relative w-9 h-[42px]">
                      <img
                        className="absolute w-4 h-[11px] top-0 left-2"
                        alt="Handles"
                        src="https://c.animaapp.com/1RqcQWfO/img/handles@2x.png"
                      />

                      <img
                        className="absolute w-9 h-[33px] top-2 left-0"
                        alt="Path"
                        src="https://c.animaapp.com/1RqcQWfO/img/path211.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[261px] h-[84px] items-center justify-center gap-2.5 relative bg-[#151517] rounded-[20px]">
              <div className="relative w-[158px] h-[45px]">
                <img
                  className="absolute w-[123px] h-[11px] top-0 left-[5px]"
                  alt="Vector"
                  src="https://c.animaapp.com/1RqcQWfO/img/vector-7.svg"
                />

                <img
                  className="absolute w-[147px] h-[27px] top-[18px] left-[5px]"
                  alt="Group"
                  src="https://c.animaapp.com/1RqcQWfO/img/group-2@2x.png"
                />
              </div>
            </div>
          </div>

          <p className="relative self-stretch [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-xl tracking-[0] leading-[normal]">
            Download the apk file for Android, Fire TV
          </p>
        </div>

        <div className="absolute top-[5619px] left-20 [font-family:'Maven_Pro',Helvetica] font-medium text-white text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
          How to Install App
        </div>

        <DivWrapper />
        <Div />
      </div>
    </div>
  );
};
