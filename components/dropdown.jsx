'use client'

import { useState, useRef, useEffect } from 'react'
// import './dropdown.css'
import { Input } from './input'
import styled from 'styled-components'

const StyledInput = styled(Input)`
  position: relative;
  width: 100%;
`

const DropdownWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 45%;

  @media (max-width: 900px) {
    width: 100%;
  }
`

const DropdownOptions = styled.div`
  border: 1px solid var(--slategrey);
  border-radius: 3px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 2;
  width: 100%;
  box-sizing: border-box;
  margin-top: 2px;

  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & > ul > li {
    padding: 0.5rem;
    cursor: pointer;
    border-bottom: 1px solid var(--slategrey);
  }

  & > ul > li:hover {
    background-color: var(--slategrey);
  }
`

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

export const Dropdown = ({ label, value, options, onChange, placeholder = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelectOption = (option) => {
    onChange(option)
    toggleDropdown()
  }

  const handleClickOutside = () => {
    setIsOpen(false)
  }

  useOutsideClick(ref, handleClickOutside)

  return (
    <DropdownWrap ref={ref}>
      <StyledInput isDropdown={true} label={label} onClick={toggleDropdown} value={value} onChange={() => {}} />
      {isOpen && (
        <DropdownOptions>
          <ul>
            {options.map((option, index) => (
              <li key={index} className="dropdown-item" onClick={() => handleSelectOption(option)}>
                {option}
              </li>
            ))}
          </ul>
        </DropdownOptions>
      )}
    </DropdownWrap>
  )
}
