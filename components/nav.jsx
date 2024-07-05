'use client'

import Link from 'next/link'
import styled from 'styled-components';

const NavContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background: var(--white);
  background: rgba(255, 255, 255, 0.89);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,0.25);
  display: flex;
  justify-content: center;
  -webkit-box-shadow: 0px 25px 50px 0px rgba(255,255,255,0.25);
  -moz-box-shadow: 0px 25px 50px 0px rgba(255,255,255,0.25);
  box-shadow: 0px 25px 50px 0px rgba(255,255,255,0.25);
  z-index: 1;
  user-select: none;
  transition: all 0.2s linear;
  opacity: ${({ className }) => className === 'open' ? 1 : 0};
  ${({ className }) => className !== 'open' && 'pointer-events: none;'}
  height: 60px;

  @media(max-width: 800px) {
    height: auto;
    position: fixed;
    nav {
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      a {
        margin-bottom: 1rem;
      };
    };
  };
`

const Navigation = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  font-weight: 600;
  width: 800px;
  justify-content: space-between;
  align-items: center;
  position: relative;

  // TODO: can we remove this now it's in general CSS? keep the colour?

  a {
    color: var(--offblack); // TODO: maybe keep this?
    text-decoration: none;
    transition: color 0.3s ease;
    letter-spacing: 3px;
    display: flex;
    position: relative;
  };

  & > a::before {
    content: "";
    position: absolute;
    bottom: -0.25rem;
    width: 100%;
    height: 2px;
    background-color: #3B3B3B;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.2s ease;
  };

  & > a: hover::before {
    transform: scaleX(1);
  };
`

export default function Nav({ openClose, className }) {
  return (
    <NavContainer className={className}>
      <Navigation>
        <Link href="/" onClick={() => openClose()}>Home</Link>
        <Link href="/rsvp" onClick={() => openClose()}>RSVP</Link>
        <Link href="/itinerary" onClick={() => openClose()}>Itinerary</Link>
        <Link href="/travel" onClick={() => openClose()}>Travel</Link>
        <Link href="/accomodation" onClick={() => openClose()}>Accomodation</Link>
        <Link href="/gifts" onClick={() => openClose()}>Gifts</Link>
        <Link href="/faqs" onClick={() => openClose()}>FAQs</Link>
      </Navigation>
    </NavContainer>
  )
}