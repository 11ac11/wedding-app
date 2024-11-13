import GuestlistTable from '@/components/guestlist-table.jsx'

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: `Robyn + Alex's Wedding`,
  description: '5 September 2025',
  appleWebApp: {
    title: `Robyn + Alex's Wedding`,
    statusBarStyle: 'black-translucent',
  },
}

export default async function Guestlist({ }) {

  return (
    <main>
      <h1>Guestlist</h1>
      <GuestlistTable />
    </main>
  )
}
