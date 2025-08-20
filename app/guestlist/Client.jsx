'use client'

import React, { useState, useEffect } from 'react'
import { getAllGuests } from '@/app/api'
import InsertGuestsForm from '@/components/uploadGuests.jsx'
import GuestlistTable from '@/components/guestlist-table.jsx'
import GuestlistMenuTable from '@/components/GuestlistMenuTable.jsx'
import Stats from './Stats'
import { Button } from '@/components/button'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 800px) {
    padding: 1rem;
  }
`

const Client = ({ guestlistData = [] }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(guestlistData)
  const [filters, setFilters] = useState({
    attending: 'Yes', // values: 'Yes', 'No', 'all'
    invited: 'all' // values: TRUE/FALSE
  })

  const fetchData = async (filters) => {
    setLoading(true)
    const dataFromApi = await getAllGuests(filters)
    const sortedData = dataFromApi.sort((a, b) => a.id - b.id)
    // console.log(dataFromApi[0])
    setData(sortedData)
    setLoading(false)
  }

  useEffect(() => {
    if (!!filters?.attending) {
      fetchData(filters)
    }
  }, [filters])

  return (
    <>
      <Stats guestlistData={data} loading={loading} />
      <ButtonContainer>
        <span style={{ textAlign: 'left' }}>
          {filters?.attending === 'Yes' ? 'Showing confirmed guests' : 'Showing all guests'}
        </span>
        <Button
          onClick={() =>
            setFilters((prevFilters) => ({ ...prevFilters, attending: filters.attending === 'Yes' ? 'all' : 'Yes' }))
          }
          text={filters?.attending === 'Yes' ? 'Show all' : 'Hide declined and uninvited'}
          style={{ marginTop: '0' }}
        />
      </ButtonContainer>
      {/* <GuestlistTable guestlistData={data} loading={loading} /> */}
      <GuestlistMenuTable guestlistData={data} loading={loading} />
    </>
  )
}

export default Client
