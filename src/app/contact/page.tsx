import Form from "@/components/Form";
import { SocialLinks } from "@/components/SocialLinks";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-black dark:bg-white transition duration-300 ease-in-out">
      <div className="h-screen max-w-7xl mx-auto py-20">
        
          <h1 className='text-4xl  text-white dark:text-black text-center'>Entre em Contato</h1>
        <div className="flex gap-6 md:gap-12 flex-col md:flex-row p-10">
          <div className="flex flex-col gap-8 md:w-[60%] w-full ">
            <p className='text-white dark:text-black text-xl leading-8'>
              Fico feliz em saber que você está interessado em entrar em contato
              comigo. Se você tem alguma dúvida, deseja colaborar em um projeto ou
              simplesmente quer dizer Oi, acesse minhas redes sociais ou mande um mensagema atraves do formularioesta é a página certa para isso.
            </p>
            <SocialLinks/>
          </div>
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
