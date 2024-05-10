'use client'

import styled from 'styled-components';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// const ImgContainer = styled.div`
//   position: relative;
//   width: ${({ width }) => width || '100%'};
//   height: 400px;
//   transition: height 0.5s ease-out;

//   & > img {
//     object-fit: contain;
//     width: 100% !important;
//     position: relative !important;
//     height: unset !important;
//   }
// `;

export default function ImgCont({ isVisible, className, src, fill, width }) {
  return (
    (<div width={width} className={`${className} ${isVisible ? '' : 'shrink'}`} >
      <Image src={src} fill={fill} />
    </div>)
  )
}