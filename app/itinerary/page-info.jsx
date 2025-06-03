'use client'

import React, { useState } from 'react'
import HideImage from '../../components/hide-img'
import Kenya from '../../public/images/kenya2-circle.png'
import { Vips } from './vips.jsx'
import { TimeAndEvent } from '../../components/TimeAndEvent.jsx'
import CaretDownIcon from '@/components/CaretDownIcon'

import styled from 'styled-components'

export const StyledDate = styled.h3`
  text-transform: uppercase;
  color: var(--slategrey);
  letter-spacing: 2px;
  font-weight: 400;
`

export const StyledTime = styled(StyledDate)`
  margin-bottom: 1rem;
`

export const EventName = styled.h2`
  text-transform: uppercase;
  color: var(--offblack);
  margin: 0.25rem 0;
`

export const ToggleMoreInfo = styled.a`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: unset;
  padding: 0;
  display: inline-flex;
  align-items: center;
  font-weight: 900;
  letter-spacing: 1px;
  color: var(--slategrey);
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;

  &::before {
    background-color: var(--slategrey);

    & :hover {
      transform: scaleX(1);
    }
  }
`

export const MoreInfo = styled.div`
  & > h4,
  & > h3 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
  }

  & > h3 {
    font-size: 1.2rem;
  }

  & > p {
    font-size: 1rem;
  }
`

export default function PageInfo({}) {
  const [openInfo, setOpenInfo] = useState(null)
  return (
    <>
      <HideImage src={Kenya} alt="Kenya" fill={true} />
      <h1 style={{ marginBottom: '4rem' }}>Itinerary</h1>
      <div className="info-section" style={{ marginBottom: '4rem' }}>
        <StyledDate>{`Thursday 4th`}</StyledDate>
        <EventName>{`La Textil, Barcelona`}</EventName>
        <StyledTime>{`18:30 - 23:00`}</StyledTime>
        <p>
          {`We would like to invite everyone to a casual pre-wedding mixer at a modern micro-brewery in central Barcelona where we have hired a private space. Every guest will receive a welcome drink and can order food at their own discretion.`}
        </p>
        {/* <ToggleMoreInfo onClick={() => setOpenInfo(openInfo === 1 ? 0 : 1)}>
          Click here for location info <CaretDownIcon />
        </ToggleMoreInfo>
        {openInfo === 1 && (
          <MoreInfo>
            <h3>{`I'm staying in Barcelona`}</h3>
            <p>
              This is right in the centre of Barcelona, near Placa Catalunya. If you are staying in Barcelona, you will
              be able to use Google Maps which is very reliable for public transport routes in the city.
            </p>
            <h3>{`I'm staying at the wedding venue (or in Castelldefels)`}</h3>
            <h4>Option 1: Train/Bus</h4>
            <p>
              If you are arriving from Castelldefels, you can travel by train to Barcelona and get off at Passeig de
              Gràcia train station (all trains from Castelldefels go to this station). It is then a 7 min walk to La
              Textil. A single train ticket is around 4€.
            </p>
            <p>
              On the way back, the last train is around 10pm that drops you to the town train station, but you would
              still need a taxi to the venue from here. After 10pm, there is an hourly night bus.
            </p>
            <h4>Option 2: Taxi</h4>
            <p>
              If you prefer to get a taxi, we can help you with taxi numbers, or alternatively you can use Uber
              application. A taxi from Castelldefels will be around 40€ one-way.
            </p>
            <a href="https://www.latextil.beer/" target="_blank">
              La Textil Website
            </a>
            <a href="https://maps.app.goo.gl/QtXgj5qGubFGyxjL9" target="_blank">
              Location
            </a>
          </MoreInfo>
        )} */}
      </div>
      {/* <Divider /> */}
      <div className="info-section important" style={{ marginBottom: '4rem' }}>
        <StyledDate>{`Friday 5th`}</StyledDate>
        <EventName>Hotel rey don jaime, Castelldefels</EventName>
        <StyledTime>18:00 - 04:00</StyledTime>
        <p>{`The wedding ceremony, dinner and party.`}</p>
        <TimeAndEvent time={'18:00'} event={'Ceremony'} />
        <TimeAndEvent time={'18:30'} event={'Appetizers'} />
        <TimeAndEvent time={'19:30'} event={'Dinner'} />
        <TimeAndEvent time={'21:30'} event={'Pre-disco'} />
        <TimeAndEvent time={'00:00'} event={'Club (on-site in hotel)'} />
        <TimeAndEvent time={'04:00'} event={'Fin.'} />
      </div>
      {/* <Divider /> */}
      <div className="info-section" style={{ marginBottom: '4rem' }}>
        <StyledDate>Saturday 6th</StyledDate>
        <EventName>Cocody beach bar, Castelldefels</EventName>
        <StyledTime>15:00 - 20:00</StyledTime>
        <p>
          {`Join us for a post-wedding wind-down! Before everyone departs, we'd love to extend our time together. We've reserved an area at a beach venue, conveniently located very close to the wedding hotel. Come for drinks, tapas, a chance to unwind and a refreshing swim.`}
        </p>
      </div>
      {/* <Divider /> */}
      <div className="info-section" style={{ marginBottom: '4rem' }}>
        <StyledDate>Sunday 7th</StyledDate>
        <EventName>Minimoon</EventName>
        <p>{`We will be saying our farewells as we head on our minimoon, leaving the hotel around midday.`}</p>
      </div>
      <Vips />
    </>
  )
}
