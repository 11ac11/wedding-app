'use client'

import React, { useState, useEffect } from "react";
import { getAllGuests } from "@/app/api";
import InsertGuestsForm from '@/components/uploadGuests.jsx'

import styled from "styled-components";

const GuestListTable = styled.table`
  border-collapse: collapse;
  width: 800px;
  display: block;
  overflow: scroll;

  & > tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  & th {
    white-space: nowrap;
    font-size: 0.7rem;
  }

  & th, td {
    text-align: left;
    padding: 0.1rem 1rem;
    font-size: 0.8rem;
  }

  & th:first-of-type, td:first-of-type {
    width: 10px;
    padding: 0.1rem 0.1rem;
    text-align: right;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 2rem); // Adjusts based on viewport width
  }
`;

const GuestlistTable = ({ }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataFromApi = await getAllGuests();
      const sortedData = dataFromApi.sort((a, b) => a.id - b.id);
      // console.log(dataFromApi[0])
      setData(sortedData);
    };

    fetchData();
  }, []);

  const handleDelete = async (event) => {
    // TODO: fix this so the event passes the id
    e.preventDefault();

    try {
      const response = await deleteGuest(guest.id)
      if (!!response) {
        console.log('Guest deleted successfully');
        // Handle success, e.g., show a success message
      } else {
        console.error('Failed to delete guest:', response.statusText);
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error deleting guests:', error.message);
      // Handle error, e.g., show an error message
    }
  };

  const yesNoMaybe = (value) => {
    switch (value) {
      case 'Yes' || true:
        return '✅';
      case true:
        return '✅';
      case 'No':
        return '❌';
      case false:
        return '❌';
      case 'Maybe':
        return '🤔'
      default:
        return '?';
    }
  };

  const starterChoices = (value) => {
    if (value) {
      const lowerCaseValue = value.toLowerCase()
      switch (true) {
        case lowerCaseValue.includes('duck'):
          return '🦆';
        case lowerCaseValue.includes('salmon'):
          return '🐟';
        case lowerCaseValue.includes('veg'):
          return '🥗'
        case lowerCaseValue.includes('pasta'):
          return '🍝'
        default:
          return '-';
      }
    }
    return '-'
  }

  const mainChoices = (value) => {
    if (value) {
      const lowerCaseValue = value.toLowerCase()
      switch (true) {
        case lowerCaseValue.includes('duck'):
          return '🦆';
        case lowerCaseValue.includes('hake'):
          return '🐟';
        case lowerCaseValue.includes('paella'):
          return '🥘'
        case lowerCaseValue.includes('chicken'):
          return '🍗'
        default:
          return '-';
      }
    }
    return '-'
  }


  const renderRows = (sortedData) => {
    return sortedData.map((guest, index) => {
      const { name, guestlist, attending, starter, main, dietary_requirements, accomodation, sten, is_under_14, has_amended, last_amended } = guest

      return (
        <tr key={name}>
          <td>{index + 1}</td>
          <td>{name}</td>
          <td>{guestlist}</td>
          <td>{yesNoMaybe(attending)}</td>
          <td>{starterChoices(starter)}</td>
          <td>{mainChoices(main)}</td>
          <td>{!!dietary_requirements ? '⚠️' : '-'}</td>
          <td>{yesNoMaybe(accomodation)}</td>
          <td>{yesNoMaybe(sten)}</td>
          <td>{is_under_14 ? '✅' : ''}</td>
          <td>{yesNoMaybe(has_amended)}</td>
          <td>{!!last_amended && last_amended.toISOString().substring(0, 10)}</td>
          {/* <td><button onClick={(e) => handleDelete(e)}>X</button></td> */}
        </tr>
      )
    });
  };

  const getConfirmedAmount = () => {
    return data.filter((guest) => guest.attending).length;
  };

  return (
    <>
      {`confirmed: ${getConfirmedAmount(data)}`}
      <InsertGuestsForm />
      <GuestListTable>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>G/L</th>
            <th>Att.</th>
            <th>1st</th>
            <th>2nd</th>
            <th>Diet.</th>
            <th>Accom.</th>
            <th>STEN</th>
            <th>Child</th>
            <th>Amended?</th>
            <th>Last amendment</th>
          </tr>
        </thead>
        <tbody>{renderRows(data)}</tbody>
      </GuestListTable>
    </>
  );
};

export default GuestlistTable;
