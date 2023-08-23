"use client"

import Image from "next/image";

import { FaArrowLeft } from 'react-icons/fa';

import Link from "next/link";

import format from "date-fns/format";
import { ptBR } from "date-fns/locale";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { PostPageInfo } from "@/types/postBlog-info";

type PostSectionProps = {
  postinfo: PostPageInfo
}

export const PostBlog = ({ postinfo }:PostSectionProps) => {
   
    return (
      <div className="h-full w-full bg-black dark:bg-white transition duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto py-28 text-white dark:text-black p-5">
             <Link href="../blog" className="text-base sm:text-lg md:text-xl font-bold text-white dark:text-black w-fit flex items-center gap-4 hover:text-sky-500 dark:hover:text-sky-500" > <FaArrowLeft/>Voltar</Link>
         <div className="w-full h-full flex flex-col items-center mt-10 p-5">
           <div className="w-full h-[400px] rounded-2xl relative">
             <Image src={postinfo[0].coverImage.url} alt="" fill={true} style={{objectFit: "scale-down"}} />
           </div>
           
         </div>
         <div className="flex w-full flex-col mt-8">
             <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
             {postinfo[0].title}
             </h2>
             
             <div className="mt-2">
               <p className="font-bold">{postinfo[0].author.name}</p>
               <p>{format(new Date(postinfo[0].createdAt), "dd 'de' MMM 'de' yyyy", { locale: ptBR })}</p>
             </div>
             <RichText 
               content={postinfo[0].content.json} 
               renderers={{
                 p: ({ children }) => <p className='mt-8 '>{children}</p>
               }}
             />
            </div>
       </div>
     
     </div>
      );
}
