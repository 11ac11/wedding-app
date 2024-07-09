import React from "react"
import styled from "styled-components"
import { Vips } from './vips.jsx'

export default async function Itinerary() {

  return (
    <main>
      <h1>Itinerary</h1>
      <div className="info-section">
        <h2 className="uppercase">STEN - Wed 3rd Sept (in Barcelona)</h2>
        <ul>
          <li>18:00 - Name of place here</li>
        </ul>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Wedding Day - Fri 5th Sept</h2>
        <ul>
          <li>18:00 - Ceremony</li>
          <li>18:30 - Appetizers</li>
          <li>19:30 - Dinner</li>
          <li>21:30 - Pre-disco</li>
          <li>00:00 - Club</li>
          <li>04:00 - Fin.</li>
        </ul>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Sat 6th Sept</h2>
        <ul>
          <li>Feel free to join us at the beach club to nurse the hangover</li>
        </ul>
      </div>
      <Vips />
    </main>
  )
}
