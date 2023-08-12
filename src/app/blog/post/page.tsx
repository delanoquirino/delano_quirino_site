"use client";

import Image from "next/image";

import pagination from "../../../../public/paginationbanner.jpg";
import { FaArrowLeft } from 'react-icons/fa';

import Link from "next/link";

const Post = () => {
  return (
    <div className="h-full w-full bg-black dark:bg-white transition duration-300 ease-in-out">
     <div className="max-w-7xl mx-auto py-28 text-white dark:text-black p-5">
            <Link href="../blog" className="text-base sm:text-lg md:text-xl font-bold text-white dark:text-black w-fit flex items-center gap-4 hover:text-sky-500 dark:hover:text-sky-500" > <FaArrowLeft/>Voltar</Link>
        <div className="w-full h-full flex flex-col items-center mt-10 p-5">
          <div className="w-full h-[400px] rounded-2xl relative">
            <Image src={pagination} alt="" fill={true} style={{objectFit: "scale-down"}} />
          </div>
          
        </div>
        <div className="flex w-full flex-col mt-8">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl ">
              Como desenvolver uma pagination em React
            </h2>
            
            <div className="mt-2">
              <p className="font-bold">Delano Quirino</p>
              <p>03 de agosto de 2023</p>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              magnam sit ipsum fugit ratione et inventore. Rerum, atque nemo! Ea
              dicta voluptas ipsam itaque autem accusantium tempora aut,
              corporis harum.
            </p>
          </div>
      </div>
    
    </div>
  );
};

export default Post;
