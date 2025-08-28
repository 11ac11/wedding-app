'use client'

import React from 'react'
import { forwardRef, useState } from 'react'
import styled from 'styled-components'
import { updateGuestSeatPosition } from '@/app/api'
import { Input } from './input'

const StyledRow = styled.tr`
  ${({ $isBaby }) => $isBaby && 'background-color: #ffe598;'}
  ${({ $hasSpeech }) => $hasSpeech && 'background-color: #d1d4ff;'}
  & > td {
    min-width: 20px;
    max-width: 20px;
    padding: 0;
  }

  & td {
    padding: 0;
    text-align: left;
    padding: 0.1rem 0.5rem;
    font-size: 0.8rem;
  }

  & > td > div > div > input {
    padding: 0.1rem 0.5rem;
    height: unset;
    caret-color: unset;
    font-size: 0.8rem;
  }
`

const GuestMenuTableRow = forwardRef(({ guest, loading, fetchGuestlist, style, dragHandleProps }, ref) => {
  const [updating, setUpdating] = useState(false)
  const [tableNumber, setTableNumber] = useState(guest.table_number)
  const [isEditMode, setIsEditMode] = useState(false)

  const ColoredCircle = ({ color, count }) => (
    <span
      style={{
        display: 'inline-block',
        width: '1em',
        height: '1em',
        borderRadius: '50%',
        backgroundColor: color,
        opacity: !!count && count === '0' ? '0.25' : '1'
      }}
    />
  )

  const normalizeChoice = (value, type) => {
    if (!value) return { label: '-', color: null }
    const lower = value.toLowerCase()

    if (type === 'starter') {
      if (lower.includes('duck')) return { label: 'pato', color: '#959172' }
      if (lower.includes('salmon')) return { label: 'salmon', color: '#FFBCBF' }
      if (lower.includes('veg')) return { label: 'vegetales', color: '#A8E7A9' }
      if (lower.includes('pasta')) return { label: 'pasta', color: '#FBEA62' }
    }

    if (type === 'main') {
      if (lower.includes('duck')) return { label: 'pato', color: '#9C709F' }
      if (lower.includes('hake')) return { label: 'merluza', color: '#CCEDFF' }
      if (lower.includes('paella')) return { label: 'paella', color: '#F4AC69' }
      if (lower.includes('chicken')) return { label: 'pollo', color: '#5A6CE3' }
    }

    return { label: 'otro', color: null }
  }

  const starterChoices = (value) => {
    const { label, color } = normalizeChoice(value, 'starter')
    if (label === '-') return '-'
    return (
      <>
        <ColoredCircle color={color} /> <span>{label}</span>
      </>
    )
  }

  const mainChoices = (value) => {
    const { label, color } = normalizeChoice(value, 'main')
    if (label === '-') return '-'
    return (
      <>
        <ColoredCircle color={color} /> <span>{label}</span>
      </>
    )
  }

  const handleTableUpdate = async () => {
    if (tableNumber !== guest.table_number) {
      try {
        setUpdating(true)
        await updateGuestSeatPosition(guest.id, guest.seat_number || null)
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
    <StyledRow
      ref={ref}
      style={style}
      $isBaby={guest.name.includes('bebe')}
      $hasSpeech={
        guest.name.includes('Keady') ||
        guest.name.includes('Danny') ||
        guest.name.includes('Alex Crump') ||
        guest.name.includes('Georgia')
      }
    >
      <td {...dragHandleProps} style={{ cursor: 'grab' }}>
        ☰
      </td>
      <td style={{ padding: '0 0', textAlign: 'center' }}>{guest.seat_number}</td>
      <td className="name-cell">{loading ? '-' : guest.name}</td>
      <td>{loading ? '-' : starterChoices(guest.starter)}</td>
      <td>{loading ? '-' : mainChoices(guest.main)}</td>
      <td className="dieatary-cell">
        {loading ? '-' : guest.dietary_requirements ? `⚠️ ${guest.dietary_requirements}` : '-'}
      </td>
      {/* <td onClick={() => setIsEditMode(!isEditMode)} style={{ cursor: 'pointer', padding: '0 0', minWidth: '85px' }}>
        {isEditMode ? (
          <Input
            type="text"
            value={tableNumber || ''}
            disabled={updating}
            onChange={(e) => setTableNumber(e.target.value)}
            onBlur={handleTableUpdate}
          />
        ) : guest.table_number === 'principal' ? (
          'Principal'
        ) : (
          guest.table_number
        )}
      </td> */}
    </StyledRow>
  )
})

GuestMenuTableRow.displayName = 'GuestMenuTableRow'

export default GuestMenuTableRow
