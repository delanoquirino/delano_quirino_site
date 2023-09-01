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
    data-aos="zoom-in-up"
    data-aos-delay="200"
      className="flex gap-2 lg:gap-12 flex-col lg:flex-row p-4 md:p-5 mt-10"
    >
      <div className="h-full" >
        <Image
          width={420}
          height={304}
          alt="Thumbnail do projeto"
          src={imageSrc}
          layout="fixed"
          className="w-full md:min-h-full rounded-lg"
        />
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-2xl sm:text-3xl mt-2 sm:mt-1 md:text-4xl  font-semibold dark:text-slate-700 text-white">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl dark:text-slate-700 text-white my-2 lg:my-6">
          {description}
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-4 md:max-w-[350px]">
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
          <button className="text-sky-700 px-3 py-1 flex items-center justify-center rounded-md border-[1px] border-cyan-500 hover:bg-gradient-to-r from-cyan-500 to-sky-500 cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:brightness-125">
            <a
              className="text-base sm:text-lg md:text-xl "
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
