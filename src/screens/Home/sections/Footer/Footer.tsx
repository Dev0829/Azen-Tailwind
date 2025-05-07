import React from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="lg:h-[299px] bg-[#151517] px-4 sm:px-20 py-10 lg:py-0">
      <div className="container mx-auto max-w-[1280px] h-full">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-center h-full">
              <div className="flex items-start">
                <a href="/" className="block">
                  <img
                    className="w-[126px] h-[97px]"
                    alt="Clip path group"
                    src="/src/assets/footer-logo.png"
                  />
                </a>
              </div>
            </div>
          </div>
        
          <div className="col-span-12 lg:col-span-9">
            <div className="flex-1 flex flex-col gap-[30px] pt-10">
              <div className="flex flex-col md:flex-row gap-[30px] md:gap-[120px]">
                <div className="flex flex-col gap-5">
                  <h3 className="[font-family:'Maven_Pro',Helvetica] font-normal text-white text-lg md:text-3xl">Locations</h3>
                  <p className="[font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-sm md:text-base">
                    2517-2501 Sweetbriar Ct, <br className="hidden md:block"/>
                    Edmond, OK 73034, USA
                  </p>
                </div>

                <div className="flex justify-between gap-[30px] md:gap-[120px]">
                  <div className="flex flex-col gap-5">
                    <h3 className="[font-family:'Maven_Pro',Helvetica] font-normal text-white text-lg md:text-3xl">Support</h3>
                    <div className="flex flex-col gap-5">
                      <a href="/faq" className="[font-family:'Maven_Pro',Helvetica] font-normal hover:text-[#e56db1] transition-colors text-[#989898] text-sm md:text-base">FAQ</a>
                      <a href="/contact" className="[font-family:'Maven_Pro',Helvetica] font-normal hover:text-[#e56db1] transition-colors text-[#989898] text-sm md:text-base">Contact Us</a>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[16px] md:gap-[51px]">
                    <h3 className="[font-family:'Maven_Pro',Helvetica] font-normal text-white text-lg md:text-3xl">Follow</h3>
                    <div className="flex items-center gap-[16px] md:gap-[50px]">
                      <a href="#">
                        <img className="w-6 h-6" alt="LinkedIn" src="/src/assets/linkedin.svg"/>
                      </a>
                      <a href="#">
                        <img className="w-6 h-6" alt="Facebook" src="/src/assets/facebook.svg"/>
                      </a>
                      <a href="#">
                        <img className="w-6 h-6" alt="Twitter" src="/src/assets/twitter.svg"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="w-full h-px object-cover"
                alt="Line"
                src="/src/assets/divider-line.svg"
              />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <p className="[font-family:'Maven_Pro',Helvetica] font-normal text-[#989898] text-sm md:text-base mb-3 md:mb-0">
                  2025 - Azen IPTV Streaming LLC. All rights reserved.
                </p>

                <div className="flex flex-col md:flex-row md:gap-8">
                  <a href="#" className="[font-family:'Maven_Pro',Helvetica] font-normal hover:text-[#e56db1] transition-colors text-[#989898] text-sm md:text-base mb-3 md:mb-0">
                    Terms and Condition
                  </a>
                  <a href="#" className="[font-family:'Maven_Pro',Helvetica] font-normal hover:text-[#e56db1] transition-colors text-[#989898] text-sm md:text-base">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
