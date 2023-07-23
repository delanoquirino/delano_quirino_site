import { SkillIcon } from "@/components/SkillIcon"

const About = () => {
    return <main className="bg-black dark:bg-white md:h-screen">
        <div className="max-w-7xl mx-auto py-32 p-5 flex flex-col justify-center items-center bg-black text-white dark:bg-white dark:text-black ">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Sobre Mim</h1>
                <p className="text-base sm:text-lg md:text-xl">Aqui você encontrará mais informações sobre mim e quais minhas habilidades relacionadas ao desenvolvimento web.</p>
            </div>
            <div className="flex flex-col justify-between gap-4 mx-auto md:flex-row mt-10 md:mt-20">
                <div className="w-full md:w-[50%]">
                    <h2 className="mb-5 md:mb-10 text-2xl sm:text-3xl md:text-4xl font-semibold text-center">Conheça-me!</h2>
                    <p className="text-base sm:text-lg md:text-xl">Sou um desenvolvedor web frontend apaixonado por construir interfaces para sites e aplicativos. Meus projetos você pode conferir na page Portfolio</p>
                    <br className="hidden md:block"/>
                    <p className="text-base sm:text-lg md:text-xl hidden md:block">Tenho experiência com JavaScript e estou sempre buscando aprender e utilizar novas tecnologias para aprimorar minhas habilidades. Trabalho com frameworks populares, como React.js e Next, e estou familiarizado com o desenvolvimento responsivo e a criação de interfaces amigáveis e intuitivas.</p>
                    <br className="hidden md:block"/>
                    <p className="text-base sm:text-lg md:text-xl hidden md:block">Se você tiver uma oportunidade que se encaixe com minhas habilidades e experiência, não hesite em entrar em contato comigo. Estou ansioso para conhecer novos desafios e colaborar em projetos empolgantes.</p>
                </div>
                <div><h2 className="mb-10 text-2xl sm:text-3xl md:text-4xl font-semibold mt-10 md:mt-0 text-center">Minhas Habilidades</h2>
                <div><SkillIcon/></div>
            </div>
            </div>
        </div>
    </main>
  }
  
  export default About