import { Suspense } from 'react'
import { getAllGuests, searchGuests } from '../api'
import Table from '@/components/table.jsx'
import { Search } from '/components/Search'
import HideImage from "../../components/hide-img"
import Turrent from "../../public/images/image2 1.png"

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default async function RSVP({ searchParams }) {

  // const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;

  const returnQuery = (query) => {
    return query
  }


  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className={`rsvp-container`}>
        <HideImage
          src={Turrent}
          alt="Turrent"
          fill={true}
          width="400px"
          isVisible={!returnQuery()}
          isShrinkable
        />
        <h1>R.S.V.P.</h1>
        <Search />
      </div>
    </main>
  )
}
