"use client";

import Image from "next/image";

import { BlogCard } from "@/components/BlogCard";
import Link from "next/link";
import { EmptyPost } from "@/components/EmptyPost";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { BlogPageInfo } from "@/types/page-blog";

type BlogSectionProps = {
  blogInfo: BlogPageInfo[]
}

export const PageBlog = ( {blogInfo}: BlogSectionProps) => {
  console.log(blogInfo)
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-black dark:bg-white transition duration-300 ease-in-out pt-20 pb-10">
      <div className="container text-white dark:text-black ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white dark:text-black">
          Blog
        </h1>
        {blogInfo ? (
          <>
            <Link
              href={`/blog/${blogInfo[0]?.slug}`}
              className="w-full h-full flex flex-col md:flex-row gap-4 items-center justify-center mt-10 p-5 rounded-3xl hover:hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition duration-300 ease-in-out"
            >
              <div className="flex flex-1  h-[350px] rounded-2xl">
                <Image
                  src={blogInfo[0]?.coverImage.url}
                  width={700}
                  height={350}
                  objectFit="cover"
                  alt=""
                />
                
              </div>
              <div className="flex flex-1 h-[334px] flex-col gap-6 ">
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl ">
                  {blogInfo[0]?.title}
                </h2>
                <p>{blogInfo[0]?.subtitle}</p>
                <div>
                  <p className="font-bold">{blogInfo[0]?.author.name}</p>
                  <p>
                    {format(
                      new Date(blogInfo[0]?.createdAt),
                      "dd 'de' MMM 'de' yyyy",
                      { locale: ptBR }
                    )}
                  </p>
                </div>
              </div>
            </Link>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {blogInfo.map((post, index) => {
                if (index !== 0) {
                  return (
                    <BlogCard
                      key={post.id}
                      title={post.title}
                      author={post.author.name}
                      createdAt={post.createdAt}
                      subtitle={post.subtitle}
                      urlImage={post.coverImage.url}
                      slug={post.slug}
                    />
                  );
                }
              })}
            </div>
          </>
        ) : (
          <EmptyPost />
        )}
      </div>
    </main>
  );
};
