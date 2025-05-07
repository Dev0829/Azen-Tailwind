import React, { useRef, useState } from "react";
import { Header } from "../Home/sections/Header";
import { Footer } from "../Home/sections/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Team = (): JSX.Element => {
  const swiperRef = useRef<any>(null);

  const [activeSlide, setActiveSlide] = useState({
    name: "David Forwood",
    position: "CEO",
    description: "A visionary leader with extensive experience in the IPTV industry, driving innovation and strategic growth for the company."
  });

  const teamMembers = [
    {
      name: "David Forwood",
      position: "CEO",
      description: "A visionary leader with extensive experience in the IPTV industry, driving innovation and strategic growth for the company."
    },
    {
      name: "Elena Katruk",
      position: "Marketing Specialist",
      description: "A results-oriented marketing expert with a strong background in digital media and brand development, focused on expanding market presence."
    },
    {
      name: "Duan Lei",
      position: "CMO",
      description: "A results-oriented marketing expert with a strong background in digital media and brand development, focused on expanding market presence."
    },
    {
      name: "David Forwood",
      position: "CEO",
      description: "A visionary leader with extensive experience in the IPTV industry, driving innovation and strategic growth for the company."
    },
    {
      name: "Elena Katruk",
      position: "Marketing Specialist",
      description: "A results-oriented marketing expert with a strong background in digital media and brand development, focused on expanding market presence."
    },
    {
      name: "Duan Lei",
      position: "CMO",
      description: "A results-oriented marketing expert with a strong background in digital media and brand development, focused on expanding market presence."
    }
  ];

  return (
    <>
      <Header />
      <main className="team bg-neutral-950 flex flex-col items-center w-full h-full pt-[105px] overflow-hidden">
        <section className="[font-family:'Maven_Pro',Helvetica] relative w-full px-4 sm:px-20 py-16">
          <div className="max-w-[1280px] mx-auto position-relative">
            <p className="text-white text-[30px] font-medium md:text-[50px] mb-4 md:mb-0">Team</p>
            <p className="text-[#E56DB1] absolute md:top-[28%] top-[100px] text-base">01<br className="block md:hidden"></br>/<br className="block md:hidden"></br>03</p>
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-7 h-full flex items-center">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1.3}
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                      centeredSlides: false
                    }
                  }}
                  slidesPerGroup={1}
                  centeredSlides={true}
                  initialSlide={2}
                  loop={true}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => {
                    const realIndex = swiper.realIndex;
                    setActiveSlide(teamMembers[realIndex]);
                  }}
                  pagination={{ clickable: true }}
                  navigation={false}
                  autoplay={{
                    delay: 10000000,
                    disableOnInteraction: false,
                  }}
                  className="w-full"
                >
                  <SwiperSlide>
                    <div className="slide_pane rounded-[20px]">
                      <div className="image_pane w-full h-full relative">
                        <img
                          className="w-full h-full"
                          alt="Team 3"
                          src="/src/assets/team-3.png"
                        />
                      </div>
                      <div className="des_pane flex flex-col gap-4 py-5">
                        <div className="flex flex-col w-full h-[1px] bg-[#363636] gap-2"></div>
                        <p className="text-white font-medium text-base md:text-xl">Elena Katruk</p>
                        <p className="text-[#FFC72C] text-base">Marketing Specialist</p>
                        <p className="text-[#989898] text-base md:text-lg hidden">A results-oriented marketing expert with a strong background in digital media and brand development, focused on expanding market presence.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide_pane rounded-[20px]">
                      <div className="image_pane w-full h-full relative">
                        <img
                          className="w-full h-full"
                          alt="Team 2"
                          src="/src/assets/team-2.png"
                        />
                      </div>
                      <div className="des_pane flex flex-col gap-4 py-5">
                        <div className="flex flex-col w-full h-[1px] bg-[#363636] gap-2"></div>
                        <p className="text-white font-medium text-base md:text-xl">Duan Lei</p>
                        <p className="text-[#FFC72C] text-base">CMO</p>
                        <p className="text-[#989898] text-base md:text-lg hidden">A results-oriented marketing expert with a strong background in digital media and brand development, focused on expanding market presence.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide_pane rounded-[20px]">
                      <div className="image_pane w-full h-full relative">
                        <img
                          className="w-full h-full"
                          alt="Team 1"
                          src="/src/assets/team-1.png"
                        />
                      </div>
                      <div className="des_pane flex flex-col gap-4 py-5">
                        <div className="flex flex-col w-full h-[1px] bg-[#363636] gap-2"></div>
                        <p className="text-white font-medium text-base md:text-xl">David Forwood</p>
                        <p className="text-[#FFC72C] text-base">CEO</p>
                        <p className="text-[#989898] text-base md:text-lg hidden">A visionary leader with extensive experience in the IPTV industry, driving innovation and strategic growth for the company.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide_pane rounded-[20px]">
                      <div className="image_pane w-full h-full relative">
                        <img
                          className="w-full h-full"
                          alt="Team 3"
                          src="/src/assets/team-3.png"
                        />
                      </div>
                      <div className="des_pane flex flex-col gap-4 py-5">
                        <div className="flex flex-col w-full h-[1px] bg-[#363636] gap-2"></div>
                        <p className="text-white font-medium text-base md:text-xl">Elena Katruk</p>
                        <p className="text-[#FFC72C] text-base">Marketing Specialist</p>
                        <p className="text-[#989898] text-base md:text-lg hidden">A results-oriented marketing expert with a strong background in digital media and brand development, focused on expanding market presence.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide_pane rounded-[20px]">
                      <div className="image_pane w-full h-full relative">
                        <img
                          className="w-full h-full"
                          alt="Team 2"
                          src="/src/assets/team-2.png"
                        />
                      </div>
                      <div className="des_pane flex flex-col gap-4 py-5">
                        <div className="flex flex-col w-full h-[1px] bg-[#363636] gap-2"></div>
                        <p className="text-white font-medium text-base md:text-xl">Duan Lei</p>
                        <p className="text-[#FFC72C] text-base">CMO</p>
                        <p className="text-[#989898] text-base md:text-lg hidden">A results-oriented marketing expert with a strong background in digital media and brand development, focused on expanding market presence.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide_pane rounded-[20px]">
                      <div className="image_pane w-full h-full relative">
                        <img
                          className="w-full h-full"
                          alt="Team 1"
                          src="/src/assets/team-1.png"
                        />
                      </div>
                      <div className="des_pane flex flex-col gap-4 py-5">
                        <div className="flex flex-col w-full h-[1px] bg-[#363636] gap-2"></div>
                        <p className="text-white font-medium text-base md:text-xl">David Forwood</p>
                        <p className="text-[#FFC72C] text-base">CEO</p>
                        <p className="text-[#989898] text-base md:text-lg hidden">A visionary leader with extensive experience in the IPTV industry, driving innovation and strategic growth for the company.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-span-12 md:col-span-5 p-8 md:p-16 h-full flex flex-col justify-evenly items-start">
                <div className="des_pane flex flex-col gap-4 py-5">
                  <p className="text-white font-medium text-[24px] leading-none md:text-[40px]">{activeSlide.name}</p>
                  <p className="text-[#FFC72C] text-base md:text-[20px] md:pb-8">{activeSlide.position}</p>
                  <p className="text-[#989898] text-base md:text-[18px]">{activeSlide.description}</p>
                </div>

                <button 
                  onClick={() => swiperRef.current?.slideNext()}
                  className="btn_swiper bg-transparent border-none z-10"
                >
                  <img
                    className="w-[60px] h-[60px] hover-scale cursor-pointer"
                    alt="Next"
                    src="/src/assets/arrow_right.png"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}; 