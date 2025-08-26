'use client'

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: var(--slategrey);
  padding: 2rem;
  margin-bottom: 1rem;
  border-radius: 2px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContactInfoBold = styled.p`
  font-weight: 400;
  margin: 0;
  margin-bottom: 1rem;
`

const ContactInfo = styled.p`
  margin: 0;
`

const Bold = styled.span`
  font-weight: 900;
`

const ListItem = styled.li``

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: circle;
  font-weight: 400;
  padding: 0;
  margin: 0 0 1rem;
`

export const ContactBox = () => {
  const venueEmail = 'reservasdonjaime@grup-soteras.com'
  const weddingSubject = 'Wedding Robyn & Alex - 05 Sept 2025'
  const encodedSubject = encodeURIComponent(weddingSubject)
  const mailtoLink = `mailto:${venueEmail}?subject=${encodedSubject}`

  return (
    <Container>
      <p>
        {`If you are interested in getting accommodation at the wedding venue,
        you can contact them directly for a`}
        <Bold>{` 10 % discount `}</Bold>
        {`on the rate at the time of booking.`}
      </p>
      <p>
        {`We'll be staying the night of Friday 5th and Saturday 6th. We will have a pre-wedding event on the Thursday in Barcelona, but feel free to stay at the venue for your entire trip if you prefer.`}
      </p>
      <p>{`We will be leaving for our minimoon on Sunday 7th around midday.`}</p>
      <ContactInfo>{`To book your stay, please email:`}</ContactInfo>
      <ContactInfoBold>
        <a href={mailtoLink}>{venueEmail}</a>
      </ContactInfoBold>
      <ContactInfo>{`With the subject:`}</ContactInfo>
      <ContactInfoBold>{weddingSubject}</ContactInfoBold>
      <p style={{ marginBottom: 0 }}>{`In your email, please include:`}</p>
      <List>
        <ListItem>{`Number of nights`}</ListItem>
        <ListItem>{`Number of rooms you'd like to book`}</ListItem>
        <ListItem>{`Room types (double, twin, etc.)`}</ListItem>
      </List>
      <p>{`Alternatively, you can call: +34 93 665 13 00`}</p>
    </Container>
  )
}
