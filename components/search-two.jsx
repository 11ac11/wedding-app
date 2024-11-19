'use client'

import { useDebouncedCallback } from 'use-debounce'
import styled from 'styled-components'

const ANIMATION_STYLE = 'cubic-bezier(100,50,60,100)'

const SearchContainer = styled.div`
  height: ${({ $editingGuestId }) => ($editingGuestId ? '0' : '1rem')};
  height: ${({ $editingGuestId }) => ($editingGuestId ? '0' : '110px')};
  opacity: ${({ $editingGuestId }) => ($editingGuestId ? 0 : 1)};
  width: 300px;
  overflow: hidden;
  transition:
    height 0.5s ${ANIMATION_STYLE},
    opacity 0.5s ${ANIMATION_STYLE},
    margin 0.5s ${ANIMATION_STYLE};

  & label {
    display: block;
    width: 100%;
    text-align: center;
  }
`

const SearchInput = styled.input`
  padding: 0.1rem 1rem;
  border-radius: 6px;
  line-height: 1.4;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 1rem 0;
  caret-color: var(--slategrey);

  &:focus-visible,
  &:hover {
    outline: 2px solid var(--slategrey);
    outline-offset: -2px;
    transition: outline 0.3s ease;
  }
`

export default function Search({ searchTerm, setSearchTerm, editingGuestId }) {
  const handleSearch = useDebouncedCallback((term) => {
    if (term && term.length > 3) {
      setSearchTerm(term)
    } else {
      setSearchTerm('')
    }
  }, 300)

  return (
    <>
      <SearchContainer $editingGuestId={!!editingGuestId}>
        <label htmlFor="search">Search by the surname(s) of your party:</label>
        <SearchInput
          className="search"
          placeholder={''}
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchTerm}
        />
      </SearchContainer>
    </>
  )
}
