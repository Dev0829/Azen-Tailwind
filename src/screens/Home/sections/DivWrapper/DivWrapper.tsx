import React from "react";

export const DivWrapper = (): JSX.Element => {
  return (
    <div className="flex w-[1280px] items-center gap-5 absolute top-[5719px] left-20">
      <div className="flex flex-col w-[379px] items-start gap-5 relative">
        <div className="relative w-[381px] h-[235px] mr-[-2.00px]">
          <div className="relative w-[379px] h-[235px] bg-[#151517] rounded-[20px]">
            <img
              className="absolute w-[100px] h-[100px] top-[45px] left-[139px]"
              alt="Windows"
              src="https://c.animaapp.com/1RqcQWfO/img/windows-1-1.svg"
            />

            <div className="absolute top-[155px] left-[137px] [font-family:'Maven_Pro',Helvetica] font-medium text-[#e56db1] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              on Windows
            </div>
          </div>
        </div>

        <div className="relative w-[381px] h-[235px] mr-[-2.00px]">
          <div className="relative w-[379px] h-[235px] bg-[#151517] rounded-[20px]">
            <div className="absolute top-[155px] left-[123px] [font-family:'Maven_Pro',Helvetica] font-medium text-[#e56db1] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              on Android TV
            </div>

            <div className="absolute w-44 h-[100px] top-[45px] left-[101px]">
              <img
                className="absolute w-[85px] h-[100px] top-0 left-[46px]"
                alt="Element"
                src="https://c.animaapp.com/1RqcQWfO/img/-----1.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[881px] h-[490px] items-start gap-2.5 relative bg-[#151517] rounded-[20px]">
        <div className="relative w-[881px] h-[490px]">
          <div className="relative w-[901px] h-[510px] -top-2.5 -left-2.5 bg-[url(https://c.animaapp.com/1RqcQWfO/img/image-63455618.png)] bg-[100%_100%]">
            <img
              className="absolute w-[167px] h-[120px] top-[195px] left-[367px]"
              alt="Element"
              src="https://c.animaapp.com/1RqcQWfO/img/-----1-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
