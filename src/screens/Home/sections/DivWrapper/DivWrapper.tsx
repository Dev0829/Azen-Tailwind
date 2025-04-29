import React from "react";

export const DivWrapper = (): JSX.Element => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
        <div className="bg-[#151517] rounded-[20px] cursor-pointer p-8 flex flex-col items-center justify-center md:h-[235px] h-[185px] hover:bg-[#1e1e20] transition-all duration-300 hover:scale-105 group">
          <img
            className="w-24 h-24 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            alt="Windows"
            src="/src/assets/windows-icon.svg"
          />
          <div className="[font-family:'Maven_Pro',Helvetica] font-medium text-[#e56db1] text-lg md:text-xl group-hover:text-white transition-colors duration-300">
            on Windows
          </div>
        </div>

        <div className="bg-[#151517] rounded-[20px] cursor-pointer p-8 flex flex-col items-center justify-center md:h-[235px] h-[185px] hover:bg-[#1e1e20] transition-all duration-300 hover:scale-105 group">
          <div className="w-24 h-24 mb-4 flex items-center justify-center">
            <img
              className="w-20 h-24 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
              alt="Android TV"
              src="/src/assets/windows.svg"
            />
          </div>
          <div className="[font-family:'Maven_Pro',Helvetica] font-medium text-[#e56db1] text-lg md:text-xl group-hover:text-white transition-colors duration-300">
            on Android TV
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-8 bg-[#151517] rounded-[20px] p-8 relative overflow-hidden hover:bg-[#1e1e20] transition-all duration-300 group min-h-[185px]">
        <div className="absolute inset-0 bg-[url(/src/assets/background-image.png)] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
        <div className="relative hover-scale z-10 flex items-center justify-center h-full">
          <img
            className="w-[74px] h-[54px] md:w-40 md:h-32 cursor-pointer transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:brightness-125"
            alt="Android"
            src="/src/assets/android.svg"
          />
        </div>
      </div>
    </div>
  );
};
