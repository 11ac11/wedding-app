// 'use client'

import React from "react";
// import styled from "styled-components";

// const GuestListTable = styled.table` // TODO: use this instead of css
//   width: 80%;

//   & th {
//   text-align: left;
//   };
// `

const GuestlistTable = async ({ sortedData }) => {

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

  const renderRows = (sortedData) => {
    return sortedData.map((guest, index) => {
      return (
        <tr key={guest.name}>
          <td>{index + 1}</td>
          <td>{guest.name}</td>
          <td>{guest.guestlist}</td>
          <td>{guest.attending ? '✅' : '❌'}</td>
          <td>{guest.starter}</td>
          <td>{guest.main}</td>
          <td>{guest.dietary_requirements ? 'dietary' : '-'}</td>
          <td>{guest.interested_in_accommodation}</td>
          <td>{guest.is_under_14 ? 'yes' : 'no'}</td>
          {/* <td><button onClick={(e) => handleDelete(e)}>X</button></td> */}
        </tr>
      )
    });
  };

  return (
    <table className="guestlist">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Guestlist</th>
          <th>Attending</th>
          <th>Starter</th>
          <th>Main</th>
          <th>Diet.</th>
          <th>Accom.</th>
          <th>Under 14</th>
        </tr>
      </thead>
      <tbody>{renderRows(sortedData)}</tbody>
    </table>
  );
};

export default GuestlistTable;
