"use client";
import Link from "next/link";
import AOS from "@/animation/aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-black dark:bg-white dark:text-black transition duration-300 ease-in-out flex items-center justify-center ">
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        className="container flex flex-col items-center justify-center gap-10"
      >
        <h1 className="text-white dark:text-slate-600 text-5xl md:text-6xl font-bold">
          Olá! Eu me Chamo Delano
        </h1>
        <p className="text-slate-500 sm:text-lg md:text-xl">
          Sou desenvolvedor front-end e este é o meu site. Aqui você conhecerá
          minha jornada e projetos como Software Developer.
        </p>
        <button
          className="text-white text-base sm:text-lg md:text-xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-sky-500 cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:brightness-125"
          data-aos="zoom-in"
        >
          <Link href="projects">Meus Projetos</Link>
        </button>
        <a
          className="text-cyan-500 text-base sm:text-lg md:text-xl"
          href="https://drive.google.com/file/d/1zJB9soxH7G50RarayoG-V8JgHRuyzbcz/view?usp=sharing"
          target="_blank"
          data-aos="fade-left"
        >
          Currículo...
        </a>
      </div>
    </main>
  );
}
