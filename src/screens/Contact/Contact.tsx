import React, { useState } from "react";
import { Header } from "../Home/sections/Header";
import { Footer } from "../Home/sections/Footer";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
}

export const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />
      <main className="contact bg-neutral-950 flex flex-col items-center w-full h-full pt-[105px] overflow-hidden">
        <section className="[font-family:'Maven_Pro',Helvetica] relative w-full px-4 sm:px-20 py-16">
          <div className="max-w-[1280px] mx-auto">
            <h1 className="text-white text-[30px] font-medium md:text-[50px] mb-4 md:mb-8">Contact Us</h1>
            <p className="text-[#999999] text-lg md:text-xl mb-8">Get in touch with us for inquiries, support, or feedback. We're here to help.</p>
            
            <div className="grid grid-cols-12 gap-10 lg:gap-4">
              {/* Contact Form */}
              <div className="col-span-12 lg:col-span-8 bg-[#151517] p-8 rounded-[20px]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
                    <div>
                      <label htmlFor="first_name" className="block text-[#999999] text-sm md:text-lg mb-2">First Name*</label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="custom_input contact w-full border-b-[1px] border-solid border-[#363636] bg-transparent text-white text-[16px] font-normal placeholder:text-[#989898]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-[#999999] text-sm md:text-lg mb-2">Last Name*</label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="custom_input contact w-full border-b-[1px] border-solid border-[#363636] bg-transparent text-white text-[16px] font-normal placeholder:text-[#989898]"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#999999] text-sm md:text-lg mb-2">Your email adress*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="custom_input contact w-full border-b-[1px] border-solid border-[#363636] bg-transparent text-white text-[16px] font-normal placeholder:text-[#989898]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[#999999] text-sm md:text-lg mb-2">Phone</label>
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="custom_input contact w-full border-b-[1px] border-solid border-[#363636] bg-transparent text-white text-[16px] font-normal placeholder:text-[#989898]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[#999999] text-sm md:text-lg mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="custom_input contact w-full border-b-[1px] border-solid border-[#363636] bg-transparent text-white text-[16px] font-normal placeholder:text-[#989898]"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group flex w-full md:w-[230px] h-[60px] items-center justify-center bg-neutral-950 rounded-[10px] border-[0.5px] border-solid border-[#ffc72c] hover:bg-[#ffc72c] cursor-pointer transition-all duration-300 mt-20"
                    >
                      <span className="font-maven-pro font-semibold text-[#ffc72c] text-xl whitespace-nowrap group-hover:text-black transition-colors">Send</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="col-span-12 lg:col-span-4 flex flex-col-reverse">
                <div className="flex flex-col gap-10 border-solid border-[#363636] border-[1px] rounded-[10px] p-5">
                  <div className="flex flex-col gap-5">
                    <div className="w-[100%] h-[70px] border-solid border-[#363636] border-[1px] flex items-center rounded-[10px] p-5">
                      <div className="flex items-center gap-5">
                        <img
                          className="w-[21.75px] object-contain"
                          alt="Icon phone"
                          src="/src/assets/icon_email.png"
                        />
                        <h3 className="text-white text-[18px] md:text-[20px] font-normal">kodiiptvplayer@gmail.com</h3>
                      </div>
                    </div>
                    <div className="w-[100%] h-[70px] border-solid border-[#363636] border-[1px] flex items-center rounded-[10px] p-5">
                      <div className="flex items-center gap-5">
                        <img
                          className="w-[21.75px] object-contain"
                          alt="Icon phone"
                          src="/src/assets/icon_send.png"
                        />
                        <h3 className="text-white text-[18px] md:text-[20px] font-normal">@kodiiptvplayer</h3>
                      </div>
                    </div>
                    <div className="w-[100%] h-[70px] border-solid border-[#363636] border-[1px] flex items-center rounded-[10px] p-5">
                      <div className="flex items-center gap-5">
                        <img
                          className="w-[21.75px] object-contain"
                          alt="Icon phone"
                          src="/src/assets/icon_phone.png"
                        />
                        <h3 className="text-white text-[18px] md:text-[20px] font-normal">+19 372 177 467</h3>
                      </div>
                    </div>
                    <div className="w-[100%] h-[70px] border-solid border-[#363636] border-[1px] flex items-center rounded-[10px] p-5">
                      <div className="flex items-center gap-5">
                        <img
                          className="w-[21.75px] object-contain"
                          alt="Icon phone"
                          src="/src/assets/icon_fax.png"
                        />
                        <h3 className="text-white text-[18px] md:text-[20px] font-normal">+19 372 177 467</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-[#999999] text-lg leading-none mb-3">Get in touch with us for inquiries, support, or feedback. </p>
                    <p className="text-[#999999] text-lg">We're here to help.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}; 