import React from "react"
import HideImage from "../../components/hide-img"
import CircleImage from "../../components/shrink-img"
import aisle from "../../public/images/aisle-circle.png"
import Kenya from "../../public/images/kenya2-circle.png"
import { Vips } from './vips.jsx'
import { TimeAndEvent } from '../../components/TimeAndEvent.jsx'

export default async function Itinerary() {

  return (
    <main>
      {/* <CircleImage src={'images/aisle-circle.png'} /> */}
      <HideImage
        src={Kenya}
        alt="Kenya"
        fill={true}
      />
      <h1>Itinerary</h1>
      <div className="info-section">
        <h2 className="uppercase">{`STEN - TBC (in Barcelona)`}</h2>
        <p>
          {`To kick off the wedding celebrations, we're planning a relaxed get-together for some drinks and catching up with everyone a few days before the big day. Think of it as a chance to mingle in a casual setting and soak up the Barcelona vibes!`}
        </p>
        <p>
          {`Exact details like date, time, and location are still being finalised, but we'll keep you posted soon.`}
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
          {`The celebrations don't have to end after the wedding! For those who want to keep the good times rolling, we'll be heading to a bar by the beach the following day. It's just a quick 5-minute taxi ride from the hotel - perfect for soaking up the sunshine, nursing any hangovers and recounting the main event.`}
        </p>
        <p>
          {`We're are also still finalising the details for this, but we'll update it when things are confirmed.`}
        </p>
      </div>
      <Vips />
    </main>
  )
}
