'use client'

import React from 'react'
import styled from 'styled-components'

export const StyledButton = styled.button`
  width: ${({ width }) => (width ? width : '100%')};
  background-color: ${({ disabled }) => (disabled ? 'var(--slategrey)' : 'var(--offblack)')};
  outline: none;
  color: #fff8f4;
  border: 1px solid ${({ disabled }) => (disabled ? 'var(--slategrey)' : 'var(--offblack)')};
  border-radius: 3px;
  height: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 600;
  transition:
    background-color 0.1s ease-in,
    border 0.1s ease-in;
  margin-top: 20px;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  &:hover {
    background-color: var(--slategrey);
    border: 1px solid var(--slategrey);
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`

export const Button = ({ style, className, onClick, width, text, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} className={className} style={style} width={width}>
      {text}
    </StyledButton>
  )
}
