import React from "react";
import { Header } from "../Home/sections/Header";
import { Footer } from "../Home/sections/Footer";

export const Playlists = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="bg-neutral-950 flex flex-col items-center w-full h-full md:h-[975px] pt-[105px] overflow-hidden">
        <section className="grid grid-cols-12 w-full h-[100vh] relative">
          <div className="col-span-12 md:col-span-4 drop-shadow w-full h-full absolute md:relative">
            <img
              className="w-full h-full absolute md:relative object-cover md:max-h-[870px]"
              alt="Background playlists"
              src="/src/assets/bg_playlists.png"
            />
          </div>
          <div className="col-span-12 md:col-span-8 h-full flex items-center">
            <div className="w-full h-full relative px-4 sm:px-20 py-16 flex flex-col justify-center gap-20">
              <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col gap-8">
                <p className="[font-family:'Maven_Pro',Helvetica] text-white text-[24px] md:text-[40px]">Login to add your playlist</p>

                <div className="flex flex-col relative z-10 gap-5 [font-family:'Maven_Pro',Helvetica]">
                  <div className="w-[100%] h-[100px] md:h-[130px] bg-[#151517] flex items-center rounded-[20px] p-8">
                    <div className="flex flex-col gap-5">
                      <h3 className="text-white text-[16px] md:text-[20px] font-normal">Mac Address<span className="text-[#E56DB1] text-[16px] font-normal">*</span></h3>
                      <input type="text" className="custom_input w-full bg-transparent text-white text-[16px] font-normal placeholder:text-[#989898] rounded-[10px] p-2" placeholder="__" />
                    </div>
                  </div>

                  <div className="w-[100%] h-[100px] md:h-[130px] bg-[#151517] flex items-center rounded-[20px] p-8">
                    <div className="flex flex-col gap-5">
                      <h3 className="text-white text-[16px] md:text-[20px] font-normal">Device Key<span className="text-[#E56DB1] text-[16px] font-normal">*</span></h3>
                      <input type="text" className="custom_input w-full bg-transparent text-white text-[16px] font-normal placeholder:text-[#989898] rounded-[10px] p-2" placeholder="__" />
                    </div>
                  </div>
                </div>
              </div>

              <button 
                className="group flex w-full sm:w-[230px] h-[60px] items-center justify-center gap-[52px] bg-neutral-950 rounded-[10px] border-[0.5px] border-solid border-[#ffc72c] hover:bg-[#ffc72c] cursor-pointer transition-all duration-300"
                aria-label="Download now"
              >
                <span className="font-maven-pro font-semibold text-[#ffc72c] text-[18px] md:text-xl whitespace-nowrap group-hover:text-black transition-colors">Login</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}; 