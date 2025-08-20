'use client'

import styled from 'styled-components'

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const TableNumberTitle = styled.h3`
  font-weight: 400;
  letter-spacing: 0;
  text-decoration: underline;
  align-self: flex-start;
`

const BothCountsContainer = styled.div`
  display: flex;
  align-self: flex-start;
  margin: 1rem 0 2rem;
  flex-wrap: wrap;
`

const TableMenuCountContainer = styled.div`
  display: flex;
  font-size: 0.8rem;

  & > div {
    width: 120px;
  }
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
  }

  & th,
  td {
    text-align: left;
    padding: 0.1rem 1rem;
    font-size: 0.8rem;
    min-width: 150px;
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

const StyledRow = styled.tr`
  ${({ $invited }) => !$invited && 'opacity: 0.2;'}

  & > td {
    min-width: 20px;
    max-width: 20px;
  }
`

const GuestlistMenuTable = ({ guestlistData, loading }) => {
  const ColoredCircle = ({ color }) => (
    <span
      style={{
        display: 'inline-block',
        width: '1em',
        height: '1em',
        borderRadius: '50%',
        backgroundColor: color
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
    const { name, starter, main, dietary_requirements, invited } = guest
    return (
      <StyledRow key={name} $invited={!!invited}>
        <td style={{ minWidth: '150px' }}>{loading ? '-' : name}</td>
        <td>{loading ? '-' : starterChoices(starter)}</td>
        <td>{loading ? '-' : mainChoices(main)}</td>
        <td style={{ width: '400px' }}>{loading ? '-' : dietary_requirements ? `⚠️ ${dietary_requirements}` : '-'}</td>
      </StyledRow>
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
      const starterCounts = countChoices(guests, 'starter')
      const mainCounts = countChoices(guests, 'main')

      return (
        <TableContainer key={tableNumber}>
          <TableNumberTitle>
            Mesa {tableNumber} ({guests.length} {guests.length === 1 ? 'persona' : 'personas'})
          </TableNumberTitle>
          <BothCountsContainer>
            {/* Starter counts */}
            <TableMenuCountContainer>
              <div style={{ width: '80px' }}>
                <strong>Primeros:</strong>
              </div>
              <div>
                {Object.entries(starterCounts)
                  .sort(([a], [b]) => a.localeCompare(b)) // ✅ alphabetical by label
                  .map(([label, { count, color }]) => (
                    <div key={label}>
                      <span>
                        <ColoredCircle color={color} /> {label}: {count}
                      </span>
                    </div>
                  ))}
              </div>
            </TableMenuCountContainer>
            {/* Main counts */}
            <TableMenuCountContainer>
              <div style={{ width: '80px' }}>
                <strong>Segundos:</strong>
              </div>
              <div>
                {Object.entries(mainCounts)
                  .sort(([a], [b]) => a.localeCompare(b)) // ✅ alphabetical by label
                  .map(([label, { count, color }]) => (
                    <div key={label}>
                      <span>
                        <ColoredCircle color={color} /> {label}: {count}
                      </span>
                    </div>
                  ))}
              </div>
            </TableMenuCountContainer>
          </BothCountsContainer>
          <GuestListTable>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Primero</th>
                <th>Segundo</th>
                <th style={{ width: '400px' }}>Restricciones dietéticas</th>
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
