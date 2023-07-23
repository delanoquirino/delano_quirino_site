"use client";

import CardProject from "@/components/CardProject";

import { Divider } from "antd";

import projects from "@/data/projects/projects";

const Projects = () => {
  return (
    <div className="bg-black dark:bg-white">
      <div className="max-w-7xl mx-auto py-32" data-aos="fade-up"
     data-aos-offset="100">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white dark:text-black">
          Projetos
        </h1>
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
