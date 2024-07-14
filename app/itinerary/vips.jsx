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
  border-radius: 3px;
  font-weight: 100;

  h3 {
    font-weight: 500;
    font-family: 'Best Wishes', sans-serif;
    color: var(--blackish);
    font-size: 1.5rem;
    letter-spacing: 1px;
  };

  p {
    margin: 0;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 200;
    font-size: 0.8rem;
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
    'Georgia Hollis',
    'Ameera Najwa',
    'Angel Elliot',
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
    return bridesmaids.map((bridesmaid, key) => {
      return <PersonChip name={bridesmaid} duty={'Bridesmaid'} key={key} />
    })
  }

  const renderGroomsmen = () => {
    return groomsmen.map((groomsman, key) => {
      return <PersonChip name={groomsman} duty={'Groomsman'} key={key} />
    })
  }

  return (
    <>
      <div className="info-section">
        <h2 className="uppercase">Bridal party</h2>
        {renderBridesmaids()}
        <PersonChip name={'Storm Camm'} duty={'Flower Girl'} />
      </div>
      <div className="info-section">
        <h2 className="uppercase">{`Groom's party`}</h2>
        <PersonChip name={'Ryan Keady'} duty={'Bestman'} />
        {renderGroomsmen()}
      </div>
    </>
  )
}
