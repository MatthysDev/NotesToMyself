import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='h-16 bg-white text-black flex items-center'>
          <Link className=' ml-12 font-semibold' href="/">NotesToMyself </Link>
        </div>
        {children}

      </body>
    </html>
  )
}
