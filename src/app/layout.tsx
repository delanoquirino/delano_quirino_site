"use client"

import { useEffect } from 'react';
import { Header } from '@/components/Header'
import '@/styles/globals.css'
import { Jost } from 'next/font/google'
import { Footer } from '@/components/Footer'
import AOS from '@/animation/aos';

const jost = Jost({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <html lang="pt-br">
      <body className={jost.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
        
    </html>
  )
}
