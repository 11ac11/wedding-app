'use client'

import React from 'react'
import styled from 'styled-components'
import ImgCont from '@/components/img-container'
import InstaIcon from '@/public/images/instagram-icon.png'

const SocalContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const Tag = styled.a`
  color: var(--slategrey);
  cursor: pointer;
  letter-spacing: 0.5px;
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 0.2rem;

  &::before {
    bottom: 0;
    background-color: var(--slategrey);
  }
`

export const Socials = () => {
  return (
    <SocalContainer>
      <ImgCont src={InstaIcon} fill={true} className="image" width={'25px'} alt="insta-icon" />
      <Tag href="https://www.instagram.com/roybynhollis/">@roybynhollis</Tag> /{' '}
      <Tag href="https://www.instagram.com/crumpalex_/">@crumpalex_</Tag>
    </SocalContainer>
  )
}
