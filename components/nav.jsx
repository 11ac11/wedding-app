'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styled, { css } from 'styled-components';

const NavContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: var(--white);
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,0.25);;
  display: flex;
  justify-content: center;
  -webkit-box-shadow: 0px 25px 50px 0px rgba(255,255,255,0.25);
  -moz-box-shadow: 0px 25px 50px 0px rgba(255,255,255,0.25);
  box-shadow: 0px 25px 50px 0px rgba(255,255,255,0.25);
  z-index: 1;
  user-select: none;

  @media (max-width: 768px) {
    nav {
      /* Adjust styles for tablet and mobile devices */
      flex-direction: column;
      align-items: center;
    }
  }
`

const Navigation = styled.nav`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  font-weight: 600;
  width: 800px;
  justify-content: space-between;
  align-items: center;

  a {
    color: var(--offblack);
    text-decoration: none;
    transition: color 0.3s ease;
    letter-spacing: 3px;
  }

  a:hover {
    color: var(--slategrey);
  }
`

export default function Nav({ openClose }) {
  const router = useRouter()

  return (
    <NavContainer>
      <Navigation>
        <Link href="/" onClick={() => openClose()}>Home</Link>
        <Link href="/rsvp" onClick={() => openClose()}>RSVP</Link>
        <Link href="/how-to-get-there" onClick={() => openClose()}>How To Get There</Link>
        <Link href="/where-to-stay" onClick={() => openClose()}>Where To Stay</Link>
      </Navigation>
    </NavContainer>
  )
}