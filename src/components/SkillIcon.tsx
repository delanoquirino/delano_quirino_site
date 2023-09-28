
import html from "../../public/iconskill/html.png";
import css from "../../public/iconskill/css.png";
import javascript from "../../public/iconskill/javascript.png";
import reactImage from "../../public/iconskill/react.png";
import nextjs from "../../public/iconskill/nextjs.png";
import github from "../../public/iconskill/github.png";
import tailwind from "../../public/iconskill/tailwind.png";
import chakra from "../../public/iconskill/chakra.png";
import typescript from "../../public/iconskill/typescript.png";
import jest from "../../public/iconskill/jest.png";
import Image from "next/image";

export const SkillIcon = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "[#F97316]",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "[#3B82F6]",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "[#EFD81D]",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "[#61DBFB]",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "[#38BDF8]",
        },
        {
          id: 6,
          src: nextjs,
          title: "Next JS",
          style: "[#D1D5DB]",
        },
        {
          id: 7,
          src: github,
          title: "GitHub",
          style: "[#D1D5DB]",
        },
        {
          id: 8,
          src: chakra,
          title: "ChakraUI",
          style: "[#3CC7BE]",
        },
        {
          id: 9,
          src: typescript,
          title: "Typescript",
          style: "[#60A5FA]",
        },{
          id: 10,
          src: jest,
          title: "Jest",
          style: "[#99425B]",
        },
      ];
  return (
    
   
      <div
        className="w-full grid gri-cols-1 min-[350px]:grid-cols-2 sm:grid-cols-3 gap-7 text-center sm:px-4" 
      >
        {techs.map(({ id, src, title, style }) => (
      <div  key={id}  className={`hover:scale-105 duration-500 p-2 rounded-lg shadow-xl shadow-${style} cursor-pointer`}>
        <Image src={src} alt="Icone de Skill" className="w-7 mx-auto" />
        <p className="text-xs sm:text-sm md:text-base mt-1 font-bold">{title}</p>
      </div>
        ))}
      </div>
    

  )
}
