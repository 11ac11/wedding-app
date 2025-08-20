'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/button'

import styled from 'styled-components'

const StatsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-end;

  & p {
    margin: 0;
  }

  @media (max-width: 800px) {
    padding: 1rem;
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

  & h4,
  p {
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

const Stats = ({ guestlistData = [], loading }) => {
  const getFoodTotals = (attribute, containingWord) => {
    if (loading) return '-'

    return guestlistData.filter((guest) => guest[attribute]?.includes(containingWord)).length
  }

  const getCount = (attribute, value) => {
    if (loading) return '-'
    if (Array.isArray(value)) {
      return guestlistData.filter((guest) => value.includes(guest[attribute])).length
    }
    return guestlistData.filter((guest) => guest[attribute] === value).length
  }

  const getStarterNumbers = () => {
    return {
      duck: getFoodTotals('starter', 'Duck'),
      fish: getFoodTotals('starter', 'Salmon'),
      veg: getFoodTotals('starter', 'Vegetables')
    }
  }

  const getMainNumbers = () => {
    return {
      duck: getFoodTotals('main', 'Duck'),
      fish: getFoodTotals('main', 'Hake'),
      paella: getFoodTotals('main', 'Paella')
    }
  }

  const responded = getCount('attending', ['Yes', 'No'])
  const notResponded = loading ? '-' : getCount('attending', null) - getCount('invited', false)
  const invited = getCount('invited', true)
  const attendingYes = getCount('attending', 'Yes')
  const attendingNo = getCount('attending', 'No')
  const stenYes = getCount('sten', 'Yes')
  const stenMaybe = getCount('sten', 'Maybe')
  const accomYes = getCount('accommodation', 'Yes')
  const accomMaybe = getCount('accommodation', 'Maybe')
  const isChild = getCount('is_under_14', true)

  return (
    <StatsContainer>
      <StatBox>
        <h4>STEN</h4>
        <div>
          <p>{`✅ ${stenYes}`}</p>
          <p>{`🤔 ${stenMaybe}`}</p>
          <p>{`🟰 ${stenYes + stenMaybe}`}</p>
        </div>
      </StatBox>

      {/* <StatBox>
          <h4>Accom.</h4>
          <div>
            <p>{`✅ ${accomYes}`}</p>
            <p>{`🤔 ${accomMaybe}`}</p>
            <p>{`🟰 ${accomYes + accomMaybe}`}</p>
          </div>
        </StatBox> */}
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
        <h4>Children</h4>
        <div>
          <p>{isChild}</p>
        </div>
      </StatBox>
      <StatBox>
        <h4>Resp.</h4>
        <div>
          <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>{responded}</p>
          <p style={{ fontSize: '0.8rem', textAlign: 'center' }}>/{invited}</p>
        </div>
      </StatBox>
      <StatBox>
        <h4>No resp.</h4>
        <div>
          <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>{notResponded}</p>
          <p style={{ fontSize: '0.8rem', textAlign: 'center' }}>/{invited}</p>
        </div>
      </StatBox>
      <StatBox>
        <h4>Conf.</h4>
        <div>
          <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>{attendingYes}</p>
          <p style={{ fontSize: '0.8rem', textAlign: 'center' }}>/{invited}</p>
        </div>
      </StatBox>
      <StatBox>
        <h4>Decl.</h4>
        <div>
          <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>{attendingNo}</p>
          <p style={{ fontSize: '0.8rem', textAlign: 'center' }}>/{invited}</p>
        </div>
      </StatBox>
    </StatsContainer>
  )
}

export default Stats
