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

`

export const Socials = () => {
  return (
    <SocalContainer>
      <ImgCont src={InstaIcon} fill={true} className='image' width={'25px'} />
      <Tag href="https://www.instagram.com/roybynhollis/">@roybynhollis</Tag> / <Tag href="https://www.instagram.com/crump.music/">@crump.music</Tag>
    </SocalContainer>);
};



