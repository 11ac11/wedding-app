import GuestlistTable from '@/components/guestlist-table.jsx'

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: `Guestlist`,
  appleWebApp: {
    title: `Robyn + Alex's Wedding`,
    statusBarStyle: 'black-translucent'
  }
}

export default async function Guestlist({}) {
  return (
    <main>
      <h1>Guestlist</h1>
      <GuestlistTable />
    </main>
  )
}
