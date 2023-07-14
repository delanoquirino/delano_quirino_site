
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-black dark:bg-white dark:text-black transition duration-300 ease-in-out">
      <div className="h-full p-5 flex flex-col items-center justify-center gap-10">
        <h1 className="text-white dark:text-slate-600 text-6xl font-bold">Olá! Eu me Chamo Delano</h1>
        <p className="text-slate-500 text-xl">Sou desenvolvedor front-end e este é o meu site. Aqui você conhecerá minha jornada e projetos como desenvolvedor front-end.</p>
        <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:brightness-125" ><Link href="projetos">Meus Projetos</Link></button>
        
      </div>
    </div>
  )
}
