'use client'

import React, { useState, useEffect } from 'react'
import { getAllGuests } from '@/app/api'
import InsertGuestsForm from '@/components/uploadGuests.jsx'
import GuestlistTable from '@/components/guestlist-table.jsx'
import GuestlistMenuTableWithDrag from '@/components/GuestlistMenuTableWithDrag.jsx'
import Stats from './Stats'
import { Button } from '@/components/button'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 800px) {
    padding: 1rem;
  }
`

const ShowingGuestInfo = styled.span`
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6rem;
  letter-spacing: 1px;
  margin-bottom: 0.2rem;
`

const Client = ({ guestlistData = [] }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(guestlistData)
  const [filters, setFilters] = useState({
    attending: 'Yes', // values: 'Yes', 'No', 'all'
    invited: 'all' // values: TRUE/FALSE
  })

  const fetchGuestlist = async () => {
    setLoading(true)
    try {
      // const query = new URLSearchParams(filters).toString()
      const res = await fetch(`/api/guestlist`, { cache: 'no-store' })

      if (!res.ok) throw new Error('Failed to fetch guestlist')

      const dataFromApi = await res.json()
      const sortedData = dataFromApi.sort((a, b) => a.id - b.id)
      setData(sortedData)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!!filters?.attending) {
      fetchGuestlist(filters)
    }
  }, [filters])

  return (
    <>
      <Stats guestlistData={data} loading={loading} />
      <ButtonContainer>
        <ShowingGuestInfo>
          {filters?.attending === 'Yes' ? 'Showing confirmed guests' : 'Showing all guests'}
        </ShowingGuestInfo>
        <Button
          onClick={() =>
            setFilters((prevFilters) => ({ ...prevFilters, attending: filters.attending === 'Yes' ? 'all' : 'Yes' }))
          }
          text={filters?.attending === 'Yes' ? 'Show all' : 'Hide declined and uninvited'}
          style={{ marginTop: '0' }}
        />
      </ButtonContainer>
      {/* <GuestlistTable guestlistData={data} loading={loading} /> */}
      <GuestlistMenuTableWithDrag guestlistData={data} loading={loading} fetchGuestlist={fetchGuestlist} />
    </>
  )
}

export default Client
