'use client'

import React, { useState, useEffect } from 'react'
import { Dropdown } from './dropdown'

export const GuestForm = ({ guest }) => {
  const [attending, setAttending] = useState('')
  const [starter, setStarter] = useState('')
  const [main, setMain] = useState('')
  const [accomodation, setAccomodation] = useState('')
  const [isChild, setIsChild] = useState('')

  return (
    <div key={guest.name} className="table-row">
      <div className="guest-info guestname-row">
        <p className="uppercase">{guest.name}</p>
      </div>
      <div className="guest-info">
        <Dropdown label="Attending"
          options={['yes', 'no']}
          onSelect={(val) => setAttending(val)}
          value={attending}
        />
        <Dropdown
          label="Starter"
          options={['salad', 'pasta']}
          onSelect={(val) => setStarter(val)}
          value={starter}
        />
        <Dropdown
          label="Main"
          options={['Herb Crusted Beef Tenderloin with Red Wine Demi-Glace, accompanied by Garlic Mashed Potatoes and Sauteed Green Beans Almondine', 'Grilled Chilean Sea Bass with Lemon Herb Butter Sauce, served with Wild Rice Pilaf and Roasted Asparagus']}
          onSelect={(val) => setMain(val)}
          value={main}
        />
        <Dropdown
          label="Accomodation"
          options={['yes', 'no']}
          onSelect={(val) => setAccomodation(val)}
          value={accomodation}
        />
        <Dropdown
          label="Under 14"
          options={['yes', 'no']}
          onSelect={(val) => setIsChild(val)}
          value={isChild}
        />
      </div>
    </div>
  );
};
