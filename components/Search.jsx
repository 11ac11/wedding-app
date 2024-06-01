'use client';

import { useDebouncedCallback } from 'use-debounce';

export const Search = ({ searchTerm, setSearchTerm, editingGuestId }) => {
  const handleSearch = useDebouncedCallback((term) => {
    if (term && term.includes(' ') && term.length > 2) {
      setSearchTerm(term)
    } else {
      setSearchTerm('')
    }
  }, 300);

  console.log('search', editingGuestId)

  return (
    <>
      <div className={`search-container ${!!editingGuestId ? 'fade-out-shrink' : null}`}>
        <label htmlFor="search" className="sr-only">
          Search for the full names of your party:
        </label>
        <input
          className="search"
          placeholder={''}
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchTerm}
        />
        {/* <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
      </div>
    </>
  );
}