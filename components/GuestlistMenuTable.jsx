'use client'

import styled from 'styled-components'

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
    min-width: 100px;
  }

  & th:first-of-type,
  td:first-of-type {
    width: 10px;
    padding: 0.1rem 0.1rem;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 2rem); // Adjusts based on viewport width
  }
`

const StyledRow = styled.tr`
  ${({ $invited }) => !$invited && 'opacity: 0.2;'}

  & > td {
    min-width: 20px;
    max-width: 20px;
  }
`

const GuestlistMenuTable = ({ guests }) => {
  const ColoredCircle = ({ color }) => (
    <span
      style={{
        display: 'inline-block',
        width: '1em',
        height: '1em',
        borderRadius: '50%',
        backgroundColor: color,
        marginLeft: '0.25em'
      }}
    />
  )

  const starterChoices = (value) => {
    if (value) {
      const lowerCaseValue = value.toLowerCase()
      switch (true) {
        case lowerCaseValue.includes('duck'):
          return (
            <>
              <ColoredCircle color="#959172" /> <span>pato</span>
            </>
          )
        case lowerCaseValue.includes('salmon'):
          return (
            <>
              <ColoredCircle color="#FFBCBF" /> <span>salmon</span>
            </>
          )
        case lowerCaseValue.includes('veg'):
          return (
            <>
              <ColoredCircle color="#A8E7A9" /> <span>ensalada</span>
            </>
          )
        case lowerCaseValue.includes('pasta'):
          return (
            <>
              <ColoredCircle color="#FBEA62" /> <span>pasta</span>
            </>
          )
        default:
          return '-'
      }
    }
    return '-'
  }

  const mainChoices = (value) => {
    if (value) {
      const lowerCaseValue = value.toLowerCase()
      switch (true) {
        case lowerCaseValue.includes('duck'):
          return (
            <>
              <ColoredCircle color="#9C709F" /> <span>pato</span>
            </>
          )
        case lowerCaseValue.includes('hake'):
          return (
            <>
              <ColoredCircle color="#CCEDFF" /> <span>merluza</span>
            </>
          )
        case lowerCaseValue.includes('paella'):
          return (
            <>
              <ColoredCircle color="#F4AC69" /> <span>paella</span>
            </>
          )
        case lowerCaseValue.includes('chicken'):
          return (
            <>
              <ColoredCircle color="#5A6CE3" /> <span>pollo</span>
            </>
          )
        default:
          return '-'
      }
    }
    return '-'
  }

  const renderRowsMenus = (guests) => {
    return guests.map((guest) => {
      const { name, starter, main, dietary_requirements, is_under_14, invited } = guest

      return (
        <StyledRow key={name} $invited={!!invited}>
          <td style={{ minWidth: '150px' }}>{loading ? '-' : name}</td>
          <td>{loading ? '-' : starterChoices(starter)}</td>
          <td>{loading ? '-' : mainChoices(main)}</td>
          <td>{loading ? '-' : !!dietary_requirements ? `⚠️ ${dietary_requirements}` : '-'}</td>
          <td>{loading ? '-' : is_under_14 ? '✅' : ''}</td>
        </StyledRow>
      )
    })
  }

  return (
    <GuestListTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>1st</th>
          <th>2nd</th>
          <th>Diet.</th>
        </tr>
      </thead>
      <tbody>{renderRowsMenus(guests)}</tbody>
    </GuestListTable>
  )
}

export default GuestlistMenuTable
