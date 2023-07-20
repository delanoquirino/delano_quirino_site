import React from 'react'

const Form = () => {
  return (
    <form className='flex flex-col md:w-[50%] w-full hover:shadow-2xl hover:shadow-cyan-500/50 p-5 transition duration-300 ease-in-out'>
        <label htmlFor="" className='text-white dark:text-black bold  '>Nome</label>
        <input type="text" className='p-1 outline-none border-b border-slate-300' />
        <label htmlFor="" className='text-white dark:text-black bold'>E-mail:</label>
        <input type="text" className='p-1 outline-none border-b border-slate-300'/>
        <label htmlFor="" className='text-white dark:text-black bold'>Mensagem:</label>
        <textarea name="" id="" cols="20" rows="10" className='outline-none border-b border-slate-300'></textarea>
    </form>
  )
}

export default Form