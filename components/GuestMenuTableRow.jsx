'use client'

import { useState } from 'react'
import styled from 'styled-components'
import { updateGuestSeating } from '@/app/api'
import { Input } from './input'

const StyledRow = styled.tr`
  ${({ $invited }) => !$invited && 'opacity: 0.2;'}
  & > td {
    min-width: 20px;
    max-width: 20px;
    padding: 0;
  }

  & td {
    padding: 0;
    text-align: left;
    padding: 0.1rem 1rem;
    font-size: 0.8rem;
  }

  & input {
    padding: 0.1rem 0.5rem;
    height: unset;
    caret-color: unset;
  }
`

const GuestMenuTableRow = ({ guest, loading, starterChoices, mainChoices, fetchGuestlist }) => {
  const [updating, setUpdating] = useState(false)
  const [tableNumber, setTableNumber] = useState(guest.table_number)
  const [seatNumber, setSeatNumber] = useState(guest.seat_number)
  const [isEditMode, setIsEditMode] = useState(false)

  const handleSeatUpdate = async (tableNumber, seatNumber) => {
    if (tableNumber !== guest.table_number || seatNumber !== guest.seat_number) {
      try {
        setUpdating(true)
        await updateGuestSeating(guest.id, tableNumber || '', seatNumber || null)
        await fetchGuestlist()
        setIsEditMode(false)
      } catch (err) {
        console.error('Seat update failed', err)
      } finally {
        setUpdating(false)
      }
    }
  }

  return (
    <StyledRow key={guest.id} $invited={!!guest.invited}>
      <td style={{ minWidth: '150px' }}>{loading ? '-' : guest.name}</td>
      <td>{loading ? '-' : starterChoices(guest.starter)}</td>
      <td>{loading ? '-' : mainChoices(guest.main)}</td>
      <td style={{ width: '400px' }}>
        {loading ? '-' : guest.dietary_requirements ? `⚠️ ${guest.dietary_requirements}` : '-'}
      </td>
      <td style={{ width: '50px' }}>
        {isEditMode ? (
          <Input
            type="text"
            value={tableNumber || ''}
            style={{ width: '60px' }}
            disabled={updating}
            onChange={(val) => setTableNumber(val)}
            onBlur={() => handleSeatUpdate(tableNumber, seatNumber)}
          />
        ) : (
          guest.table_number
        )}
      </td>
      <td style={{ width: '50px' }}>
        {isEditMode ? (
          <Input
            type="number"
            value={seatNumber || ''}
            style={{ width: '60px' }}
            disabled={updating}
            onChange={(val) => setSeatNumber(val)}
            onBlur={() => handleSeatUpdate(tableNumber, seatNumber)}
          />
        ) : (
          guest.seat_number
        )}
      </td>
      <td onClick={() => setIsEditMode(!isEditMode)} style={{ padding: '0', cursor: 'pointer' }}>
        {isEditMode ? 'save' : 'edit'}
      </td>
    </StyledRow>
  )
}

export default GuestMenuTableRow
