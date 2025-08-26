'use client'

import React, { useMemo } from 'react'
import styled from 'styled-components'

// Container for all stats
const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  justify-content: flex-end;
  width: 100%;
  align-items: stretch;
  @media (max-width: 800px) {
    padding: 1rem;
  }
`

// Generic stat box
const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--slategrey);
  color: var(--white);
  padding: 0.5rem;
  border-radius: 2px;
  text-align: center;
  justify-content: center;
  font-size: 12px;
  flex: 1;
  min-width: 20%;
  font-weight: 400;

  h4 {
    margin: 0 0 0.5rem 0;
  }

  div {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 800px) {
      flex-direction: column;
      gap: 0.25rem;
    }
  }

  p {
    margin: 0;
  }
`

// Menu list for starters/main
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: flex-start;
  justify-content: flex-start;
  margin: auto;
  min-width; 200px
`

// Colored circle component
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

const Stats = ({ guestlistData = [], loading }) => {
  // Generic utility to count items
  const countChoices = (guests, attribute, options) => {
    if (loading) return options.reduce((acc, { label }) => ({ ...acc, [label]: '-' }), {})
    return options.reduce((acc, { label, contains }) => {
      acc[label] = guests.filter((g) => g[attribute]?.includes(contains)).length
      return acc
    }, {})
  }

  // Config for menu items
  const STARTERS = [
    { label: 'pato', contains: 'Duck', color: '#959172' },
    { label: 'salmon', contains: 'Salmon', color: '#FFBCBF' },
    { label: 'vegetales', contains: 'Vegetables', color: '#A8E7A9' }
  ]

  const MAINS = [
    { label: 'pato', contains: 'Duck', color: '#9C709F' },
    { label: 'merluza', contains: 'Hake', color: '#CCEDFF' },
    { label: 'paella', contains: 'Paella', color: '#F4AC69' }
  ]

  const STEN = [
    { label: 'yes', value: 'Yes', color: '#4CAF50' },
    { label: 'maybe', value: 'Maybe', color: '#FFC107' }
  ]

  // Compute counts
  const starterCounts = useMemo(() => countChoices(guestlistData, 'starter', STARTERS), [guestlistData, loading])
  const mainCounts = useMemo(() => countChoices(guestlistData, 'main', MAINS), [guestlistData, loading])
  const stenCounts = useMemo(
    () =>
      STEN.reduce(
        (acc, { label, value }) => ({
          ...acc,
          [label]: loading ? '-' : guestlistData.filter((g) => g.sten === value).length
        }),
        {}
      ),
    [guestlistData, loading]
  )

  const responded = loading ? '-' : guestlistData.filter((g) => ['Yes', 'No'].includes(g.attending)).length
  const invited = loading ? '-' : guestlistData.filter((g) => g.invited).length
  const notResponded = loading ? '-' : invited - responded
  const attendingYes = loading ? '-' : guestlistData.filter((g) => g.attending === 'Yes').length
  const attendingNo = loading ? '-' : guestlistData.filter((g) => g.attending === 'No').length
  const isChild = loading ? '-' : guestlistData.filter((g) => g.is_under_14).length

  return (
    <StatsContainer>
      {/* STEN */}
      <StatBox>
        <h4>STEN</h4>
        <div>
          {STEN.map(({ label, color }) => (
            <p key={label}>
              <ColoredCircle color={color} /> {stenCounts[label]}
            </p>
          ))}
          <p>
            <ColoredCircle color="#ffffff" /> {stenCounts.yes + stenCounts.maybe}
          </p>
        </div>
      </StatBox>

      {/* Starters */}
      <StatBox>
        <h4>Starter</h4>
        <MenuList>
          {STARTERS.map(({ label, color }) => (
            <p key={label}>
              <ColoredCircle color={color} /> {label} {starterCounts[label]}
            </p>
          ))}
        </MenuList>
      </StatBox>

      {/* Mains */}
      <StatBox>
        <h4>Main</h4>
        <MenuList>
          {MAINS.map(({ label, color }) => (
            <p key={label}>
              <ColoredCircle color={color} /> {label} {mainCounts[label]}
            </p>
          ))}
        </MenuList>
      </StatBox>

      {/* Children */}
      <StatBox>
        <h4>Children</h4>
        <div>
          <p>{isChild}</p>
        </div>
      </StatBox>

      {/* Attendance */}
      <StatBox>
        <h4>Resp.</h4>
        <div style={{ alignItems: 'center' }}>
          <p style={{ fontSize: '1.5rem' }}>{responded}</p>
          <p style={{ fontSize: '0.8rem' }}>/{invited}</p>
        </div>
      </StatBox>

      <StatBox>
        <h4>No resp.</h4>
        <div style={{ alignItems: 'center' }}>
          <p style={{ fontSize: '1.5rem' }}>{notResponded}</p>
          <p style={{ fontSize: '0.8rem' }}>/{invited}</p>
        </div>
      </StatBox>

      <StatBox>
        <h4>Conf.</h4>
        <div style={{ alignItems: 'center' }}>
          <p style={{ fontSize: '1.5rem' }}>{attendingYes}</p>
          <p style={{ fontSize: '0.8rem' }}>/{invited}</p>
        </div>
      </StatBox>

      <StatBox>
        <h4>Decl.</h4>
        <div style={{ alignItems: 'center' }}>
          <p style={{ fontSize: '1.5rem' }}>{attendingNo}</p>
          <p style={{ fontSize: '0.8rem' }}>/{invited}</p>
        </div>
      </StatBox>
    </StatsContainer>
  )
}

export default Stats
