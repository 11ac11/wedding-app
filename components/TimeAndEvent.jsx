'use client'

import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`

const Time = styled.p`
  font-family: "Helvetica Neue", "Roboto", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  margin: 0;
  font-weight: 400;
  letter-spacing: 0;
`

const Event = styled.p`
  font-family: 'Best Wishes', sans-serif;
  transform: translateY(3px);
  font-size: 1.4rem;
  margin: 0;
`

export const TimeAndEvent = ({ time, event }) => {
  return (
    <Container>
      {time && <Time>{time}</Time>}<Event>{event}</Event>
    </Container>
  );
};
