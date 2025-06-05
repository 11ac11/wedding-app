'use client'

import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Nav from './nav'

const Container = styled.div`
  position: fixed;
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
`

const Line = styled.div`
  height: 2px;
  width: 20px;
  background: black;
  border-radius: 1rem;
  transition: all 0.2s linear;
`

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isWideScreen, setIsWideScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const wide = window.innerWidth >= 1000
      setIsWideScreen(wide)
      setIsOpen(wide)
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const openClose = () => {
    if (!isWideScreen) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <>
      {!isWideScreen && (
        <Container onClick={openClose} $isOpen={isOpen}>
          <Line className="lineOne" />
          <Line className="lineTwo" />
          <Line className="lineThree" />
        </Container>
      )}
      <Nav openClose={openClose} className={isOpen ? 'open' : 'close'} />
    </>
  )
}
