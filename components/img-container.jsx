'use client'

import styled from 'styled-components';
import Image from 'next/image';

const ImgContainer = styled.div`
  position: relative;
  width: ${({ width }) => width || '100%'};
  transition: height 0.5s ease-out;

  & > img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

export default function ImgCont({ src, fill, width }) {
  return (
    <ImgContainer width={width}>
      <Image src={src} fill={fill} />
    </ImgContainer>
  )
}