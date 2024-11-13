import './globals.css'
import StyledJsxRegistry from '../lib/registry'

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: `Robyn + Alex's Wedding`,
  description: '5 September 2025',
  appleWebApp: {
    title: `Robyn + Alex's Wedding`,
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/public/images/granada-circle.png',
      {
        url: '/public/images/granada-circle.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
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
