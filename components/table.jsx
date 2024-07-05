'use client'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { searchGuests } from '@/app/api';
import { GuestForm } from './guest-form';

const GuestTable = styled.div`
  display: flex;
  width: 75vw;
  max-width: 800px;
`

const Table = ({ searchTerm, editingGuestId, setEditingGuestId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        const dataFromApi = await searchGuests(searchTerm);
        setData(dataFromApi.rows);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className={searchTerm ? 'table-container fade-in' : 'table-container fade-out'}>
      <div className="table-all-rows">
        {searchTerm && data.map((guest) => {
          if ((!!editingGuestId && editingGuestId === guest.id) || !editingGuestId) {
            return <GuestForm key={guest.id} guest={guest} editingGuestId={editingGuestId} setEditingGuestId={setEditingGuestId} />
          }
        })}
        {searchTerm && data.length === 0 &&
          <>
            {`Sorry, we can't find you! Please check your name or contact us directly.`}
          </>
        }
      </div>
    </div>
  );
};

export default Table;
