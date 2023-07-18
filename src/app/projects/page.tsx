"use client"

import { TechBadge } from "@/components/TechBadge";
import { Divider } from "antd";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="bg-black dark:bg-white">
      <div className="max-w-7xl mx-auto py-20">
        <h1 className="text-4xl text-center">Projetos</h1>
        <div className="flex gap-6 md:gap-12 flex-col md:flex-row p-10">
          <div className="h-full">
            <Image
              width={520}
              height={304}
              alt="Thumbnail do projeto"
              src="/projects/sarahsoares.png"
              className="w-full md:min-h-full object-fill rounded-lg h-[200px] sm:h-[300px] md:w-400px]"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg dark:text-slate-700 text-white">
              Sarah Soares
            </h3>
            <p className="dark:text-slate-700 text-white my-6">
             Site criado para personal trainer Sarah Soares.
            </p>
            <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 md:max-w-[350px]">
        
              <TechBadge name="Next.js" />
              <TechBadge name="Tailwind" />
              <TechBadge name="Typescript" />
              <TechBadge name="React Hook Form" />
              <TechBadge name="React Icons" />
              <TechBadge name="React Scroll" />
            </div>
          </div>
        
        </div>
        <div className="max-w-7xl mx-auto">
          <Divider className='bg-[#414244] h-[1px] '/>
        </div>
        <div className="flex gap-6 md:gap-12 flex-col md:flex-row p-10">
          <div className="h-full">
            <Image
              width={520}
              height={304}
              alt="Thumbnail do projeto"
              src="/projects/ammadvfoto1.png"
              className="w-full md:min-h-full object-fill rounded-lg h-[200px] sm:h-[300px] md:w-400px]"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg dark:text-slate-700 text-white">
              Escritório Amorim, Moura & Martins
            </h3>
            <p className="dark:text-slate-700 text-white my-6">
             Site criado para o Escritório Amorim, Moura & Martins.
            </p>
            <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 md:max-w-[350px]">
        
              <TechBadge name="Next.js" />
              <TechBadge name="Styled Components" />
              <TechBadge name="React Icons" />
              <TechBadge name="React Scroll" />
            </div>
          </div>
        
        </div>
        <div className="max-w-7xl mx-auto">
          <Divider className='bg-[#414244] h-[1px]'/>
        </div>
        <div className="flex gap-6 md:gap-12 flex-col md:flex-row p-10">
          <div className="h-full">
            <Image
              width={520}
              height={304}
              alt="Thumbnail do projeto"
              src="/projects/cinemovie.png"
              className="w-full md:min-h-full object-fill rounded-lg h-[200px] sm:h-[300px] md:w-400px]"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg dark:text-slate-700 text-white">
              CineMovie
            </h3>
            <p className="dark:text-slate-700 text-white my-6">
            Projeto consumindo a API TMDB para listagem dos melhores filmes
            </p>
            <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 md:max-w-[350px]">
        
              <TechBadge name="Next.js" />
              <TechBadge name="Styled Components" />
              <TechBadge name="React Icons" />
              <TechBadge name="Fetch" />
            </div>
          </div>
        
        </div>
      </div>
      
    </div>
  );
};

export default Projects;
