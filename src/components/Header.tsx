import { Navbar } from "./Navbar";
import { ToggleTheme } from "./ToggleTheme";

export const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-16 px-4 text-white bg-black dark:bg-white transition duration-300 ease-in-out dark:text-black ">
      <h1 className="text-2xl">Delano</h1>
      <div className="flex items-center gap-5">
      <ToggleTheme/>
      <Navbar/>
      </div>
    </div>
  );
};
