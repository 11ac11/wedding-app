'use client'

import { useState } from 'react'
import Table from '@/components/table.jsx'
import { Search } from '/components/Search'
import HideImage from "../../components/hide-img"
import Turrent from "../../public/images/image2 1.png"

export const Rsvp = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className={`rsvp-container`}>
        <HideImage
          src={Turrent}
          alt="Turrent"
          fill={true}
          width="400px"
          isVisible={!searchTerm}
          isShrinkable
        />
        <h1>R.S.V.P.</h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Table query={searchTerm || ''} />
      </div>
    </main>
  )
}

export default Rsvp;