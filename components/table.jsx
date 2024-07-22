'use client'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { searchGuests } from '@/app/api';
import { GuestForm } from './guest-form';
import { Button } from './button'
import { FancyLoadingCircle } from './FancyLoadingCircle'

const GuestTable = styled.div`
  display: flex;
  width: 75vw;
  max-width: 800px;
`

const Table = ({ searchTerm, editingGuestId, setEditingGuestId }) => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        setLoading(true)
        const dataFromApi = await searchGuests(searchTerm);
        setData(dataFromApi);
        setLoading(false)
      }
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div className={searchTerm ? 'table-container fade-in' : 'table-container fade-out'}>
      {!showSuccess && !loading && <div className="table-all-rows">
        {searchTerm && data.map((guest) => {
          if ((!!editingGuestId && editingGuestId === guest.id) || !editingGuestId) {
            return <GuestForm key={guest.id} guest={guest} editingGuestId={editingGuestId} setEditingGuestId={setEditingGuestId} setShowSuccess={setShowSuccess} setLoading={setLoading} />
          }
        })}
        {searchTerm && data.length === 0 &&
          <>
            {`Sorry, we can't find you! Please check your name or contact us directly.`}
          </>
        }
      </div>}
      {loading && <FancyLoadingCircle />}
      {showSuccess &&
        <div>
          <p>{`Thanks, your details have been submitted succesfully.`}</p>
          <p style={{ fontSize: '3rem', textAlign: 'center' }}>{`✓`}</p>
          <Button
            onClick={() => {
              setEditingGuestId('')
              setShowSuccess(false)
            }}
            text={'Search again'} />
        </div>
      }
    </div>
  );
};

export default Table;
