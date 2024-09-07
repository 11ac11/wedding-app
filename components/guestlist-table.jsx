'use client'

import React, { useState, useEffect } from "react";
import { getAllGuests } from "@/app/api";
import InsertGuestsForm from '@/components/uploadGuests.jsx'

import styled from "styled-components";

const GuestListTable = styled.table`
  border-collapse: collapse;
  width: 800px;
  display: block;
  overflow-x: auto;

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
  }

  @media (max-width: 768px) {
    width: calc(100vw - 2rem); // Adjusts based on viewport width
  }
`;

const StatsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-end;
  padding: 1rem;

  & p {
    margin: 0;
  }
`

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--slategrey);
  color: var(--white);
  padding: 0.5rem;
  border-radius: 2px;
  font-size: 12px;
  justify-content: center;
  flex: 1;
  text-align: center;
  min-width: 20%;

  & div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  & h4, p {
    margin: 0;
  }

  & h4 {
    margin-bottom: 0.5rem;
  }

  & p {
    font-weight: 400;
  }

  @media (max-width: 800px) {
    & div {
      flex-direction: column;
      gap: 0.25rem;
    }
  }

  @media (max-width: 500px) {
    p {
      font-size: 0.7rem;
    }
  }
`

const StyledRow = styled.tr`
  ${({ $invited }) => !$invited && 'opacity: 0.2;'}
`

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
      const { name, guestlist, attending, starter, main, dietary_requirements, accommodation, sten, is_under_14, has_amended, last_amended, invited } = guest

      return (
        <StyledRow key={name} $invited={!!invited}>
          <td style={{ textAlign: 'right' }}>{index + 1}</td>
          <td>{name}</td>
          <td>{guestlist}</td>
          <td>{yesNoMaybe(attending)}</td>
          <td>{starterChoices(starter)}</td>
          <td>{mainChoices(main)}</td>
          <td>{!!dietary_requirements ? '⚠️' : '-'}</td>
          <td>{yesNoMaybe(accommodation)}</td>
          <td>{yesNoMaybe(sten)}</td>
          <td>{is_under_14 ? '✅' : ''}</td>
          <td>{!!last_amended && last_amended.toISOString().substring(0, 10)}</td>
          {/* <td><button onClick={(e) => handleDelete(e)}>X</button></td> */}
        </StyledRow>
      )
    });
  };

  const renderDietary = (guests) => {
    const guestsWithDietaryReqs = guests.filter(guest => !!guest.dietary_requirements)
    return guestsWithDietaryReqs.map((guest, index) => {
      const { name, dietary_requirements } = guest
      return (
        <StyledRow key={index} $invited={true}>
          <td style={{ textAlign: 'left' }}>{name}</td>
          <td>{dietary_requirements}</td>
        </StyledRow>
      )
    })
  };

  const getTotals = (attribute) => {
    return data.filter((guest) => guest[attribute]).length;
  };

  const getFoodTotals = (attribute, containingWord) => {
    return data.filter((guest) => guest[attribute]?.includes(containingWord)).length;
  };

  const getCount = (attribute, value) => {
    if (Array.isArray(value)) {
      return data.filter((guest) => value.includes(guest[attribute])).length;
    }
    return data.filter((guest) => guest[attribute] === value).length;
  };

  const getStarterNumbers = () => {
    return {
      duck: getFoodTotals('starter', 'Duck'),
      fish: getFoodTotals('starter', 'Salmon'),
      veg: getFoodTotals('starter', 'Vegetables'),
    }
  }

  const getMainNumbers = () => {
    return {
      duck: getFoodTotals('main', 'Duck'),
      fish: getFoodTotals('main', 'Hake'),
      paella: getFoodTotals('main', 'Paella'),
    }
  }

  const responded = getCount('attending', ['Yes', 'No'])
  const notResponded = getCount('attending', null) - getCount('invited', false)
  const invited = getCount('invited', true)
  const attendingYes = getCount('attending', 'Yes')
  const attendingNo = getCount('attending', 'No')
  const stenYes = getCount('sten', 'Yes')
  const stenMaybe = getCount('sten', 'Maybe')
  const accomYes = getCount('accommodation', 'Yes')
  const accomMaybe = getCount('accommodation', 'Maybe')

  return (
    <>
      <StatsContainer>
        <StatBox>
          <h4>STEN</h4>
          <div>
            <p>{`✅ ${stenYes}`}</p>
            <p>{`🤔 ${stenMaybe}`}</p>
            <p>{`🟰 ${stenYes + stenMaybe}`}</p>
          </div>
        </StatBox>
        <StatBox>
          <h4>Accom.</h4>
          <div>
            <p>{`✅ ${accomYes}`}</p>
            <p>{`🤔 ${accomMaybe}`}</p>
            <p>{`🟰 ${accomYes + accomMaybe}`}</p>
          </div>
        </StatBox>
        <StatBox>
          <h4>Starter</h4>
          <div>
            <p>{`🦆 ${getStarterNumbers().duck}`}</p>
            <p>{`🐟 ${getStarterNumbers().fish}`}</p>
            <p>{`🥗 ${getStarterNumbers().veg}`}</p>
          </div>
        </StatBox>
        <StatBox>
          <h4>Main</h4>
          <div>
            <p>{`🦆 ${getMainNumbers().duck}`}</p>
            <p>{`🐟 ${getMainNumbers().fish}`}</p>
            <p>{`🥘 ${getMainNumbers().paella}`}</p>
          </div>
        </StatBox>
        <StatBox>
          <h4>Resp.</h4>
          <div>
            <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
              {responded}
            </p>
            <p style={{ fontSize: '0.8rem', textAlign: 'center' }}>
              /{invited}
            </p>
          </div>
        </StatBox>
        <StatBox>
          <h4>No resp.</h4>
          <div>
            <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
              {notResponded}
            </p>
            <p style={{ fontSize: '0.8rem', textAlign: 'center' }}>
              /{invited}
            </p>
          </div>
        </StatBox>
        <StatBox>
          <h4>Conf.</h4>
          <div>
            <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
              {attendingYes}
            </p>
            <p style={{ fontSize: '0.8rem', textAlign: 'center' }}>
              /{responded}
            </p>
          </div>
        </StatBox>
        <StatBox>
          <h4>Decl.</h4>
          <div>
            <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
              {attendingNo}
            </p>
            <p style={{ fontSize: '0.8rem', textAlign: 'center' }}>
              /{responded}
            </p>
          </div>
        </StatBox>
      </StatsContainer >
      {/* <InsertGuestsForm /> */}
      < GuestListTable >
        <thead>
          <tr>
            <th style={{ textAlign: 'right' }}>#</th>
            <th>Name</th>
            <th>G/L</th>
            <th>Att.</th>
            <th>1st</th>
            <th>2nd</th>
            <th>Diet.</th>
            <th>Accom.</th>
            <th>STEN</th>
            <th>Child</th>
            <th>Last amend.</th>
          </tr>
        </thead>
        <tbody>{renderRows(data)}</tbody>
      </GuestListTable >
      <GuestListTable>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Name</th>
            <th>Dietary Req.</th>
          </tr>
        </thead>
        <tbody>{renderDietary(data)}</tbody>
      </GuestListTable>
    </>
  );
};

export default GuestlistTable;
