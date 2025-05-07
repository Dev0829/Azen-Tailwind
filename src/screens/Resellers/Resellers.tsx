import React from "react";
import { Header } from "../Home/sections/Header";
import { Footer } from "../Home/sections/Footer";

export const Resellers = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="bg-neutral-950 flex flex-col items-center w-full min-h-screen pt-[105px]">
        <section className="w-full relative px-4 sm:px-20 py-16">
          <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col gap-5">
            <div className="flex flex-col relative z-10 gap-5 text-center">
              <h2 className="[font-family:'Maven_Pro',Helvetica] font-medium text-white text-[30px] md:text-[50px]">
                Resellers
              </h2>
              <p className="[font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-lg md:text-xl">
                Do you want to be a reseller?
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <img
                className="w-[100%] md:w-[80%]"
                alt="Resellers"
                src="/src/assets/resellers.png"
              />
            </div>

            <div className="flex flex-col relative z-10 gap-5 text-center [font-family:'Maven_Pro',Helvetica]">
              <p className="text-white text-left md:text-center text-2xl md:text-3xl">Contact us to discuss the details</p>
              <div className="flex flex-col md:flex-row justify-center items-center h-full gap-5">
                <div className="w-[100%] sm:max-w-[340px] h-[70px] bg-[#151517] flex items-center rounded-[10px] p-5">
                  <div className="flex items-center gap-5">
                    <img
                      className="w-[21.75px] object-contain"
                      alt="Icon email"
                      src="/src/assets/icon_email.png"
                    />
                    <h3 className="text-white text-[20px] font-normal">support@iboplayer.pro</h3>
                  </div>
                </div>
                <div className="w-[100%] sm:max-w-[340px] h-[70px] bg-[#151517] flex items-center rounded-[10px] p-5">
                  <div className="flex items-center gap-5">
                    <img
                      className="w-[21.75px] object-contain"
                      alt="Icon phone"
                      src="/src/assets/icon_phone.png"
                    />
                    <h3 className="text-white text-[20px] font-normal">+55 11 97109-8462</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-0 z-[0] left-0 w-[100%] h-[100%]"
            alt="Effect resellers"
            src="/src/assets/effect_resellers.png"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};