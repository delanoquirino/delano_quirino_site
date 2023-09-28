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
const CardProject = ({
  title,
  description,
  imageSrc,
  siteLink,
  githubLink,
  techBadges,
}: CardProjectProps) => {
  return (
    <div
   
      className="flex gap-2 flex-col p-5 mt-10 shadow-lg"
    >
      <div className=" w-full h-96 relative">
      <Image
          alt="Thumbnail do projeto"
          src={imageSrc}
          layout="fixed"
          quality={100}
          fill={true}
          className="rounded-lg object-cover"
        />
      </div>
       
         
  
      <div className="flex flex-col items-start">
        <h2 className="text-lg sm:text-xl mt-1 md:text-2xl  font-semibold dark:text-slate-700 text-white">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg dark:text-slate-700 text-white my-2">
          {description}
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-4">
          {techBadges.map((tech, index) => (
            <TechBadge key={index} name={tech} />
          ))}
        </div>
        <div className="flex justify-start items-center gap-5">
          <button className=" text-sky-700 px-3 py-1 flex items-center justify-center rounded-md border-[1px] border-cyan-500 hover:bg-gradient-to-r from-cyan-500 to-sky-500 cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:brightness-125">
            <a
              className="text-base sm:text-lg md:text-xl"
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Site
            </a>
          </button>
          <button className="text-sky-700 px-2 py-1 flex items-center justify-center rounded-md border-[1px] border-cyan-500 hover:bg-gradient-to-r from-cyan-500 to-sky-500 cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:brightness-125">
            <a
              className="text-sm sm:text-base md:text-lg"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
