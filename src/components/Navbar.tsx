"use client"

import Link from "next/link";
import { useState } from "react";

import { FaBars, FaTimes } from 'react-icons/fa';

interface LinkItem {
    id: number;
    name: string;
    link: string
  }
  
  export const Navbar = () => {
    const [nav, setNav] = useState(false)
  
    const links = [
      {
        id: 1,
        name: "home",
        link: "/"
      },
      {
        id: 2,
        name: "about",
        link: "about"
      },
      {
        id: 3,
        name: "projects",
        link: "projects"
      },
      {
        id: 5,
        name: "blog",
        link: "blog"
      },
      {
        id: 6,
        name: "contact",
        link: "contact"
      },
    ];
  
    return (
      <>
      
      <ul className="hidden md:flex justify-between">
        {links.map(({ id, name, link }: LinkItem) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white dark:text-black hover:text-sky-500 dark:hover:text-sky-500 hover:scale-105 duration-200"
          >
            <Link href={link}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      
      <FaBars onClick={() => setNav(!nav)} className="cursor-pointer md:hidden z-10 "/>
      
      {nav && (
        
        <ul className="h-full flex flex-col justify-center items-center fixed top-0 left-0 w-full z-50 bg-black dark:bg-white">
          <FaTimes onClick={() => setNav(!nav)} className="mb-10 cursor-pointer md:hidden z-10 "/> 
          {links.map(({ id, name, link }) => (
            <li
              key={id}
              className="text-base px-4 cursor-pointer text-white dark:text-black uppercase py-6  hover:text-sky-500 dark:hover:text-sky-500 hover:scale-125 hover:font-semibold"
            >
              <Link className="sm:text-lg md:text-xl bold"  onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      </>
    );
  };