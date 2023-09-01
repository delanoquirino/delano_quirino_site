"use client";

import CardProject from "@/components/CardProject";

import { Divider } from "antd";

import projects from "@/utils/projects";
import { useEffect } from "react";
import AOS from "@/animation/aos";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <main className="min-h-[calc(100vh-15rem)] bg-black dark:bg-white mb-10 md:mb-0">
      <div className="max-w-7xl mx-auto py-16 ">
        <h1
          data-aos="fade-down"
          data-aos-offset="100"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white dark:text-black"
        >
          Projects
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
          </>
        ))}
      </div>
    </main>
  );
};

export default Projects;
