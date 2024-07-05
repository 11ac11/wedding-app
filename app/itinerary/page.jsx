import React from "react"
import styled from "styled-components"

const ChipContainer = styled.div`
  background-color: var(--gold);

  h3 {

  };

  p {

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

export default async function Itinerary() {

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
    bridesmaids.forEach((bridesmaid) => {
      <PersonChip name={bridesmaid} duty={'Bridesmaid'} />
    })
  }

  const renderGroomsmen = () => {
    groomsmen.forEach((groomsman) => {
      <PersonChip name={groomsman} duty={'Groomsman'} />
    })
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>Itinerary</h1>
      <div className="info-section">
        <h2 className="uppercase">STEN - Wed 3rd Sept (in Barcelona)</h2>
        <ul>
          <li>18:00 - Name of place here</li>
        </ul>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Wedding Day - Fri 5th Sept</h2>
        <ul>
          <li>18:00 - Ceremony</li>
          <li>18:30 - Appetizers</li>
          <li>19:30 - Dinner</li>
          <li>21:30 - Pre-disco</li>
          <li>00:00 - Club</li>
          <li>04:00 - Fin.</li>
        </ul>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Sat 6th Sept</h2>
        <ul>
          <li>Feel free to join us at the beach club to nurse the hangover</li>
        </ul>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Bridal party</h2>
        <ChipContainer name={'Ameera Najwa'} duty={'Maid of Honour'} />
        {renderBridesmaids()}
      </div>
      <div className="info-section">
        <h2 className="uppercase">Grooms party</h2>
        <ChipContainer name={'Ryan Keady'} duty={'Bestman'} />
        {renderGroomsmen()}
      </div>
    </main>
  )
}
