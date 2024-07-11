'use client'

import React from 'react'
import styled from 'styled-components'
import ImgCont from "@/components/img-container"
import InstaIcon from '@/public/images/instagram-icon.png'

const SocalContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`

const Tag = styled.a`
  color: var(--gold);
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 0.2rem;

  &::before {
    bottom: 0;
    background-color: var(--gold);
}
`

export const Socials = () => {
  return (
    <SocalContainer>
      <ImgCont src={InstaIcon} fill={true} className='image' width={'25px'} alt="insta-icon" />
      <Tag href="https://www.instagram.com/roybynhollis/">@roybynhollis</Tag> / <Tag href="https://www.instagram.com/crump.music/">@crump.music</Tag>
    </SocalContainer>);
};



