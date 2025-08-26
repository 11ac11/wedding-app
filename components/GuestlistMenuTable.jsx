'use client'

import React from 'react'
import styled from 'styled-components'
import GuestMenuTableRow from './GuestMenuTableRow'

const uppercaseStyles = `
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const TableNumberTitle = styled.h2`
  align-self: flex-start;
  ${uppercaseStyles}
`

const BothCountsContainer = styled.div`
  display: flex;
  align-self: flex-start;
  margin: 1rem 0 2rem;
  flex-wrap: wrap;
  gap: 2rem;
  border: 1px solid var(--slategrey);
  border-radius: 2px;
  padding: 1rem;
`

const TableMenuCountContainer = styled.div`
  display: flex;
  font-size: 0.8rem;

  & > div {
    width: 120px;
  }
`

const MealCourseTitle = styled.div`
  width: 90%;
  ${uppercaseStyles}
`

const MenuLabel = styled.div`
  opacity: ${({ $count }) => ($count === 0 ? '0.25' : '1')};
  font-weight: ${({ $count }) => ($count === 0 ? '200' : '400')};
`

const GuestListTable = styled.table`
  border-collapse: collapse;
  width: 800px;
  display: block;
  overflow-x: auto;

  & > tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  & th {
    white-space: nowrap;
    font-size: 0.7rem;
    padding: 0.1rem 1rem;
    ${uppercaseStyles}
    text-align: left;
    padding: 0.1rem 1rem;
    font-size: 0.8rem;
  }

  & th:first-of-type,
  td:first-of-type {
    width: 10px;
    padding: 0.1rem 0.1rem;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 2rem);

    & th,
    td {
      font-size: 0.7rem;
      min-width: 100px;
    }
  }
`

const GuestlistMenuTable = ({ guestlistData, loading, fetchGuestlist }) => {
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

  const renderGuestRow = (guest) => {
    return (
      <GuestMenuTableRow
        key={guest.id}
        guest={guest}
        loading={loading}
        starterChoices={starterChoices}
        mainChoices={mainChoices}
        fetchGuestlist={fetchGuestlist}
      />
    )
  }

  const renderRowsMenus = (guestlistData) => guestlistData.map(renderGuestRow)

  const countChoices = (guests, type) => {
    return guests.reduce((acc, guest) => {
      const { label, color } = normalizeChoice(guest[type], type)
      if (label === '-') return acc
      if (!acc[label]) acc[label] = { count: 0, color }
      acc[label].count += 1
      return acc
    }, {})
  }

  const groupByTable = (guestlistData) =>
    guestlistData.reduce((acc, guest) => {
      const table = guest.table_number || 'Unassigned'
      if (!acc[table]) acc[table] = []
      acc[table].push(guest)
      return acc
    }, {})

  const renderGroupedTables = (guestlistData) => {
    const grouped = groupByTable(guestlistData)

    // Convert to array & sort so "principal" comes first
    const sortedEntries = Object.entries(grouped).sort(([a], [b]) => {
      if (a.toLowerCase() === 'principal') return -1
      if (b.toLowerCase() === 'principal') return 1
      return 0 // keep other order as-is
    })

    return sortedEntries.map(([tableNumber, guests]) => {
      // Sort by seat_number
      guests.sort((a, b) => {
        const seatA = a.seat_number ? Number(a.seat_number) : Infinity
        const seatB = b.seat_number ? Number(b.seat_number) : Infinity
        return seatA - seatB
      })

      const starterCounts = countChoices(guests, 'starter')
      const mainCounts = countChoices(guests, 'main')

      const STARTER_ORDER = [
        { label: 'pato', color: '#959172' },
        { label: 'salmon', color: '#FFBCBF' },
        { label: 'vegetales', color: '#A8E7A9' },
        { label: 'pasta (niño)', color: '#FBEA62' }
      ]

      const MAIN_ORDER = [
        { label: 'pato', color: '#9C709F' },
        { label: 'merluza', color: '#CCEDFF' },
        { label: 'paella', color: '#F4AC69' },
        { label: 'pollo (niño)', color: '#5A6CE3' }
      ]

      return (
        <TableContainer key={tableNumber}>
          <TableNumberTitle>
            Mesa {tableNumber} ({guests.length} {guests.length === 1 ? 'persona' : 'personas'})
          </TableNumberTitle>
          <BothCountsContainer>
            {/* Starter counts */}
            <TableMenuCountContainer>
              <MealCourseTitle>
                <strong>Primeros:</strong>
              </MealCourseTitle>
              <div>
                {STARTER_ORDER.map(({ label, color }) => {
                  const count = starterCounts[label]?.count || 0
                  return (
                    <MenuLabel key={label} $count={count}>
                      <ColoredCircle color={color} /> {label}: {count}
                    </MenuLabel>
                  )
                })}
              </div>
            </TableMenuCountContainer>
            {/* Main counts */}
            <TableMenuCountContainer>
              <MealCourseTitle>
                <strong>Segundos:</strong>
              </MealCourseTitle>
              <div>
                {MAIN_ORDER.map(({ label, color }) => {
                  const count = mainCounts[label]?.count || 0
                  return (
                    <MenuLabel key={label} $count={count}>
                      <ColoredCircle color={color} /> {label}: {count}
                    </MenuLabel>
                  )
                })}
              </div>
            </TableMenuCountContainer>
          </BothCountsContainer>
          <GuestListTable>
            <thead>
              <tr>
                <th style={{ minWidth: '50px', textAlign: 'center' }}>#</th>
                <th>Nombre</th>
                <th>Primero</th>
                <th>Segundo</th>
                <th style={{ width: '300px' }}>Restricciones dietéticas</th>
                <th style={{ minWidth: '50px' }}>Mesa #</th>
              </tr>
            </thead>
            <tbody>{renderRowsMenus(guests)}</tbody>
          </GuestListTable>
        </TableContainer>
      )
    })
  }

  return <div>{renderGroupedTables(guestlistData)}</div>
}

export default GuestlistMenuTable
