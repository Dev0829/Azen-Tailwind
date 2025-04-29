import React from "react";
import { Header } from "./sections/Header";
import { AzenIptvStreaming } from "./sections/AzenIptvStreaming";
import { Basic } from "./sections/Basic";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { HowToUse } from "./sections/HowToUse";
import { Footer } from "./sections/Footer";

export const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="bg-neutral-950 flex flex-col items-center w-full min-h-screen">
        {/* Hero Section */}
        <section className="w-full flex items-center pt-[105px] h-[100vh]">
          <img
            className="w-full h-[calc(100vh-105px)] absolute top-[105px] object-cover"
            alt="Photo"
            src="/src/assets/team-photo.png"
          />
          <div className="px-4 sm:px-20 mx-auto w-full">
            <AzenIptvStreaming />
          </div>
        </section>

        <section className="w-full flex">
          <div className="px-4 sm:px-20 py-[50px] mx-auto w-full">
            <Frame />
            <HowToUse />
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full px-4 sm:px-20 z-10 py-10">
          <div className="relative flex flex-col max-w-[1280px] mx-auto">
            <div className="flex justify-end mb-[-20.00px] mr-[80.00px]">
              <button 
                className="group flex items-center justify-center cursor-pointer h-[50px] md:h-[60px] z-10 px-8 py-4 bg-neutral-950 rounded-[10px] border border-solid border-[#e56db1] hover:bg-[#e56db1] hover:text-neutral-950 transition-colors duration-300"
                aria-label="View all features"
              >
                <span className="[font-family:'Maven_Pro',Helvetica] group-hover:text-white font-normal text-[#e56db1] text-base md:text-xl hover:text-neutral-950">
                  All Features
                </span>
              </button>
            </div>
            
            <FrameWrapper />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative w-full px-4 sm:px-20 py-16">
          <img
            className="absolute top-[-25%] w-[100%] h-[100%] z-[0] left-0 md:hidden"
            alt="Avatar placeholder"
            src="/src/assets/effect_pricing_mobile.png"
          />
          <img
            className="absolute top-[15%] w-[80%] lg:w-[55%] z-[0] left-0 hidden md:block"
            alt="Avatar placeholder"
            src="/src/assets/effect_pricing.png"
          />
          <div className="max-w-[1280px] mx-auto z-[40] relative">
            <div className="py-[40px] md:py-[80px]">
              <h2 className="[font-family:'Maven_Pro',Helvetica] font-medium text-white text-[30px] md:text-[50px]">Pricing</h2>
            </div>
            <div className="flex items-center gap-10">
              <Basic />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full z-10 px-4 sm:px-20 py-8 md:py-16">
          <div className="max-w-[1280px] mx-auto [font-family:'Maven_Pro',Helvetica]">
            <div className="flex flex-col gap-8">
              <div className="flex md:pt-10">
                <button 
                  className="group w-[185px] h-[50px] md:h-[60px] z-[10] flex items-center justify-center cursor-pointer px-8 py-4 bg-neutral-950 rounded-[10px] border border-solid border-[#e56db1] hover:bg-[#e56db1] hover:text-neutral-950 transition-colors duration-300"
                  aria-label="Why choose us"
                >
                  <span className="[font-family:'Maven_Pro',Helvetica] group-hover:text-white font-normal text-[#e56db1] text-base md:text-xl hover:text-neutral-950">Why Us?</span>
                </button>
              </div>

              <h2 className="font-medium text-white text-3xl md:leading-[50px] md:text-[50px]">
                Why Choose Azen IPTV Streaming LLC?
              </h2>
              
              <div className="grid grid-cols-12 items-end justify-end flex-col gap-5">
                <div className="col-span-2 md:col-span-6"></div>
                <div className="col-span-10 md:col-span-6">
                  <p className="max-w-[630px] font-normal text-[#989898] text-xl">
                    Experience seamless streaming with unmatched performance, device
                    compatibility, and 24/7 support - all at an affordable price
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 mt-8">
                <div className="col-span-12 xl:col-span-6">
                  <div className="grid grid-cols-12 gap-8 xl:gap-4">
                    <div className="col-span-12 md:col-span-6 bg-[#151517] rounded-[20px] p-5 h-[145px]">
                      <div className="flex flex-col gap-10">
                        <span className="text-[#e56db1] text-base">0.1</span>
                        <h3 className="text-white text-[24px] sm:text-[28px] font-normal">Fast Streaming</h3>
                      </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 bg-[#151517] rounded-[20px] p-5 ml-[10%] sm:ml-[0]">
                      <div className="flex flex-col gap-10">
                        <span className="text-[#e56db1] text-sm sm:text-base">0.2</span>
                        <div className="flex flex-col gap-5">
                          <h3 className="text-white text-[24px] sm:text-[28px] font-normal">
                            Device<br className="hidden sm:block" /> Compatibility
                          </h3>
                          <p className="text-[#989898] text-base md:text-lg md:leading-tight">
                            Stream seamlessly across all your devices, including smartphones,
                            tablets, smart TVs, and more
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12 xl:col-span-6 xl:hidden h-full mr-[10%] sm:mr-[30%] md:mr-[50%]">
                      <div className="relative p-5">
                        <img
                          className="absolute w-full h-full top-0 left-0"
                          alt="Frame"
                          src="/src/assets/bg-comment.png"
                        />
                        <div className="flex flex-col relative z-10 gap-10">
                          <span className="text-[#e56db1] text-sm sm:text-base">0.3</span>
                          <div className="flex flex-col gap-5">
                            <h3 className="text-white text-[24px] sm:text-[28px] font-normal">
                              24/7<br /> Support
                            </h3>
                            <p className="text-[#989898] text-base md:text-lg md:leading-tight">
                              Enjoy round-the-clock assistance with our dedicated support
                              team, available anytime to help with your needs
                            </p>
                          </div>
                        </div>
                        <img
                          className="absolute w-[60px] h-[60px] top-0 right-5"
                          alt="Frame"
                          src="/src/assets/footer-frame.svg"
                        />
                      </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 bg-[#151517] rounded-[20px] p-5 ml-[10%] sm:ml-[0]">
                      <div className="flex flex-col gap-10">
                        <span className="text-[#e56db1] text-sm sm:text-base">0.4</span>
                        <div className="flex flex-col gap-5">
                          <h3 className="text-white text-[24px] sm:text-[28px] font-normal">Simple UI</h3>
                          <p className="text-[#989898] text-base md:text-lg md:leading-tight">
                            Navigate effortlessly with our user-friendly interface designed
                            for a smooth and intuitive experience
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 bg-[#151517] rounded-[20px] p-5 ml-[10%] sm:ml-[0]">
                      <div className="flex flex-col gap-10">
                        <span className="text-[#e56db1] text-sm sm:text-base">0.5</span>
                        <div className="flex flex-col gap-5">
                          <h3 className="text-white text-[24px] sm:text-[28px] font-normal">Multilingual</h3>
                          <p className="text-[#989898] text-base md:text-lg md:leading-tight">
                            Access content in your preferred language with support for
                            multiple languages, making it easy for everyone to enjoy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 xl:col-span-6">
                  <div className="grid grid-cols-12 gap-4 h-full">
                    <div className="col-span-12 xl:col-span-6 hidden xl:block h-full">
                      <div className="relative p-5">
                        <img
                          className="absolute w-full h-full top-0 left-0"
                          alt="Frame"
                          src="/src/assets/bg-comment.svg"
                        />
                        <div className="flex flex-col relative z-10 gap-10">
                          <span className="text-[#e56db1] text-sm sm:text-base">0.3</span>
                          <div className="flex flex-col gap-5">
                            <h3 className="text-white text-[24px] sm:text-[28px] font-normal">
                              24/7<br />Support
                            </h3>
                            <p className="text-[#989898] text-base md:text-lg md:leading-tight">
                              Enjoy round-the-clock assistance with our dedicated support
                              team, available anytime to help with your needs
                            </p>
                          </div>
                        </div>
                        <img
                          className="absolute w-[60px] h-[60px] top-0 right-5"
                          alt="Frame"
                          src="/src/assets/footer-frame.svg"
                        />
                      </div>
                    </div>
                    <div className="col-span-12 xl:col-span-6 h-full flex items-end">
                      <div className="bg-[#151517] xl:h-[75%] relative flex items-center rounded-[20px] p-5">
                        <div className="flex flex-col gap-10">
                          <span className="xl:absolute top-0 left-0 xl:p-5 z-10 text-[#e56db1] text-sm sm:text-base">0.6</span>
                          <div className="flex flex-col gap-5">
                            <h3 className="text-white text-[24px] sm:text-[28px] font-normal">Affordable Pricing</h3>
                            <p className="text-[#989898] text-base md:text-lg md:leading-tight">
                              Get top-tier performance at a lower cost with our
                              budget-friendly activation plan, designed to give you more value
                              for less
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="w-full relative px-4 sm:px-20 py-16">
          <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-4 xl:min-h-[800px]">
            <div className="flex-1">
              <div className="md:max-w-[542px] flex flex-col justify-between h-full relative z-[10] min-h-[300px] md:min-h-[600px] pb-16 md:pb-10 xl:pb-0">
                <button 
                  className="group w-[185px] h-[50px] md:h-[60px] flex items-center justify-center cursor-pointer px-2 py-4 bg-neutral-950 rounded-[10px] border border-solid border-[#e56db1] hover:bg-[#e56db1] hover:text-neutral-950 transition-colors duration-300"
                  aria-label="Download AIS Player app"
                >
                  <span className="[font-family:'Maven_Pro',Helvetica] group-hover:text-white font-normal text-[#e56db1] text-base md:text-xl hover:text-neutral-950">
                    Download App
                  </span>
                </button>
                <div className="flex flex-col gap-5">
                  <h2 className="[font-family:'Maven_Pro',Helvetica] font-medium text-white text-[30px] md:text-[50px]">
                    Download AIS Player
                  </h2>
                  <p className="[font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-lg md:text-xl">
                    Experience seamless streaming with XCIPTV Player Live Stream—your
                    ultimate destination for downloading and enjoying high-quality
                    videos
                  </p>
                </div>

                <div className="download_part md:block hidden">
                  <div className="flex flex-wrap items-start gap-5 max-w-[542px]">
                    <div className="flex flex-col w-[261px] h-[84px] items-center justify-center gap-2.5 bg-[#151517] rounded-[20px]">
                      <img
                        className="w-[163.66px] h-[42px]"
                        alt="Group"
                        src="/src/assets/feature-icons-1.png"
                      />
                    </div>
                    <div className="flex flex-col w-[261px] h-[84px] items-center justify-center gap-2.5 bg-[#151517] rounded-[20px]">
                      <img
                        className="w-[163.66px] h-[42px]"
                        alt="Group"
                        src="/src/assets/feature-icons-2.png"
                      />
                    </div>
                    <div className="flex flex-col w-[261px] h-[84px] items-center justify-center gap-2.5 bg-[#151517] rounded-[20px]">
                      <img
                        className="w-[163.66px] h-[42px]"
                        alt="Group"
                        src="/src/assets/feature-icons-3.png"
                      />
                    </div>
                    <div className="flex flex-col w-[261px] h-[84px] items-center justify-center gap-2.5 bg-[#151517] rounded-[20px]">
                      <img
                        className="w-[163.66px] h-[42px]"
                        alt="Group"
                        src="/src/assets/feature-icons-4.png"
                      />
                    </div>
                  </div>
                  <p className="mt-5 [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-xl">Download the apk file for Android, Fire TV</p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute md:top-[-100px] top-[20%] right-0 w-[100%] h-[50%] md:w-[679px] md:h-[1080px]"
            alt="Avatar placeholder"
            src="/src/assets/effect_download.png"
          />
          <div className="xl:absolute relative w-[80%] xl:w-[45%] h-[80%] top-0 right-0 ml-[20%] xl:ml-0">
            <img
              // className="absolute w-full h-full max-w-[648px] max-h-[594px] bottom-[10%] right-0 object-cover"
              className="xl:absolute w-full h-full md:right-0 object-contain relative z-[0] right-[-1rem]"
              alt="Image"
              src="/src/assets/product-showcase.png"
            />
            <div className="absolute flex xl:w-[254px] xl:h-[254px] w-[90px] h-[90px] items-center justify-center gap-2.5 p-[7px] top-[35%] xl:left-[-17%] left-[-10%] rotate-[-5.95deg]">
              <img
                className="md:w-[209px] md:h-[209px] w-[90px] h-[90px]rotate-[5.95deg]"
                alt="Frame"
                src="/src/assets/cta-frame.png"
              />
            </div>
          </div>

          <div className="download_part md:hidden relative z-[10] mt-10">
            <div className="flex flex-wrap items-start gap-5">
              <div className="flex flex-col w-full h-[84px] items-center justify-center gap-2.5 bg-[#151517] rounded-[20px]">
                <img
                  className="w-[163.66px] h-[42px]"
                  alt="Group"
                  src="/src/assets/feature-icons-1.png"
                />
              </div>
              <div className="flex flex-col w-full h-[84px] items-center justify-center gap-2.5 bg-[#151517] rounded-[20px]">
                <img
                  className="w-[163.66px] h-[42px]"
                  alt="Group"
                  src="/src/assets/feature-icons-2.png"
                />
              </div>
              <div className="flex flex-col w-full h-[84px] items-center justify-center gap-2.5 bg-[#151517] rounded-[20px]">
                <img
                  className="w-[163.66px] h-[42px]"
                  alt="Group"
                  src="/src/assets/feature-icons-3.png"
                />
              </div>
              <div className="flex flex-col w-full h-[84px] items-center justify-center gap-2.5 bg-[#151517] rounded-[20px]">
                <img
                  className="w-[163.66px] h-[42px]"
                  alt="Group"
                  src="/src/assets/feature-icons-4.png"
                />
              </div>
            </div>
            <p className="mt-5 [font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-base md:text-xl">Download the apk file for Android, Fire TV</p>
          </div>
        </section>

        {/* How to Install Section */}
        <section className="w-full px-4 sm:px-20 py-16">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="[font-family:'Maven_Pro',Helvetica] font-medium text-white text-[30px] md:text-[50px] mb-10">
              How to Install App
            </h2>
            <DivWrapper />
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};
