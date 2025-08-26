'use client'

import React from 'react'
import styled from 'styled-components'

const uppercaseStyles = `
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
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

const GuestlistMenuTableTotals = ({ guestTableData, loading }) => {
  const normalizeChoice = (value, type) => {
    if (!value) return { label: '-', color: null }
    const lower = value.toLowerCase()

    if (type === 'starter') {
      if (lower.includes('duck')) return { label: 'pato', color: '#959172' }
      if (lower.includes('salmon')) return { label: 'salmon', color: '#FFBCBF' }
      if (lower.includes('veg')) return { label: 'vegetales', color: '#A8E7A9' }
      if (lower.includes('pasta')) return { label: 'pasta (niño)', color: '#FBEA62' }
    }

    if (type === 'main') {
      if (lower.includes('duck')) return { label: 'pato', color: '#9C709F' }
      if (lower.includes('hake')) return { label: 'merluza', color: '#CCEDFF' }
      if (lower.includes('paella')) return { label: 'paella', color: '#F4AC69' }
      if (lower.includes('chicken')) return { label: 'pollo (niño)', color: '#5A6CE3' }
    }

    return { label: 'otro', color: null }
  }

  const countChoices = (guests, type) => {
    return guests.reduce((acc, guest) => {
      const { label, color } = normalizeChoice(guest[type], type)
      if (label === '-') return acc
      if (!acc[label]) acc[label] = { count: 0, color }
      acc[label].count += 1
      return acc
    }, {})
  }

  const starterCounts = countChoices(guestTableData, 'starter')
  const mainCounts = countChoices(guestTableData, 'main')

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
    <BothCountsContainer>
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
  )
}

export default GuestlistMenuTableTotals
