'use client'

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Nav from './nav';

const Container = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: fit-content;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform-origin: 1px;
  cursor: pointer;
  z-index: 50;

  &:hover {
    .lineOne,
    .lineTwo,
    .lineThree {
      background: black;
    }
  }

  ${(props) =>
    props.$isOpen &&
    css`
      .lineOne {
        transform: rotate(45deg) translate(4px, 10px);
      }
      .lineTwo {
        opacity: 0;
      }
      .lineThree {
        transform: rotate(-45deg) translate(3px, -9px);
      }
    `}
`;

const Line = styled.div`
  height: 2px;
  width: 20px;
  background: black;
  border-radius: 1rem;
  transition: all 0.2s linear;
`;

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Container onClick={() => openClose()} $isOpen={isOpen}>
        <Line className={isOpen ? 'lineOne' : 'lineOne closed'} />
        <Line className={isOpen ? 'lineTwo' : 'lineTwo closed'} />
        <Line className={isOpen ? 'lineThree' : 'lineThree closed'} />
      </Container>
      {<Nav openClose={openClose} className={isOpen ? 'open' : 'close'} />}
    </>
  );
};
