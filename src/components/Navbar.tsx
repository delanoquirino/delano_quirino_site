"use client"

import Link from "next/link";
import { useState } from "react";

import { FaBars, FaTimes } from 'react-icons/fa';

interface LinkItem {
    id: number;
    name: string;
  }
  
  export const Navbar = () => {
    const [nav, setNav] = useState(false)
  
    const links = [
      {
        id: 1,
        name: "Home",
      },
      {
        id: 2,
        name: "About",
      },
      {
        id: 3,
        name: "Portfolio",
      },
      {
        id: 5,
        name: "Contact",
      },
    ];
  
    return (
      <>
      
      <ul className="hidden md:flex justify-between">
        {links.map(({ id, name }: LinkItem) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:brightness-125 duration-200"
          >
            <Link href={name}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden z-10">
          {nav ? <FaTimes/> : <FaBars/>}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black">
          {links.map(({ id, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl bold hover:scale-125 hover:brightness-115 hover:font-semibold"
            >
              <Link onClick={() => setNav(!nav)} href={name}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      </>
    );
  };