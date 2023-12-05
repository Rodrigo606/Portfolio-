import React from "react";
import style from './layout.module.scss'
import { Orbitron } from 'next/font/google'


export const metadata = {
  title: 'Portfolio Rodrigo',
  description: 'Página principal del portfolio',
}

const font = Orbitron({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
return (
    <html lang="en" style={{ scrollBehavior: "smooth"}} className={font.className}>
      <body className={style.main}>
        {children}
      </body>
    </html>
  )
}
