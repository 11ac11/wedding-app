'use client'

import React, { useEffect, useState } from 'react'
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
  const [sten, setSten] = useState(guest.sten || '')
  const [isChild, setIsChild] = useState(!!guest.is_under_14 ? 'Yes' : 'No')
  const [dietaryNotes, setDietaryNotes] = useState(guest?.dietary_notes ?? '')

  useEffect(() => {
    setStarter(isChild === 'Yes' ? childStarter[0] : adultStarterOptions[0])
    setMain(isChild === 'Yes' ? childMain[0] : adultMainOptions[0])
  }, [isChild])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateGuest(guest.id, attending, starter, main, accomodation, sten, isChild, dietaryNotes)
      if (!!response) {
        console.log('Guests updated successfully');
        // Handle success, e.g., show a success message
        setEditingGuestId('')
      } else {
        console.error('Failed to update guests:', response);
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error updating guest:', error.message);
      // Handle error, e.g., show an error message
    }
  };

  const guestDetailsComplete = () => {
    if ((starter, main, accomodation, isChild, sten) || attending === 'No') {
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
  const generalOptionsMaybe = ['Yes', 'No', 'Maybe']
  const yesNoOptions = generalOptionsMaybe.slice(0, 2)

  return (
    <div key={guest.id} className={`table-row ${editingGuestId === guest.id ? 'expanded' : 'mini'} `}>
      <GuestNameRow>
        <NameSection onClick={() => setEditingGuestId(guest.id === editingGuestId ? '' : guest.id)} $editingGuestId={!!editingGuestId}>
          <div>
            <p className="uppercase wide">{guest.name}</p>
            <p className="uppercase">{guestIsComplete ? '✓' : ''}</p>
          </div>
          <div className='edit'>
            <p style={{ marginBottom: "0px" }} onClick={() => setEditingGuestId('')}>{editingGuestId ? 'X' : guestIsComplete ? 'EDIT' : 'RSVP'}</p>
          </div>
        </NameSection>
      </GuestNameRow >
      {editingGuestId === guest.id && <GuestInfo>
        <Dropdown label="Attending"
          options={yesNoOptions}
          onChange={(val) => setAttending(val)}
          value={attending}
        />
        {attending === 'Yes' &&
          <>
            <Dropdown
              label="Under 14"
              options={yesNoOptions}
              onChange={(val) => setIsChild(val)}
              value={isChild}
            />
            <Dropdown
              label="Starter"
              options={isChild === 'Yes' ? childStarter : adultStarterOptions}
              onChange={(val) => setStarter(val)}
              value={starter}
            />
            <Dropdown
              label="Main"
              options={isChild === 'Yes' ? childMain : adultMainOptions}
              onChange={(val) => setMain(val)}
              value={main}
            />
            <Dropdown
              label="Interested in staying at the venue"
              options={generalOptionsMaybe}
              onChange={(val) => setAccomodation(val)}
              value={accomodation}
            />
            <Dropdown
              label="Interested in attending the STEN"
              options={generalOptionsMaybe}
              onChange={(val) => setSten(val)}
              value={sten}
            />
            <Input
              label="Allergies/Dietary requirements (leave blank if none)"
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
