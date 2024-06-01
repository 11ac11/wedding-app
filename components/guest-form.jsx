'use client'

import React, { useState, useEffect } from 'react'
import { Dropdown } from './dropdown'
import { updateGuest } from '@/app/api';

export const GuestForm = ({ guest }) => {
  const [attending, setAttending] = useState(guest.attending || '')
  const [starter, setStarter] = useState(guest.starter || '')
  const [main, setMain] = useState(guest.main || '')
  const [accomodation, setAccomodation] = useState(guest.accomodation || '')
  const [isChild, setIsChild] = useState(guest.is_under_14 || '')
  const [expand, setExpand] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateGuest(guest.id, attending, starter, main, accomodation, isChild)
      console.log('this is response', response)
      if (!!response) {
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
    <div key={guest.name} className={`table-row ${expand ? 'expanded' : 'mini'}`}>
      <div className={`guestname-row`} onClick={() => { setExpand(!expand) }}>
        <p className="uppercase">{guest.name}</p>
        <p>↓</p>
      </div>
      {expand && <div className="guest-info">
        <Dropdown label="Attending"
          options={['yes', 'no']}
          onChange={(val) => setAttending(val)}
          value={attending}
          defaultValue={''}
        />
        {attending === 'yes' &&
          <>
            <Dropdown
              label="Under 14"
              options={['yes', 'no']}
              onChange={(val) => setIsChild(val)}
              value={isChild}
              defaultValue={''}
            />
            <Dropdown
              label="Starter"
              options={isChild === 'yes' ? ['kidstarter1', 'kidstarter2'] : ['salad', 'pasta']}
              onChange={(val) => setStarter(val)}
              value={starter}
              defaultValue={''}
            />
            <Dropdown
              label="Main"
              options={['Herb Crusted Beef Tenderloin with Red Wine Demi-Glace, accompanied by Garlic Mashed Potatoes and Sauteed Green Beans Almondine', 'Grilled Chilean Sea Bass with Lemon Herb Butter Sauce, served with Wild Rice Pilaf and Roasted Asparagus']}
              onChange={(val) => setMain(val)}
              value={main}
              defaultValue={''}

            />
            <Dropdown
              label="Accomodation"
              options={['yes', 'no']}
              onChange={(val) => setAccomodation(val)}
              value={accomodation}
              defaultValue={''}

            />
          </>}
        <button onClick={handleSubmit}>update</button>
      </div>}
    </div>
  );
};
