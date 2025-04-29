import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Basic = (): JSX.Element => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="container mx-auto [font-family:'Maven_Pro',Helvetica] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        <SwiperSlide>
          <div className="grid grid-cols-12 items-center lg:gap-10 p-4 md:p-8 bg-[#151517] rounded-[20px]">
            <div className="col-span-12 lg:col-span-7">
              <img
                className="w-full h-auto"
                alt="Basic Plan"
                src="/src/assets/hero-image-1.png"
              />
            </div>

            <div className="col-span-12 lg:col-span-5 flex flex-col gap-8 h-full md:py-10">
              <div className="flex flex-col gap-5">
                <h3 className="[font-family:'Maven_Pro',Helvetica] font-normal text-white text-3xl md:text-4xl">
                  Basic
                </h3>

                <p className="text-[#989898] text-base md:text-lg">
                  Stream effortlessly with XCIPTV Player Live Stream, the leading
                  IPTV player offering high quality and multiple platforms. <br />
                  <br />
                  Stream effortlessly with XCIPTV Player Live Stream, the leading
                  IPTV player offering high quality and multiple platforms.
                </p>

                <div className="w-full h-px bg-[#353535]" />

                <div className="flex items-center justify-between">
                  <span className="[font-family:'Maven_Pro',Helvetica] font-normal text-white text-lg md:text-xl">
                    Tariff
                  </span>
                  <div className="[font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-lg md:text-xl">
                    <span>price</span>
                    <span className="font-medium"> $18,380/mth</span>
                  </div>
                </div>
              </div>

              <button 
                className="group flex items-center w-full sm:w-[230px] h-[60px] justify-center cursor-pointer px-8 py-4 bg-[#ffc72c] rounded-[10px] hover:bg-transparent hover:border hover:border-[#ffc72c] transition-colors duration-300"
                aria-label="Download now"
              >
                <span className="group-hover:text-[#ffc72c] text-neutral-950 font-semibold text-xl">
                  Download now
                </span>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid grid-cols-12 items-center lg:gap-10 p-4 md:p-8 bg-[#151517] rounded-[20px]">
            <div className="col-span-12 lg:col-span-7">
              <img
                className="w-full h-auto"
                alt="Premium Plan"
                src="/src/assets/hero-image-2.png"
              />
            </div>

            <div className="col-span-12 lg:col-span-5 flex flex-col gap-8 h-full md:py-10">
              <div className="flex flex-col gap-5">
                <h3 className="[font-family:'Maven_Pro',Helvetica] font-normal text-white text-3xl md:text-4xl">
                  Maximum
                </h3>

                <p className="text-[#989898] text-base md:text-lg">
                  Stream effortlessly with XCIPTV Player Live Stream, the leading IPTV player offering high quality and multiple platforms. <br />
                  <br />
                  Stream effortlessly with XCIPTV Player Live Stream, the leading IPTV player offering high quality and multiple platforms.
                </p>

                <div className="flex flex-col [font-family:'Maven_Pro',Helvetica] gap-2">
                  <p className="text-white text-lg">Bonuses</p>
                  <div className="flex md:flex-row flex-col justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[#e56db1] text-base">0.1</span>
                      <span className="text-white text-base">7 devices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#e56db1] text-base">0.2</span>
                      <span className="text-white text-base">+15% faster</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#e56db1] text-base">0.3</span>
                      <span className="text-white text-base">60 channels</span>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-[#353535]" />

                <div className="flex items-center justify-between">
                  <span className="[font-family:'Maven_Pro',Helvetica] font-normal text-white text-lg md:text-xl">
                    Tariff
                  </span>
                  <div className="[font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-lg md:text-xl">
                    <span>price</span>
                    <span className="font-medium"> $48.30/mth</span>
                  </div>
                </div>
              </div>

              <button 
                className="group flex items-center w-full sm:w-[230px] h-[60px] justify-center cursor-pointer px-8 py-4 bg-[#ffc72c] rounded-[10px] hover:bg-transparent hover:border hover:border-[#ffc72c] transition-colors duration-300"
                aria-label="Download now"
              >
                <span className="group-hover:text-[#ffc72c] text-neutral-950 font-semibold text-xl">
                  Download now
                </span>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid grid-cols-12 items-center lg:gap-10 p-4 md:p-8 bg-[#151517] rounded-[20px]">
            <div className="col-span-12 lg:col-span-7">
              <img
                className="w-full h-auto"
                alt="Premium Plan"
                src="/src/assets/hero-image-3.png"
              />
            </div>

            <div className="col-span-12 lg:col-span-5 flex flex-col gap-8 h-full md:py-10">
              <div className="flex flex-col gap-5">
                <h3 className="[font-family:'Maven_Pro',Helvetica] font-normal text-white text-3xl md:text-4xl">
                  Premium
                </h3>

                <p className="text-[#989898] text-base md:text-lg">
                  Stream effortlessly with XCIPTV Player Live Stream, the leading IPTV player offering high quality and multiple platforms. <br />
                  <br />
                  Stream effortlessly with XCIPTV Player Live Stream, the leading IPTV player offering high quality and multiple platforms.
                </p>

                <div className="flex flex-col [font-family:'Maven_Pro',Helvetica] gap-2">
                  <p className="text-white text-lg">Bonuses</p>
                  <div className="flex md:flex-row flex-col justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[#e56db1] text-base">0.1</span>
                      <span className="text-white text-base">5 devices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#e56db1] text-base">0.2</span>
                      <span className="text-white text-base">+15% faster</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#e56db1] text-base">0.3</span>
                      <span className="text-white text-base">40 channels</span>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-[#353535]" />

                <div className="flex items-center justify-between">
                  <span className="[font-family:'Maven_Pro',Helvetica] font-normal text-white text-lg md:text-xl">
                    Tariff
                  </span>
                  <div className="[font-family:'Maven_Pro',Helvetica] font-normal text-[#e56db1] text-lg md:text-xl">
                    <span>price</span>
                    <span className="font-medium"> $28.30/mth</span>
                  </div>
                </div>
              </div>

              <button 
                className="group flex items-center w-full sm:w-[230px] h-[60px] justify-center cursor-pointer px-8 py-4 bg-[#ffc72c] rounded-[10px] hover:bg-transparent hover:border hover:border-[#ffc72c] transition-colors duration-300"
                aria-label="Download now"
              >
                <span className="group-hover:text-[#ffc72c] text-neutral-950 font-semibold text-xl">
                  Download now
                </span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
      <button 
        onClick={() => swiperRef.current?.slideNext()}
        className="btn_swiper absolute hidden md:block bg-transparent border-none top-[45%] right-[0] lg:right-[0] w-[67px] h-[67px] transform -translate-y-1/2 z-10"
      >
        <img
          className="w-full h-full hover-scale cursor-pointer"
          alt="Next"
          src="/src/assets/header-frame.svg"
        />
      </button>
    </div>
  );
};