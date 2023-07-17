import { SkillIcon } from "@/components/SkillIcon"

const About = () => {
    return <div className="bg-black dark:bg-white">
        <div className="max-w-7xl m-auto p-5 flex flex-col justify-center items-center bg-black text-white dark:bg-white dark:text-black ">
            <div className="flex flex-col justify-center items-center gap-4 mt-20">
                <h1 className="text-4xl">Sobre Mim</h1>
                <p className="text-xl">Aqui você encontrará mais informações sobre mim e quais minhas habilidades relacionadas ao desenvolvimento web.</p>
            </div>
            <div className="flex flex-col md:flex-row mt-20 gap-10">
                <div className="w-full md:w-[50%]">
                    <h2 className="mb-10 text-3xl bold">Conheça-me!</h2>
                    <p className="text-base">Sou um desenvolvedor web frontend apaixonado por construir interfaces para sites e aplicativos. Meus projetos você pode conferir na page Portfolio</p>
                    <br />
                    <p className="text-base">Tenho experiência com JavaScript e estou sempre buscando aprender e utilizar novas tecnologias para aprimorar minhas habilidades. Trabalho com frameworks populares, como React.js e Next, e estou familiarizado com o desenvolvimento responsivo e a criação de interfaces amigáveis e intuitivas.</p>
                    <br />
                    <p className="text-base">Se você tiver uma oportunidade que se encaixe com minhas habilidades e experiência, não hesite em entrar em contato comigo. Estou ansioso para conhecer novos desafios e colaborar em projetos empolgantes.</p>
                </div>
                <div><h2 className="mb-10 text-3xl bold">Minhas Habilidades</h2>
                <div><SkillIcon/></div>
            </div>
            </div>
        </div>
    </div>
  }
  
  export default About