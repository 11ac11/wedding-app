import RsvpClient from './rsvp-client.jsx'

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: `RSVP`,
  appleWebApp: {
    title: `Robyn + Alex's Wedding`,
    statusBarStyle: 'black-translucent',
  },
}

export default async function Rsvp() {
  return (
    <main>
      <RsvpClient />
    </main>
  )
}