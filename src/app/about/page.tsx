"use client"

import AOS from "@/animation/aos";
import { SkillIcon } from "@/components/SkillIcon";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-black dark:bg-white">
      <div className="container flex flex-col justify-center items-center bg-black text-white dark:bg-white dark:text-black ">
        <div
          data-aos="fade-down"
          data-aos-offset="100"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-start">
            About
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            Aqui você encontrará mais informações sobre mim e quais minhas
            habilidades relacionadas ao desenvolvimento web.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-4 mx-auto md:flex-row md:py-16">
          <div className="w-full md:w-[60%]" data-aos="fade-right">
            <h2 className="mb-5 md:mb-10 text-xl sm:text-2xl md:text-3xl font-semibold text-center">
              Conheça-me!
            </h2>
            <p className="text-base sm:text-lg md:text-xl">
              Sou um desenvolvedor web frontend apaixonado por construir
              interfaces para sites e aplicativos. Meus projetos você pode
              conferir na page Portfolio
            </p>
            <br className="hidden md:block" />
            <p className="text-base sm:text-lg md:text-xl hidden md:block">
              Tenho experiência com JavaScript e estou sempre buscando aprender
              e utilizar novas tecnologias para aprimorar minhas habilidades.
              Trabalho com frameworks populares, como React.js e Next, e estou
              familiarizado com o desenvolvimento responsivo e a criação de
              interfaces amigáveis e intuitivas.
            </p>
            <br className="hidden md:block" />
            <p className="text-base sm:text-lg md:text-xl hidden md:block">
              Se você tiver uma oportunidade que se encaixe com minhas
              habilidades e experiência, não hesite em entrar em contato comigo.
              Estou ansioso para conhecer novos desafios e colaborar em projetos
              empolgantes.
            </p>
          </div>
          <div data-aos="fade-left" className="mb-10 md:mb-0">
            <h2 className="mb-10 text-xl sm:text-2xl md:text-3xl font-semibold mt-10 md:mt-0 text-center">
              Minhas Habilidades
            </h2>
            <div data-aos="fade-left">
              <SkillIcon />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
