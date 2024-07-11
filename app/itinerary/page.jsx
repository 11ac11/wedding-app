import React from "react"
import HideImage from "../../components/hide-img"
import aisle from "../../public/images/aisle-circle.png"
import { Vips } from './vips.jsx'
import { TimeAndEvent } from '../../components/TimeAndEvent.jsx'

export default async function Itinerary() {

  return (
    <main>
      <HideImage
        src={aisle}
        alt="aisle"
        fill={true}
        width="300px"
      />
      <h1>Itinerary</h1>
      <div className="info-section">
        <h2 className="uppercase">{`STEN - TBC (in Barcelona)`}</h2>
        <p>
          {`We will be having a small STEN gathering (some casual drinks) a couple of days before the wedding in Barcelona. Exact time, date and location to be confirmed.`}
        </p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Wedding Day - Fri 5th Sept</h2>
        <TimeAndEvent time={'18:00'} event={'Ceremony'} />
        <TimeAndEvent time={'18:30'} event={'Appetizers'} />
        <TimeAndEvent time={'19:30'} event={'Dinner'} />
        <TimeAndEvent time={'21:30'} event={'Pre-disco'} />
        <TimeAndEvent time={'00:00'} event={'Club'} />
        <TimeAndEvent time={'04:00'} event={'Fin.'} />
      </div>
      <div className="info-section">
        <h2 className="uppercase">Sat 6th Sept</h2>
        <p>
          {`The day after the wedding, we will head to a bar close to the beach for those that wish to join us. The beach is a 5 minute taxi from the hotel. Time and location to be confirmed.`}
        </p>
      </div>
      <Vips />
    </main>
  )
}
