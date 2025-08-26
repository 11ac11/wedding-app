'use client'

import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const ImgContainer = styled.div`
  position: relative;
  width: ${({ width }) => width || '100%'};
  transition: height 0.5s ease-out;

  & > img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    border-radius: 3px;
  }
`

export default function ImgCont({ src, fill, width, alt }) {
  return (
    <ImgContainer width={width}>
      <Image src={src} fill={fill} alt={alt} />
    </ImgContainer>
  )
}
