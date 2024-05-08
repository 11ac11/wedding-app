import './globals.css'
import Nav from '../components/nav'
import { Hamburger } from '../components/hamburger'

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: `Robyn & Alex's Wedding`,
  description:
    'September 2025',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Hamburger />
        {children}
      </body>
    </html>
  )
}
