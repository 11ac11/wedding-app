'use client'

import React, { useState, useEffect } from 'react'
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import styled from 'styled-components'
import GuestMenuTableRow from './GuestMenuTableRow'
import GuestlistTableMenuTotals from './GuestlistTableMenuTotals'
import CircularTable from '@/components/CircularTable'

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
  width: 100%;
  ${uppercaseStyles}
`

const OverviewContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const GuestListTable = styled.table`
  border-collapse: collapse;
  width: 800px;
  display: block;
  overflow-x: auto;

  & td {
    max-width: 200px;
  }

  & > tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  & th {
    white-space: nowrap;
    font-size: 0.7rem;
    padding: 0.1rem 0.5rem;
    ${uppercaseStyles}
    text-align: left;
    font-size: 0.8rem;
  }

  & th:first-of-type,
  td:first-of-type {
    width: 10px;
    padding: 0.1rem 0.1rem;
  }

  .name-cell {
    width: 200px;
    max-width: 200px;
  }

  .dietary-cell {
    width: 300px;
    max-width: 300px;
    word-wrap: normal;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 2rem);

    & th,
    td {
      font-size: 0.7rem;
    }

    .name-cell {
      width: 120px;
      max-width: 120px;
    }

    .dietary-cell {
      width: 200px;
      max-width: 200px;
    }
  }
`

const GuestlistMenuTableWithDrag = ({ guestlistData, loading, fetchGuestlist }) => {
  const [data, setData] = useState(guestlistData)

  console.log('data:', data)

  const sensors = useSensors(useSensor(PointerSensor))

  const groupByTable = (guests) =>
    guests.reduce((acc, guest) => {
      const table = guest.table_number || 'Unassigned'
      if (!acc[table]) acc[table] = []
      acc[table].push(guest)
      return acc
    }, {})

  const grouped = groupByTable(data)

  // Sort tables: "principal" comes first
  const sortedEntries = Object.entries(grouped).sort(([a], [b]) => {
    if (a.toLowerCase() === 'principal') return -1
    if (b.toLowerCase() === 'principal') return 1
    return 0
  })

  const handleDragEnd = async (event, tableNumber) => {
    const { active, over } = event
    if (!over || active.id === over.id) return

    // Get the current table guests
    const tableGuests = data.filter((g) => g.table_number === tableNumber)
    const oldIndex = tableGuests.findIndex((g) => g.id === active.id)
    const newIndex = tableGuests.findIndex((g) => g.id === over.id)

    // Reorder and assign seat_number
    const updatedGuests = arrayMove([...tableGuests], oldIndex, newIndex).map((g, i) => ({
      ...g,
      seat_number: i + 1
    }))

    console.log('updatedGuests:', updatedGuests)

    // Update state immutably: replace only this table's guests
    setData((prev) => [...prev.filter((g) => g.table_number !== tableNumber), ...updatedGuests])

    console.log('data in function:', data)

    try {
      // Persist to DB
      await Promise.all(
        updatedGuests.map((guest) =>
          fetch(`/api/guest/${guest.id}/seat`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ seat_number: guest.seat_number })
          })
        )
      )
    } catch (err) {
      console.error('Failed to update seat numbers', err)
    }
  }

  useEffect(() => {
    console.log('data:', data)
  }, [data])

  // Prepare sorted tables and guests
  const sortedTables = Object.values(
    data.reduce((acc, g) => {
      if (!acc[g.table_number]) acc[g.table_number] = { table_number: g.table_number, guests: [] }
      acc[g.table_number].guests.push(g)
      return acc
    }, {})
  )
    .sort((a, b) => a.table_number - b.table_number) // sort tables
    .map((table) => ({
      ...table,
      guests: table.guests
        .slice()
        .sort((a, b) => (Number(a.seat_number) || Infinity) - (Number(b.seat_number) || Infinity)) // sort guests
    }))

  return (
    <>
      {sortedTables.map((table) => {
        return (
          <TableContainer key={table.table_number}>
            <TableNumberTitle>
              Mesa {table.table_number} ({table.guests.length})
            </TableNumberTitle>
            <OverviewContainer>
              <GuestlistTableMenuTotals guestTableData={table.guests} />
              <CircularTable
                seats={table.guests.length}
                tableDiameter={table.table_number === 'principal' ? 20 : 50}
                seatDiameter={20}
                gap={10}
                label={table.table_number}
                isPrincipal={table.table_number === 'principal'}
              />
            </OverviewContainer>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={(event) => handleDragEnd(event, table.table_number)}
            >
              <GuestListTable>
                <thead>
                  <tr>
                    <th></th>
                    <th
                      style={{
                        width: '50px',
                        maxWidth: '50px',
                        whiteSpace: 'nowrap',
                        padding: '0 0',
                        textAlign: 'center'
                      }}
                    >
                      #
                    </th>
                    <th className="name-cell">Nombre</th>
                    <th>Primero</th>
                    <th>Segundo</th>
                    <th className="dietary-cell">Restricciones/Notas</th>
                  </tr>
                </thead>
                <SortableContext items={table.guests.map((g) => g.id)} strategy={verticalListSortingStrategy}>
                  <tbody>
                    {table.guests.map((guest) => (
                      <SortableRow key={guest.id} guest={guest} loading={loading} fetchGuestlist={fetchGuestlist} />
                    ))}
                  </tbody>
                </SortableContext>
              </GuestListTable>
            </DndContext>
          </TableContainer>
        )
      })}
    </>
  )
}

function SortableRow({ guest, loading, fetchGuestlist }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: guest.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: isDragging ? '#f0f0f0' : 'transparent'
  }

  return (
    <GuestMenuTableRow
      guest={guest}
      loading={loading}
      fetchGuestlist={fetchGuestlist}
      dragHandleProps={{ ...attributes, ...listeners }}
      ref={setNodeRef}
      style={style}
      $invited={guest.invited}
    />
  )
}

export default GuestlistMenuTableWithDrag
