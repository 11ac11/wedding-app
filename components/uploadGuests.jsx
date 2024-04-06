'use client'

import { postGuests } from '@/app/api';

import { useState } from 'react';

export default function InsertGuestsForm() {
  const [guests, setGuests] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postGuests({ name: 'name', guestlist: 'guestlist' })
      console.log(response)
      if (response.ok) {
        console.log('Guests inserted successfully');
        // Handle success, e.g., show a success message
      } else {
        console.error('Failed to insert guests:', response.statusText);
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error inserting guests:', error.message);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form inputs for guests */}
      <button type="submit">Insert Guests</button>
    </form>
  );
}