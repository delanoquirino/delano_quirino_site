
import CardProject from "@/components/CardProject";

import projects from "@/utils/projects";


const Projects = () => {
  
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-black dark:bg-white pt-20 pb-10">
      <div className="container">
        <h1
     
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
