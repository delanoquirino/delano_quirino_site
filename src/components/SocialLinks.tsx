"use client"

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

export const SocialLinks = () => {
    const links = [
        { url: "https://www.linkedin.com/in/delanoquirino/", icon: <FaLinkedin /> },
        { url: "https://www.instagram.com/delanoquirino/", icon: <FaInstagram /> },
        { url: "https://github.com/delanoquirino", icon: <FaGithub /> },
        
      ]

  return (
    <div className="flex gap-5 ">
        {links.map((link, index) => (
            <a className="text-sky-500 text-2xl transition duration-300 ease-in-out scale-125 hover:scale-150 hover:brightness-125" key={index} href={link.url} target="_blank">{link.icon}</a>
        ))}
        
    </div>
  )
}
