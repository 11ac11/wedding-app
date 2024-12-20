import React from 'react'

const CaretDownIcon = ({ onClick }) => (
  <svg
    className="caret-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    onClick={onClick}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export default CaretDownIcon
