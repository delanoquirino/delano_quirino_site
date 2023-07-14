"use client"

import { Divider } from 'antd'
import { SocialLinks } from './SocialLinks'

export const Footer = () => {
  return (
    <div className='bg-black dark:bg-white transition duration-300 ease-in-out'>
        <div className='max-w-7xl p-7 m-auto text-white dark:text-black'>
            <div className='flex flex-col justify-between sm:flex-row gap-3'>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-bold'>DELANO QUIRINO</h2>
                    <span>Front-End Developer | Javascript | React | Next.js</span>
                
                </div>
                <div className='flex flex-col gap-1'>
                  <h2 className='font-bold'>SOCIAL</h2>
                  <div>
                    <SocialLinks/>
                  </div>
                </div>
            </div>
            <Divider className='bg-[#414244] h-[1px]'/>
            <p className='text-xs text-center'>© Copyright 2023. Feito por <span className='text-sky-500'>Delano Quirino</span></p>

        </div>
    </div>
  )
}
