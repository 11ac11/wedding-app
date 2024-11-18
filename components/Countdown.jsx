'use client'

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin: 0px;
    width: 100%;
    justify-content: center;

    & p {
      margin: 0;
      text-transform: uppercase;
    }
  }

`

const calculateTimeLeft = () => {
  const targetDate = new Date(2025, 8, 5);
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const seconds = Math.floor((difference / 1000) % 60);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
};

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <p className='info'>{`(${timeLeft.days} days, ${timeLeft.hours} hours and ${timeLeft.minutes} minutes away)`}</p>
    </Container >
  );
}

export default Countdown;
