'use client'

import { useState } from 'react'
import Table from '@/components/table.jsx'
import Search from '@/components/search-two.jsx'
import HideImage from "../../components/hide-img"
import Turrent from "@/public/images/image2 1.png"
import Kenya from "@/public/images/kenya-circle.png"

export const RsvpClient = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [editingGuestId, setEditingGuestId] = useState(null)

  return (
    <div className={`rsvp-container`}>
      <HideImage
        src={Kenya}
        alt="Kenya"
        fill={true}
        isVisible={!searchTerm}
        isShrinkable
      />
      <h1>R.S.V.P.</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} editingGuestId={editingGuestId} />
      <Table searchTerm={searchTerm} editingGuestId={editingGuestId} setEditingGuestId={setEditingGuestId} />
    </div>
  )
}

export default RsvpClient;