import { Header } from '@/components/Header'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import { Footer } from '@/components/Footer'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Delano Quirino',
  description: 'Meu Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
