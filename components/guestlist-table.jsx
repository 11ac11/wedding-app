'use client'

import React from 'react'
import InsertGuestsForm from '@/components/uploadGuests.jsx'
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

const GuestlistTable = ({ guestlistData = [], loading }) => {
  const handleDelete = async (event) => {
    // TODO: fix this so the event passes the id
    e.preventDefault()

    try {
      const response = await deleteGuest(guest.id)
      if (!!response) {
        console.log('Guest deleted successfully')
        // Handle success, e.g., show a success message
      } else {
        console.error('Failed to delete guest:', response.statusText)
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error deleting guests:', error.message)
      // Handle error, e.g., show an error message
    }
  }

  const yesNoMaybe = (value) => {
    switch (value) {
      case 'Yes' || true:
        return '✅'
      case true:
        return '✅'
      case 'No':
        return '❌'
      case false:
        return '❌'
      case 'Maybe':
        return '🤔'
      default:
        return '?'
    }
  }

  const starterChoices = (value) => {
    if (value) {
      const lowerCaseValue = value.toLowerCase()
      switch (true) {
        case lowerCaseValue.includes('duck'):
          return '🦆'
        case lowerCaseValue.includes('salmon'):
          return '🐟'
        case lowerCaseValue.includes('veg'):
          return '🥗'
        case lowerCaseValue.includes('pasta'):
          return '🍝'
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
          return '🦆'
        case lowerCaseValue.includes('hake'):
          return '🐟'
        case lowerCaseValue.includes('paella'):
          return '🥘'
        case lowerCaseValue.includes('chicken'):
          return '🍗'
        default:
          return '-'
      }
    }
    return '-'
  }

  const renderRows = (sortedData) => {
    return sortedData.map((guest, index) => {
      const {
        id,
        name,
        guestlist,
        attending,
        starter,
        main,
        dietary_requirements,
        accommodation,
        sten,
        is_under_14,
        has_amended,
        last_amended,
        invited
      } = guest

      return (
        <StyledRow key={name} $invited={!!invited}>
          <td style={{ textAlign: 'right' }}>{index + 1}</td>
          <td style={{ minWidth: '150px' }}>{loading ? '-' : name}</td>
          <td style={{ padding: '0', textAlign: 'center' }}>{loading ? '-' : id}</td>
          <td style={{ minWidth: '35px', padding: '0 0.5rem' }}>{loading ? '-' : guestlist}</td>
          <td>{loading ? '-' : yesNoMaybe(attending)}</td>
          <td>{loading ? '-' : starterChoices(starter)}</td>
          <td>{loading ? '-' : mainChoices(main)}</td>
          <td>{loading ? '-' : !!dietary_requirements ? '⚠️' : '-'}</td>
          <td>{loading ? '-' : yesNoMaybe(accommodation)}</td>
          <td>{loading ? '-' : yesNoMaybe(sten)}</td>
          <td>{loading ? '-' : is_under_14 ? '✅' : ''}</td>
          <td>{loading ? '-' : !!last_amended && last_amended.toISOString().substring(0, 10)}</td>
          {/* <td><button onClick={(e) => handleDelete(e)}>X</button></td> */}
        </StyledRow>
      )
    })
  }

  const renderDietary = (guests) => {
    const guestsWithDietaryReqs = guests.filter((guest) => !!guest.dietary_requirements)
    return guestsWithDietaryReqs.map((guest, index) => {
      const { name, dietary_requirements } = guest
      return (
        <StyledRow key={index} $invited={true}>
          <td style={{ textAlign: 'left', fontSize: '0.8rem', minWidth: '150px' }}>{name}</td>
          <td style={{ maxWidth: '100%', fontSize: '0.8rem' }}>{dietary_requirements}</td>
        </StyledRow>
      )
    })
  }

  return (
    <>
      {/* <InsertGuestsForm /> */}
      <GuestListTable>
        <thead>
          <tr>
            <th style={{ textAlign: 'right' }}>#</th>
            <th>Name</th>
            <th>id</th>
            <th>G/L</th>
            <th>Att.</th>
            <th>1st</th>
            <th>2nd</th>
            <th>Diet.</th>
            <th>Accom.</th>
            <th>STEN</th>
            <th>Child</th>
            <th>Last amend.</th>
          </tr>
        </thead>
        <tbody>{renderRows(guestlistData)}</tbody>
      </GuestListTable>
      <GuestListTable style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Name</th>
            <th>Dietary Req.</th>
          </tr>
        </thead>
        <tbody>{renderDietary(guestlistData)}</tbody>
      </GuestListTable>
    </>
  )
}

export default GuestlistTable
