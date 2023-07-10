import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-16 px-4 text-white bg-black">
      <h1 className="text-2xl">Delano</h1>
      <Navbar/>
    </div>
  );
};
