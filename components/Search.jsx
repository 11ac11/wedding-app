'use client';

// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin: 1rem 1rem;
`
const SearchInput = styled.input`
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
  border: solid 1px lightgray;
  &:focus-visible {
    outline: 2px solid var(--offblack);
    outline-offset: -2px;
  }
`

export const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="search-container">
      <label htmlFor="search" className="sr-only">
        Search for the names in your party:
      </label>
      <input
        className="search"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      {/* <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
    </div>
  );
}