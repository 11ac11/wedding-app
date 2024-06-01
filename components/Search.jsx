'use client';

import { useState, useEffect } from 'react';
// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import Table from '@/components/table.jsx'


import { searchGuests } from '@/app/api'

import { useTransition } from 'react'


export const Search = ({ placeholder }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isPending, startTransition] = useTransition()
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter();

  // const handleReplace = (pathname, params) => {
  //   setScrollY(window.scrollY); // Capture current scroll position
  //   replace(`${pathname}?${params.toString()}`);
  // };

  // useEffect(() => {
  //   if (scrollY) {
  //     window.scrollTo({ top: scrollY, behavior: 'smooth' });
  //     setScrollY(0); // Reset scroll state after use
  //   }
  // }, [scrollY, router.asPath]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    // const params = new URLSearchParams(searchParams);
    if (term && term.includes(' ') && term.length > 2) {
      // params.set('query', term);
      console.log(term)

      setSearchTerm(term)
    } else {
      // params.delete('query');
    }
    // handleReplace(pathname, params)
  }, 300);

  return (
    <>
      <div className="search-container">
        <label htmlFor="search" className="sr-only">
          Search for the full names of your party:
        </label>
        <input
          className="search"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchTerm}
        />
        {/* <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
      </div>
      {<Table query={searchTerm || ''} />}
    </>
  );
}