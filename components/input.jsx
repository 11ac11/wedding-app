'use client'

import styled from 'styled-components';
import CaretDownIcon from './CaretDownIcon';

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
`

const StyledInput = styled.input`
  font-family: "Helvetica Neue", "Roboto", Helvetica, Arial, sans-serif;
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
  font-family: "Helvetica Neue", "Roboto", Helvetica, Arial, sans-serif;
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


export const Input = ({ label, value, onChange, placeholder = '', isTextArea, onClick, isDropdown }) => {

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <InputWrap>
      <StyledLabel>{label}:</StyledLabel>
      <InputContainer>
        {isTextArea
          ? <StyledInput as="textarea"
            value={value}
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
            onClick={onClick}
            $isTextArea={isTextArea}
          />
          : (<>
            <StyledInput
              value={value}
              placeholder={placeholder}
              onChange={(e) => handleChange(e)}
              onClick={onClick}
              $isTextArea={isTextArea}
            />
            {!!isDropdown && <CaretDownIcon onClick={onClick} />}
          </>)
        }
      </InputContainer>
    </InputWrap>
  );
};
