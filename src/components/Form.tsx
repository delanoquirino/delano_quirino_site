import React from "react";

const Form = () => {
  return (
    <form
      className="flex gap-5 flex-col md:w-[60%] w-full hover:shadow-2xl hover:shadow-cyan-500/50 p-5 transition duration-300 ease-in-out"
      action="https://getform.io/f/346fd422-917a-4f04-ad2d-91aa9d4498c0"
      method="POST"
    >
      <label htmlFor="" className="text-white dark:text-black bold  ">
        Nome
      </label>
      <input
        type="text"
        className="p-1 outline-none border-b border-slate-300"
      />
      <label htmlFor="" className="text-white dark:text-black bold">
        E-mail:
      </label>
      <input
        type="text"
        className="p-1 outline-none border-b border-slate-300"
      />
      <label htmlFor="" className="text-white dark:text-black bold">
        Mensagem:
      </label>
      <textarea
        type="text" name="message"
        id=""
        cols="20"
        rows="10"
        className="outline-none border-b border-slate-300"
      ></textarea>
      <button
        type="submit"
        className="text-sky-700 px-3 py-1 flex items-center justify-center rounded-md border-[1px] border-cyan-500 hover:bg-gradient-to-r from-cyan-500 to-sky-500 cursor-pointer transition duration-300 ease-in-out hover:brightness-125"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
