import Form from "@/components/Form";
import { SocialLinks } from "@/components/SocialLinks";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-black dark:bg-white transition duration-300 ease-in-out">
    
      <div className="h-full md:h-screen max-w-7xl mx-auto py-20 flex justify-center items-center">
        <div>
          <div className="flex gap-6 md:gap-12 flex-col md:flex-row p-2 md:p-10 ">
          
            <div data-aos="fade-right" data-aos-offset="100" className="flex flex-col gap-8 md:w-[60%] w-full bg-white dark:bg-black text-black dark:text-white px-5 py-8 md:px-8 md:py-12 shadow-lg shadow-slate-500 rounded-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-10">
                Você tem algum Projeto? Vamos conversar
              </h2>
              <p className="text-base sm:text-lg md:text-xl ">
                Desenvolvedor Web e Mobile
              </p>
              <div>
                <p className="text-base sm:text-lg md:text-xl ">Telefone:</p>
                <span className="text-sm sm:text-base text-slate-400">
                  (86) 99952-0547
                </span>
              </div>
              <SocialLinks />
            </div>
            <Form />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
