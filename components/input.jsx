'use client'

import React from 'react'
import styled from 'styled-components'
import CaretDownIcon from './CaretDownIcon'

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;
`

const InputContainer = styled.div`
  position: relative;
  width: 100%;

  & > .caret-icon {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    cursor: pointer;
    color: var(--slategrey);
  }
`

const StyledInput = styled.input`
  font-family: 'Helvetica Neue', 'Roboto', Helvetica, Arial, sans-serif;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid var(--slategrey);
  letter-spacing: 1px;
  font-weight: 200;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  min-width: 100%;
  padding-right: 10%;
  ${({ $isTextArea }) => $isTextArea && 'height: 5rem;'}

  &:hover {
    cursor: pointer;
    border: 1px solid var(--slategrey);
    outline: 1px solid var(--slategrey);
  }

  &:focus {
    border: 1px solid var(--slategrey);
    outline: 1px solid var(--slategrey);
  }

  & svg {
    z-index: 2;
  }
`

const StyledLabel = styled.span`
  font-family: 'Helvetica Neue', 'Roboto', Helvetica, Arial, sans-serif;
  font-weight: 400;
  margin-bottom: 1rem;

  & a {
    cursor: pointer;
    display: inline-block;
    color: var(--slategrey);
    letter-spacing: 0;
  }

  & a::before {
    background-color: var(--slategrey);
  }
`

export const Input = ({ label, value, onChange, placeholder = '', isTextArea, onClick, isDropdown, onBlur }) => {
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <InputWrap>
      {label && <StyledLabel>{label}:</StyledLabel>}
      <InputContainer>
        {isTextArea ? (
          <StyledInput
            as="textarea"
            value={value}
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
            onClick={onClick}
            $isTextArea={isTextArea}
            onBlur={() => onBlur?.()} // no event is passed
          />
        ) : (
          <>
            <StyledInput
              value={value}
              placeholder={placeholder}
              onChange={(e) => handleChange(e)}
              onClick={onClick}
              $isTextArea={isTextArea}
              onBlur={() => onBlur?.()} // no event is passed
            />
            {!!isDropdown && <CaretDownIcon onClick={onClick} />}
          </>
        )}
      </InputContainer>
    </InputWrap>
  )
}
