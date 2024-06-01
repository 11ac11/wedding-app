'use client'

import React from 'react'
import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  background-color: #231f20;
  outline: none;
  color: #fff8f4;
  border: 1px solid #231f20;
  border-radius: 2px;
  height: 2rem;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 600;
  transition: background-color 0.1s ease-in, border 0.1s ease-in;

  &:hover {
    background-color: #a09c94;
    border: 1px solid #a09c94;
    cursor: pointer;
  }
`

export const Button = ({ onClick, width }) => {

  return (
    <StyledButton onClick={onClick}>update</StyledButton>
  );
};
