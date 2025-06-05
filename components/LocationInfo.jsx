'use client'

import React, { useState } from 'react'
import CaretDownIcon from '@/components/CaretDownIcon'
import PinIcon from '@/components/PinIcon'

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
  display: inline-flex;
  font-weight: 400;
  color: ${({ linkColor }) => (linkColor ? linkColor : '#231f20')};
  color: ${({ linkColor }) => (linkColor ? linkColor : 'var(--slategrey)')};
  letter-spacing: 0;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  ${({ $isOpen }) => $isOpen && 'margin-bottom: 1rem;'}

  & svg.caret-icon {
    transition: 0.4s all;
    transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')});
  }

  &::before {
    background-color: ${({ linkColor }) => (linkColor ? linkColor : 'var(--slategrey)')};
    background-color: ${({ linkColor }) => (linkColor ? linkColor : '#78786a')};

    & :hover {
      transform: scaleX(1);
    }
  }
`

export const MoreInfo = styled.div`
  background-color: var(--stone);
  border-radius: 2px;
  padding: 1.8rem 1.2rem;

  & > h2,
  & > h4,
  & > h3 {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
  }

  & > h2 {
    font-size: 1.2rem;
    border-bottom: none;
    letter-spacing: 1px;
    margin-top: 0;
  }

  & > h3 {
    font-size: 1.2rem;
  }

  & > h4 {
    font-size: 1rem;
  }

  & > p {
    font-size: 1rem;
  }
`

const StyledDownIcon = styled(CaretDownIcon)`
  position: unset;
  top: unset;
  right: unset;
  transform: unset;
  cursor: unset;
  color: unset;
`

export default function LocationInfo({ children, handleCloseId, linkColor, openText }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = (divId) => {
    setIsOpen(false)

    const anchor = document.getElementById(divId)
    if (anchor) {
      const yOffset = -150 // Negative moves it up by 100px
      const y = anchor.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <>
      <ToggleMoreInfo onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen} linkColor={linkColor}>
        <PinIcon color={linkColor} />
        <span>{openText || 'Click here for map/how to get there'}</span>
        <StyledDownIcon />
      </ToggleMoreInfo>
      {isOpen && (
        <MoreInfo $isOpen={true}>
          {children}
          <ToggleMoreInfo onClick={() => handleClose(handleCloseId)}>Close</ToggleMoreInfo>
        </MoreInfo>
      )}
    </>
  )
}
