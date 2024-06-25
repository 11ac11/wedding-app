'use client'

import styled from "styled-components"

const Container = styled.div`
background: rgb(139,97,98);
background: linear-gradient(284deg, rgba(139,97,98,1) 0%, rgba(154,91,92,1) 100%);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 2px;
  color: white;
  text-align: center;
`

const ContactInfo = styled.p`
  font-weight: 400;
  margin: 0;
`

export const ContactBox = () => {

  return (
    <Container>
      <p>
        If you are interested in staying at the venue, please contact them directly
        and clearly state the Wedding of Robyn and Alex on 05/09/2025
        to recieve a <strong>15% discount</strong> on the rate at the time.
      </p>
      <ContactInfo>reservasdonjaime@grup-soteras.com</ContactInfo>
      <ContactInfo>+34 93 665 13 00</ContactInfo>
    </Container>
  )
}