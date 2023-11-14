import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Studio Horsma',
  description: 'Studio Horsma',
}

export default function RootLayout({ children }: any) {

  return (
    <html lang="en">
      <body className={inter.className}>

        {children}
      </body>
    </html>
  );
}
