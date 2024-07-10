import './globals.css'
import StyledJsxRegistry from '../lib/registry'

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: `Robyn + Alex's Wedding`,
  description:
    'September 2025',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledJsxRegistry>
          {children}
        </StyledJsxRegistry>
      </body>
    </html>
  )
}
