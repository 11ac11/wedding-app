'use client'

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const ImageContainerShrinkable = styled.div`
  margin-top: 2rem;
  position: relative;
  width: 100%;
  height: ${({ height }) => height || '300px'};
  transition: height 0.4s ease-out;

  .shrink {
    height: 100px;
  }

  img {
    object-fit: contain;
    width: 100%;
    position: relative;
    height: auto;
  }

  @media (max-width: 600px) {
    height: 150px;
  }
`

export default function HideImage({ isShrinkable = false, isVisible, className, src, fill, height }) {
  return (
    <ImageContainerShrinkable
      height={height}
      className={`${className ? className : ''} ${isShrinkable ? (isVisible ? '' : 'shrink') : ''}`}
    >
      <Image src={src} fill={fill} unoptimized={true} />
    </ImageContainerShrinkable>
  )
}
