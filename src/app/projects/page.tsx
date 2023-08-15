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
    <div className="bg-black dark:bg-white">
      <div className="max-w-7xl mx-auto py-32">
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
            <div className="max-w-7xl mx-auto">
              <Divider
                data-aos="zoom-in"
                data-aos-offset="100"
                className="bg-[#414244] h-[1px] "
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
