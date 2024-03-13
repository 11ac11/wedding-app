
import { Suspense } from 'react'
import { getAllGuests } from '../api'
import GuestlistTable from '@/components/guestlist-table.jsx'
import TablePlaceholder from '@/components/table-placeholder'
import { Search } from '/components/Search'

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default async function gueslist({ searchParams }) {
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>Guestlist</h1>
      <GuestlistTable currentPage={currentPage} />
    </main>
  )
}
