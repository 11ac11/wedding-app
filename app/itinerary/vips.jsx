'use client'

import React from "react"
import styled from "styled-components"

const ChipContainer = styled.div`
  background-color: var(--gold);
  color: var(--offblack);
  padding: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  font-weight: 100;

  h3 {
    text-transform: uppercase;
    font-weight: 500;
  };

  p {
    margin: 0;
    font-family: 'Best Wishes', sans-serif;
    color: var(--white)
  };
`

const PersonChip = ({ name, duty }) => {
  return (
    <ChipContainer>
      <h3>{name}</h3>
      <p>{duty}</p>
    </ChipContainer>
  )
}

export const Vips = () => {

  const bridesmaids = [
    'Ameera Najwa',
    'Angel Elliot',
    'Georgia Hollis',
    'Geraldine Kealy',
    'Anna-May Jones'
  ]

  const groomsmen = [
    'Andrew Speak',
    'Alistair Hobson',
    'Samuel Rodd',
    'Christian Newmann',
    'Joseph Bailey'
  ]

  const renderBridesmaids = () => {
    return bridesmaids.map((bridesmaid) => {
      return <PersonChip name={bridesmaid} duty={'Bridesmaid'} />
    })
  }

  const renderGroomsmen = () => {
    return groomsmen.map((groomsman) => {
      return <PersonChip name={groomsman} duty={'Groomsman'}>
        <p>{groomsman} text</p>
      </PersonChip>
    })
  }

  return (
    <>
      <div className="info-section">
        <h2 className="uppercase">Bridal party</h2>
        <PersonChip name={'Ameera Najwa'} duty={'Maid of Honour'} />
        {renderBridesmaids()}
      </div>
      <div className="info-section">
        <h2 className="uppercase">Grooms party</h2>
        <PersonChip name={'Ryan Keady'} duty={'Bestman'} />
        {renderGroomsmen()}
      </div>
    </>
  )
}
