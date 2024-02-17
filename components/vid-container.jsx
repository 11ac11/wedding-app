'use client'

import styled from 'styled-components';

const VidContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 80%;
  overflow: hidden;

  & > video {
    z-index: 0;
    object-fit: cover;
  }
`

export default function VidCont({ src, fill }) {
  return (
    <VidContainer>
      <video width="100%" height="100%" autoPlay loop muted preload="auto">
        <source src="./images/IMG_8025.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </VidContainer>
  )
}