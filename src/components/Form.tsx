import React from "react";

const Form = () => {
  return (
    <form
      className="md:w-[60%] w-full p-2 md:p-5 transition duration-300 ease-in-out"
      action="https://getform.io/f/346fd422-917a-4f04-ad2d-91aa9d4498c0"
      method="POST"
      data-aos="fade-left" data-aos-offset="100"
    >
    <div className="flex gap-5 flex-col px-2 py-5 md:px-5 md:py-10">
      
        <input
          placeholder="Nome"
          type="text"
          className="p-2 outline-none border-b border-slate-300 rounded-lg"
        />
      
        <input
          placeholder="E-mail"
          type="text"
          className="p-2 outline-none border-b border-slate-300 rounded-lg"
        />
      
        <textarea
        placeholder="Escreva sua mensagem"
          name="message"
          id=""
          cols={20}
          rows={10}
          className="outline-none border-b border-slate-300 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="text-sky-700  px-3 py-1 flex items-center justify-center rounded-md border-[1px] border-sky-500 hover:bg-gradient-to-r from-sky-500 to-sky-500 cursor-pointer transition duration-300 ease-in-out hover:brightness-125"
        >
          Enviar
        </button>
    </div>
    </form>
  );
};

export default Form;
