'use client'

import styled from "styled-components"

const Container = styled.div`
  background: var(--gold);
  padding: 3rem;
  margin-bottom: 1rem;
  border-radius: 2px;
  color: white;
  text-align: center;
`

const ContactInfoBold = styled.p`
  font-weight: 400;
  margin: 0;
  margin-bottom: 1rem;
`

const ContactInfo = styled.p`
  margin: 0;
`

export const ContactBox = () => {
  const venueEmail = 'reservasdonjaime@grup-soteras.com';
  const weddingSubject = 'Wedding Robyn & Alex - 05 Sept 2025';

  return (
    <Container>
      <p>
        {`If you are interested in getting accommodation at the wedding venue,
        you can contact them directly for a <strong>15% discount</strong> on the
        rate at the time of booking.`}
      </p>
      <p>
        {`We'll be staying Friday and Saturday nights. Pre-wedding events in Barcelona are likely the week before, but feel free to stay at the venue for your entire trip if you prefer.`}
      </p>
      <ContactInfo>
        {`To book your stay, please email:`}
      </ContactInfo>
      <ContactInfoBold>{venueEmail}</ContactInfoBold>
      <ContactInfo>
        {`with the subject:`}
      </ContactInfo>
      <ContactInfoBold>{weddingSubject}</ContactInfoBold>
      <p>
        {`In your email, please include:`}
      </p>
      <ul>
        <li>{`Number of nights`}</li>
        <li>{`Number of rooms you'd like to book`}</li>
        <li>{`Room types (double, twin, etc.)`}</li>
      </ul>
      <p>
        {`Alternatively, you can call: +34 93 665 13 00`}
      </p>
    </Container>
  );
};
