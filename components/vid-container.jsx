'use client'

import styled from 'styled-components'

const VidContainer = styled.div`
  // margin-top: 60px;
  width: 400px;
  height: 400px;
  border-radius: 80%;
  overflow: hidden;

  & > video {
    z-index: 0;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    /* Adjust styles for screens with a width of 767 pixels or less (typical mobile screens) */
    width: 300px;
    height: 300px;
  }

  @media (max-width: 350px) {
    /* Adjust styles for screens with a width of 767 pixels or less (typical mobile screens) */
    width: 250px;
    height: 250px;
  }
`

export default function VidCont({ src, fill }) {
  return (
    <VidContainer>
      <video width="100%" height="100%" autoPlay loop muted preload="auto" playsInline>
        <source src="./images/home_page_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </VidContainer>
  )
}
