
import html from "../../public/iconskill/html.png";
import css from "../../public/iconskill/css.png";
import javascript from "../../public/iconskill/javascript.png";
import reactImage from "../../public/iconskill/react.png";
import nextjs from "../../public/iconskill/nextjs.png";
import github from "../../public/iconskill/github.png";
import tailwind from "../../public/iconskill/tailwind.png";
import chakra from "../../public/iconskill/chakra.png";
import typescript from "../../public/iconskill/typescript.png";
import Image from "next/image";

export const SkillIcon = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: nextjs,
          title: "Next JS",
          style: "shadow-white",
        },
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
          id: 9,
          src: chakra,
          title: "ChakraUI",
          style: "shadow-sky-400",
        },
        {
          id: 9,
          src: typescript,
          title: "Typescript",
          style: "shadow-blue-500",
        },
      ];
  return (
    
   
      <div
        className="w-full grid grid-cols-2 sm:grid-cols-3 gap-7 text-center sm:px-4"
      >
        {techs.map(({ id, src, title, style }) => (
      <div key={id} className={`shadow-md  hover:scale-105 duration-500 p-2 rounded-lg ${style} brightness-75 hover:brightness-125 dark:hover:brightness-100`}>
        <Image src={src} alt="Icone de Skill" className="w-10 mx-auto" />
        <p className="mt-4 text-sm sm:text-[16px]">{title}</p>
      </div>
        ))}
      </div>
    

  )
}
