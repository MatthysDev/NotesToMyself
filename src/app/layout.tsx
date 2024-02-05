import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notes to myself',
  description: 'take notes for your future self',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='h-16 bg-white text-black flex items-center shadow-black shadow-2xl border-b-2 border-opacity-5 border-black'>
          <Link className=' ml-12 font-semibold' href="/">NotesToMyself</Link>
        </div>
        {children}

      </body>
    </html>
  )
}
