import Image from "next/image";
import Link from "next/link";
import {format} from "date-fns"
import ptBR from "date-fns/locale/pt-BR";

interface BlogCardProps {
  title:string;
  subtitle:string;
  author:string;
  createdAt:string;
  urlImage:string;
  slug:string
}

export const BlogCard = ({title, subtitle, author, createdAt, urlImage, slug}: BlogCardProps) => {
  
  return (
    <Link
      href={`/blog/${slug}`}
      className="h-full text-white dark:text-black flex flex-col items-start gap-2 transition duration-300 ease-in-out "
    >
      <div className="flex flex-col w-full rounded-3xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  transition duration-300 ease-in-out p-4 gap-2">
        <div className="flex flex-1 w-full h-[334px] rounded-2xl">
          <Image src={urlImage}  
            width={500}
            height={300}
            objectFit="cover" alt="banner"  />
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 ">
          <h3 className="font-bold text-base sm:text-lg md:text-xl">
            {title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base">
            {subtitle}
          </p>
          <div>
            <p className="font-bold text-xs sm:text-sm md:text-base">
              {author}
            </p>
            <p className=" text-xs sm:text-sm md:text-base">
            {format(new Date(createdAt), "dd 'de' MMM 'de' yyyy", {locale:ptBR})}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
