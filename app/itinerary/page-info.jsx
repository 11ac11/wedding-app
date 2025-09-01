'use client'

import React from 'react'
import HideImage from '@/components/hide-img'
import Kenya from '@/public/images/kenya2-circle.png'
import { Vips } from './vips.jsx'
import { TimeAndEvent } from '@/components/TimeAndEvent.jsx'
import CustomMap from '@/components/Map'
import LocationInfo from '@/components/LocationInfo'
import styled from 'styled-components'
import Image from '@/components/hide-img'

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
  display: inline-flex;
  font-weight: 400;
  color: #231f20;
  color: var(--slategrey);
  letter-spacing: 0;
  gap: 5px;
  align-items: center;
  ${({ $isOpen }) => $isOpen && 'margin-bottom: 1rem;'}

  & svg.caret-icon {
    transition: 0.4s all;
    transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')});
  }

  &::before {
    background-color: var(--slategrey);
    background-color: #78786a;

    & :hover {
      transform: scaleX(1);
    }
  }
`

export default function PageInfo() {
  return (
    <>
      <HideImage src={Kenya} alt="Kenya" fill={true} />
      <h1 style={{ marginBottom: '4rem' }}>Itinerary</h1>
      <div className="info-section" style={{ marginBottom: '4rem' }} id="la-textil">
        <StyledDate>{`Thursday 4th`}</StyledDate>
        <EventName>{`La Textil, Barcelona`}</EventName>
        <StyledTime style={{ marginBottom: '0' }}>{`18:30 - 23:00`}</StyledTime>
        <ToggleMoreInfo href="https://www.latextil.beer/" target="_blank" style={{ marginBottom: '1rem' }}>
          https://www.latextil.beer/
        </ToggleMoreInfo>
        <p>
          {`We would like to invite everyone to a casual pre-wedding mixer at a modern micro-brewery in central Barcelona where we have hired a private space. Every guest will receive a welcome drink and can order food at their own discretion.`}
        </p>
        <LocationInfo handleCloseId={'la-textil'} linkColor={'var(--offblack)'}>
          <h2>Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5986.426761201096!2d2.16775515595104!3d41.39117217129941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3791b6168ed%3A0xccdc2cc0ad2626ca!2sla%20textil%20collective%20%2F%20303%20audiophile%20bar!5e0!3m2!1sen!2ses!4v1749059566683!5m2!1sen!2ses"
            width="100%"
            height="450"
            style={{ border: '0px', borderRadius: '2px' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <h2 style={{ marginTop: '1rem' }}>How to get there</h2>
          <h3 style={{ marginTop: '2rem' }}>{`I'm staying in Barcelona`}</h3>
          <p style={{ marginTop: '1rem' }}>
            This is right in the centre of Barcelona, near Placa Catalunya. If you are staying in Barcelona, you will be
            able to use Google Maps which is very reliable for public transport routes in the city.
          </p>
          <h3 style={{ marginTop: '2rem' }}>{`I'm staying at the wedding venue (Castelldefels)`}</h3>
          <h4 style={{ marginTop: '1rem' }}>Option 1: Train/Bus</h4>
          <p>
            If you are arriving from Castelldefels, you can travel by train to Barcelona and get off at Passeig de
            Gràcia train station (all trains from Castelldefels go to this station). It is then a 7 min walk to La
            Textil. A single train ticket is around 4€.
          </p>
          <p>
            On the way back, the last train is around 10pm that drops you to the town train station, but you would still
            need a taxi to the venue from here. After 10pm, there is an hourly night bus.
          </p>
          <h4 style={{ marginTop: '2rem' }}>Option 2: Taxi</h4>
          <p>
            If you prefer to get a taxi, we can help you with taxi numbers, or alternatively you can use Uber
            application. A taxi from Castelldefels will be around 40€ one-way.
          </p>
        </LocationInfo>
      </div>
      {/* <Divider /> */}
      <div className="info-section important" style={{ marginBottom: '4rem' }}>
        <StyledDate>{`Friday 5th`}</StyledDate>
        <EventName>Hotel rey don jaime, Castelldefels</EventName>
        <StyledTime>18:00 - 04:00</StyledTime>
        <p>{`The wedding ceremony, dinner and party.`}</p>
        <TimeAndEvent time={'17:45'} event={'Arrive'} />
        <TimeAndEvent time={'18:00'} event={'Ceremony'} />
        <TimeAndEvent time={'19:00'} event={'Appetizers'} />
        <TimeAndEvent time={'20:30'} event={'Dinner'} />
        <TimeAndEvent time={'00:00'} event={'Club (on-site in hotel)'} />
        <TimeAndEvent time={'04:00'} event={'Fin.'} />
      </div>
      {/* <Divider /> */}
      <div className="info-section" style={{ marginBottom: '4rem' }} id="cocody">
        <StyledDate>Saturday 6th</StyledDate>
        <EventName>Cocody beach bar, Castelldefels</EventName>
        <StyledTime>15:00 - 20:00</StyledTime>
        <p>
          {`Join us for a post-wedding wind-down! Before everyone departs, we'd love to extend our time together. We've reserved an area at a beach venue, conveniently located very close to the wedding hotel. Come for drinks, tapas, a chance to unwind and a refreshing swim.`}
        </p>
        <LocationInfo handleCloseId={'cocody'} linkColor={'var(--offblack)'}>
          <h2>Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8925.427584258634!2d1.9570958105940228!3d41.26642372454822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a483593695db05%3A0x78cbea94e46c0516!2sCocody%20chiringuito%20Castelldefels!5e0!3m2!1sen!2ses!4v1749107862111!5m2!1sen!2ses"
            width="100%"
            height="450"
            style={{ border: '0px', borderRadius: '2px' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <h2 style={{ marginTop: '1rem' }}>How to get there</h2>
          <p style={{ marginTop: '1rem' }}>
            {`The hotel is a 5 minute taxi to the venue. You will most likely be dropped off at the roundabout, next to the "Dar y Tomar" art installation ("Give and take" in English). The beach bar is directly behind the sculpture on the beach, you can see the venue in the background on the photo below.`}
          </p>
          <Image
            src="https://www.shutterstock.com/image-photo/modern-sculpture-two-hands-forming-600nw-2580603513.jpg"
            alt="'Dar y Tomar' art installation"
            fill={true}
          />
          <h2 style={{ marginTop: '1rem' }}>Is it walkable?</h2>
          <p style={{ marginTop: '1rem' }}>
            {`If you want to get your steps in, and don't mind a 15-minute downhill walk, going from the hotel to the beach IS walkable. You would need to cross the motorway/railway line over the bridge, but other than that it is pretty straight forward.`}
          </p>
          <p style={{ marginTop: '1rem' }}>
            {`If you look at the map above, you can see the Gran Hotel Rey Don Jaime in pink near the top, almost directly above the beachbar.`}
          </p>
          <p
            style={{ marginTop: '1rem' }}
          >{`However, for the return journey, we don't recommend walking back up as the hotel is on top of a big hill.`}</p>
        </LocationInfo>
      </div>
      <div className="info-section" style={{ marginBottom: '4rem' }}>
        <StyledDate>Sunday 7th</StyledDate>
        <EventName>Minimoon</EventName>
        <p>{`We will be saying our farewells as we head on our minimoon, leaving the hotel around midday.`}</p>
      </div>
      <Vips />
    </>
  )
}
