'use client'

import React, { useState, useEffect } from 'react'
import { searchGuests } from '@/app/api';
import { GuestForm } from './guest-form';

const Table = ({ query }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        const dataFromApi = await searchGuests(query);
        setData(dataFromApi.rows);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className={query ? 'table-container fade-in' : 'table-container fade-out'}>
      <div className="table-all-rows">
        {query && data.map((guest) => (
          <GuestForm key={guest.id} guest={guest} />
        ))}
      </div>
    </div>
  );
};

export default Table;
