
import { Suspense } from 'react'
import { getAllGuests, searchGuests } from '../api'
import Table from '@/components/table.jsx'
import TablePlaceholder from '@/components/table-placeholder'
import { Search } from '/components/Search'

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default async function RSVP({ searchParams }) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>R.S.V.P.</h1>
      <Search onSearch={searchGuests}/>
      <Suspense fallback={<TablePlaceholder />}>
        <Table query={query} currentPage={currentPage}/>
      </Suspense>
    </main>
  )
}
