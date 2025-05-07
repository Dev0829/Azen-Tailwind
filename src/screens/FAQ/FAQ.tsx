import React, { useState } from "react";
import { Header } from "../Home/sections/Header";
import { Footer } from "../Home/sections/Footer";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Does XCIPTV Player Live Stream contain<br className='hidden md:block'> any contents?<br><br>Where can | get a good playlist?",
      answer: "XCIPTV Player Live Stream and any administrator does not help you to find a good playlist. Also we don't provide any kind of playlists. We are not responsible for the content uploaded to our APP. Please don't buy the app when you don't have any playlist or Media for the APP, because no contents are included after the activation.<br><br>You payment will not be refunded if you buy it without having any list or something is not workng."
    },
    {
      question: "Why is the app freezing on start?",
      answer: "XCIPTV Player Live Stream and any administrator does not help you to find a good playlist. Also we don't provide any kind of playlists. We are not responsible for the content uploaded to our APP. Please don't buy the app when you don't have any playlist or Media for the APP, because no contents are included after the activation.<br><br>You payment will not be refunded if you buy it without having any list or something is not workng."
    },
    {
      question: "Why is the app not working when the PLAYLIST worked on my computer",
      answer: "XCIPTV Player Live Stream and any administrator does not help you to find a good playlist. Also we don't provide any kind of playlists. We are not responsible for the content uploaded to our APP. Please don't buy the app when you don't have any playlist or Media for the APP, because no contents are included after the activation.<br><br>You payment will not be refunded if you buy it without having any list or something is not workng."
    },
    {
      question: "Why can't I start the APP?",
      answer: "XCIPTV Player Live Stream and any administrator does not help you to find a good playlist. Also we don't provide any kind of playlists. We are not responsible for the content uploaded to our APP. Please don't buy the app when you don't have any playlist or Media for the APP, because no contents are included after the activation.<br><br>You payment will not be refunded if you buy it without having any list or something is not workng."
    },
    {
      question: "Does the XCIPTV Player Live Stream APP have an EPG-SYSTEM?",
      answer: "XCIPTV Player Live Stream and any administrator does not help you to find a good playlist. Also we don't provide any kind of playlists. We are not responsible for the content uploaded to our APP. Please don't buy the app when you don't have any playlist or Media for the APP, because no contents are included after the activation.<br><br>You payment will not be refunded if you buy it without having any list or something is not workng."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main className="faq bg-neutral-950 flex flex-col items-center w-full h-full pt-[105px] overflow-hidden">
        <section className="[font-family:'Maven_Pro',Helvetica] relative w-full px-4 sm:px-20 py-16">
          <div className="max-w-[1280px] mx-auto">
            <h1 className="text-white text-[30px] font-medium md:text-[50px] mb-4 md:mb-8">FAQs</h1>
            <p className="text-[#999999] text-lg md:text-xl mb-8">What do you want to know? We're here to help.</p>
            
            <div className="py-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className="border-b-[1px] border-solid border-[#99999925] bg-none overflow-hidden"
                >
                  <button
                    className="border-none w-full px-0 pr-3 py-8 text-left flex justify-between items-center bg-transparent transition-colors cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-start gap-4 md:gap-12">
                      <span className="text-[#E56DB1] text-2xl md:text-[30px] md:pt-2">0{index + 1}</span>
                      <span className="text-white text-lg md:text-xl font-medium" dangerouslySetInnerHTML={{ __html: item.question }} />
                    </div>
                    {openIndex === index ? 
                      <div className="btn_swiper hidden md:block bg-transparent border-none z-10">
                        <img
                            className="w-[60px] h-[60px] hover-scale cursor-pointer"
                            alt="Arrow right"
                            src="/src/assets/arrow_right.png"
                        />
                      </div> :
                      <div className="btn_swiper bg-transparent border-none z-10">
                        <img
                            className="w-[60px] h-[60px] hover-scale cursor-pointer"
                            alt="Arrow down"
                            src="/src/assets/arrow_down.png"
                        />
                      </div>}
                  </button>
                  {openIndex === index && (
                    <div className="flex flex-col justify-end pb-8">
                      <p className="max-w-[620px] text-[#999999] text-base md:text-lg" dangerouslySetInnerHTML={{ __html: item.answer }} />
                      <div className="btn_swiper block md:hidden bg-transparent border-none z-10">
                        <img
                            className="w-[60px] h-[60px] ml-3 mt-8 hover-scale cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                            alt="Arrow up"
                            src="/src/assets/arrow_up.png"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}; 