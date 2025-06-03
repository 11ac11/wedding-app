import React from 'react'
import PageInfo from './page-info'

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: `Itinerary`,
  appleWebApp: {
    title: `Robyn + Alex's Wedding`,
    statusBarStyle: 'black-translucent'
  }
}

export default async function Itinerary() {
  return (
    <main>
      <PageInfo />
    </main>
  )
}
