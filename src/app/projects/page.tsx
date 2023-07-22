"use client";

import CardProject from "@/components/CardProject";

import { Divider } from "antd";


const Projects = () => {

  const projects = [
    {
      title: "Sarah Soares",
      description: " Site criado para personal trainer Sarah Soares.",
      imageSrc: "/projects/sarahsoares.png",
      siteLink: "https://sarah-soares.vercel.app/",
      githubLink: "https://github.com/delanoquirino/sarah_soares",
      techBadges: ["Next.js", "Tailwind", "Typescript", "React Hook Form", "React Icons", "React Scroll"]
    },
    {
      title: "Escritório Amorim, Moura & Martins",
      description: "Site criado para o Escritório Amorim, Moura & Martins.",
      imageSrc: "/projects/ammadvfoto1.png",
      siteLink: "https://ammadv.vercel.app/",
      githubLink: "https://github.com/delanoquirino/ammadv",
      techBadges: ["Next.js", "Styled Components", "React Icons", "React Scroll"]
    },
    {
      title: "CineMovie",
      description: " Projeto consumindo a API TMDB para listagem dos melhores filmes",
      imageSrc: "/projects/cinemovie.png",
      siteLink: "https://cine-movie-rho.vercel.app/",
      githubLink: "https://github.com/delanoquirino/CineMovie",
      techBadges: ["Next.js", "Styled Components", "React Icons", "Fetch"]
    },
    
  ];

  return (
    <div className="bg-black dark:bg-white">
      <div className="max-w-7xl mx-auto py-20">
        <h1 className="text-4xl text-center text-white dark:text-black">Projetos</h1>
        {projects.map((project, index) => (
        <>
        
        <CardProject
          key={index}
          title={project.title}
          description={project.description}
          imageSrc={project.imageSrc}
          siteLink={project.siteLink}
          githubLink={project.githubLink}
          techBadges={project.techBadges}
        />
        <div className="max-w-7xl mx-auto">
          <Divider className="bg-[#414244] h-[1px] " />
        </div>
        
        </>
      ))}

        
       
      </div>
    </div>
  );
};

export default Projects;
