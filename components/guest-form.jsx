'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import { Dropdown } from './dropdown'
import { Input } from './input'
import { Button } from './button'
import { updateGuest } from '@/app/api';

const GuestTableRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  padding: 0.25rem 0;
  transition: height 0.4s ease-out;
  height: inherit;
  margin-bottom: 1rem;

  & .expanded {
    height: auto;
  };
`

const GuestNameRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;
`

const NameSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
  align-items: center;
  width: 100%;
  margin-bottom: 0.25rem;

  p {
    font-size: 1.4rem;
    margin-bottom: 0rem;
  }

  & > div {
    display: flex;
    gap: 2rem;
  }

  & > .edit > p {
    opacity: ${({ $editingGuestId }) => $editingGuestId ? 1 : 0};
    transition: opacity 0.2s ease;
  }

  &:hover > .edit > p {
    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #3B3B3B;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`

const GuestInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  padding: 0.25rem 0;
  gap: 2rem;

  & > input {
    width: 45%;
  }

  @media (max-width: 900px) {
  & > * {
    width: 100%;
  }
}
`

export const GuestForm = ({ guest, editingGuestId, setEditingGuestId }) => {
  const [attending, setAttending] = useState(guest.attending || '')
  const [starter, setStarter] = useState(guest.starter || '')
  const [main, setMain] = useState(guest.main || '')
  const [accomodation, setAccomodation] = useState(guest.accomodation || '')
  const [isChild, setIsChild] = useState(guest.is_under_14 || '')
  const [dietaryNotes, setDietaryNotes] = useState(guest?.dietary_notes ?? '')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateGuest(guest.id, attending, starter, main, accomodation, isChild)
      if (!!response) {
        console.log('Guests inserted successfully');
        // Handle success, e.g., show a success message
        setEditingGuestId('')
      } else {
        console.error('Failed to insert guests:', response.statusText);
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error inserting guests:', error.message);
      // Handle error, e.g., show an error message
    }
  };

  const guestDetailsComplete = () => {
    if ((starter, main, accomodation, isChild) || attending === 'no') {
      return true
    }
    return false
  }

  const guestIsComplete = guestDetailsComplete()

  const adultStarterOptions = [
    'Duck Ham Salad with Confit Broad Beans and Mint',
    'Mille-feuille of Smoked Salmon and Cod with Passion Fruit Vinaigrette',
    'Assortment of Grilled Vegetables (v)'
  ]
  const adultMainOptions = [
    'Duck Confit with Caramelized Pear and Turnip',
    'Line-Caught Hake in Jamón Iberico Oil',
    'Vegetable Paella (v)'
  ]
  const childStarter = ['Pizza or Pasta - TBC']
  const childMain = ['Breaded Chicken Breast with French Fries']

  return (
    <div key={guest.id} className={`table-row ${editingGuestId === guest.id ? 'expanded' : 'mini'} `}>
      <GuestNameRow>
        <NameSection onClick={() => setEditingGuestId(guest.id === editingGuestId ? '' : guest.id)} $editingGuestId={!!editingGuestId}>
          <div>
            <p className="uppercase">{guest.name}</p>
            <p className="uppercase">{guestIsComplete ? '✓' : ''}</p>
          </div>
          <div className='edit'>
            <p style={{ marginBottom: "0px" }} onClick={() => setEditingGuestId('')}>{editingGuestId ? 'X' : guestIsComplete ? 'EDIT' : 'RSVP'}</p>
          </div>
        </NameSection>
      </GuestNameRow >
      {editingGuestId === guest.id && <GuestInfo>
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
              options={isChild === 'yes' ? childStarter : adultStarterOptions}
              onChange={(val) => setStarter(val)}
              value={starter}
              defaultValue={''}
            />
            <Dropdown
              label="Main"
              options={isChild === 'yes' ? childMain : adultMainOptions}
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
            <Input
              label="Allergies/Dietary requirements"
              onChange={(val) => setDietaryNotes(val)}
              value={dietaryNotes}
              isTextArea={true}
              width={'100%'}
            />
          </>}
        <Button onClick={handleSubmit} text={!!guestIsComplete ? 'update' : 'save rsvp'} />
      </GuestInfo>}
    </div >
  );
};
