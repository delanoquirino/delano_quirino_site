import Image from "next/image";
import { TechBadge } from "./TechBadge";

interface CardProjectProps {
    title: string;
    description: string;
    imageSrc: string;
    siteLink: string;
    githubLink: string;
    techBadges: string[]; 
  }
const CardProject = ({ title, description, imageSrc, siteLink, githubLink, techBadges }:CardProjectProps) => {
  return (
    <div className="flex gap-6 md:gap-12 flex-col md:flex-row p-2 md:p-10">
      <div className="h-full">
        <Image
          width={520}
          height={304}
          alt="Thumbnail do projeto"
          src={imageSrc}
          className="w-full md:min-h-full object-fill rounded-lg h-[200px] sm:h-[300px] md:w-400px]"
        />
      </div>
      <div>
        <h3 className="font-medium text-lg dark:text-slate-700 text-white">{title}</h3>
        <p className="dark:text-slate-700 text-white my-6">{description}</p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 md:max-w-[350px]">
          {techBadges.map((tech, index) => (
            <TechBadge key={index} name={tech} />
          ))}
        </div>
        <div className="flex justify-start items-center gap-5">
          <button className="text-sky-700 px-3 py-1 flex items-center justify-center rounded-md border-[1px] border-cyan-500 hover:bg-gradient-to-r from-cyan-500 to-sky-500 cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:brightness-125">
            <a href={siteLink} target="_blank" rel="noopener noreferrer">
              Site
            </a>
          </button>
          <button className="text-sky-700 px-3 py-1 flex items-center justify-center rounded-md border-[1px] border-cyan-500 hover:bg-gradient-to-r from-cyan-500 to-sky-500 cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:brightness-125">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProject;