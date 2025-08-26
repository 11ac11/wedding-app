import React from 'react'
import Client from './Client'
import { getAllGuests } from '@/app/api' // your API function

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: `Guestlist`,
  appleWebApp: {
    title: `Robyn + Alex's Wedding`,
    statusBarStyle: 'black-translucent'
  }
}

export default async function Guestlist() {
  // Fetch data on the server
  const filters = { attending: 'Yes', invited: 'all' }
  const dataFromApi = await getAllGuests(filters)
  const sortedData = dataFromApi.sort((a, b) => a.id - b.id)
  return (
    <main>
      <h1>Guestlist</h1>
      <Client guestlistData={sortedData} />
    </main>
  )
}
