"use client";

import Image from "next/image";

import { BlogCard } from "@/components/BlogCard";
import Link from "next/link";
import { Divider } from "antd";
import { gql, useQuery } from "@apollo/client";
import { EmptyPost } from "@/components/EmptyPost";
import {format} from "date-fns"
import ptBR from "date-fns/locale/pt-BR";
import Loading from "./loading";

interface AllPosts {
  posts: {
    id: string;
    slug: string;
    subtitle: string;
    title: string;
    createdAt: string;
    coverImage: {
      url: string;
    };
    author: {
      name: string;
    };
  }[];
}

const Blog = ({posts}: AllPosts ) => {
  const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts(orderBy: createdAt_DESC) {
      id
      title
      slug
      subtitle
      createdAt
      coverImage {
        url
      }
      author {
        name
      }
    }
  }
`;
  
  const { loading, data } = useQuery<AllPosts>(GET_ALL_POSTS);
  if(loading) return <Loading/>
  return (
    <div className="h-full bg-black dark:bg-white transition duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto py-28 text-white dark:text-black p-5 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white dark:text-black">
          Blog
        </h1>
        {data ? 
        <>
        <Link
          href="/blog/post"
          className="w-full h-full flex flex-col md:flex-row gap-4 items-center justify-center mt-10 p-5 rounded-3xl hover:hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition duration-300 ease-in-out"
        >
          <div className="flex flex-1  h-[334px] rounded-2xl">
            <Image src={data?.posts[0].coverImage.url} width={700}
            height={300}
            objectFit="cover" alt=""  />
          </div>
          <div className="flex flex-1 h-[334px] flex-col gap-6 ">
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl ">
              {data?.posts[0].title}
            </h2>
            <p>
             {data?.posts[0].subtitle}
            </p>
            <div>
              <p className="font-bold">{data?.posts[0].author.name}</p>
              <p>{format(new Date(data?.posts[0].createdAt), "dd 'de' MMM 'de' yyyy", {locale:ptBR})}</p>
            </div>
          </div>
        </Link>
        <Divider className="bg-sky-500  h-[1px]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {data?.posts.map((post, index) => {
            if (index !== 0) {
              return (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  author={post.author.name}
                  createdAt={post.createdAt}
                  subtitle={post.subtitle}
                  urlImage={post.coverImage.url}
                />
              );
            }
          })}
        </div>
        </> :
        <EmptyPost/>}
      </div>
    </div>
  );
};

export default Blog;

