"use client"

import { Divider } from 'antd'

export const Footer = () => {
  return (
    <div className='bg-black dark:bg-white'>
        <div className='max-w-7xl p-7 m-auto text-white dark:text-black'>
            <div className='flex flex-col justify-between sm:flex-row gap-4'>
                <div>
                    <h2>DELANO QUIRINO</h2>
                    <span>Front-End Developer | Javascript | React | Next.js</span>
                
                </div>
                <div>
                <h2>SOCIAL</h2>
                <span>instagram</span>
                <span>github</span>
                </div>
            </div>
            <Divider className='bg-[#414244] h-[1px]'/>
            <p className='text-xs text-center'>© Copyright 2023. Feito por <span className='text-sky-500'>Delano Quirino</span></p>

        </div>
    </div>
  )
}
