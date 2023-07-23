import { Navbar } from "./Navbar";
import { SocialLinks } from "./SocialLinks";
import { ToggleTheme } from "./ToggleTheme";

export const Header = () => {
  return (
    <div className="bg-black dark:bg-white fixed w-full z-50 transition duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full h-16 px-4 text-white  dark:text-black flex-row-reverse  md:flex-row">
        <div className="flex items-center gap-5">
          <Navbar />
        </div>

        <div className="flex items-center gap-10">
          <SocialLinks />
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};
