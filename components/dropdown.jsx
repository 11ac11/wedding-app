'use client'

import { useState, useRef, useEffect } from 'react';
import './dropdown.css';
import CaretDownIcon from './CaretDownIcon';


const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export const Dropdown = ({ label, value, options, onSelect, placeholder = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    onSelect(option);
    toggleDropdown()
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOutsideClick(ref, handleClickOutside);

  return (
    <div className="dropdown-wrap" ref={ref}>
      <span>{label}:</span>
      <div className="input-container">
        <input className="dropdown-input" onClick={toggleDropdown} value={value ? value : placeholder} />
        <div onClick={toggleDropdown}>
          <CaretDownIcon toggleDropdown={toggleDropdown} />
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          <ul>
            {options.map((option, index) => (
              <li key={index} className="dropdown-item" onClick={() => handleSelectOption(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};