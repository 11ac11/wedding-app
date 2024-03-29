import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '../components/nav'
import { Hamburger } from '../components/hamburger'

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: `Robyn & Alex's Wedding`,
  description:
    'September 2025',
}

// const inter = Inter({
//   variable: '--font-inter',
//   subsets: ['latin'],
//   display: 'swap',
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      {/* <body className={inter.variable}>{children}</body> */}
      <body>
        <Hamburger />
        {children}
      </body>
    </html>
  )
}
