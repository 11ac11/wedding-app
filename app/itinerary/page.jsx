import React from 'react'
import HideImage from '../../components/hide-img'
import CircleImage from '../../components/shrink-img'
import aisle from '../../public/images/aisle-circle.png'
import Kenya from '../../public/images/kenya2-circle.png'
import { Vips } from './vips.jsx'
import { TimeAndEvent } from '../../components/TimeAndEvent.jsx'

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: `Itinerary`,
  appleWebApp: {
    title: `Robyn + Alex's Wedding`,
    statusBarStyle: 'black-translucent'
  }
}

export default async function Itinerary() {
  return (
    <main>
      {/* <CircleImage src={'images/aisle-circle.png'} /> */}
      <HideImage src={Kenya} alt="Kenya" fill={true} />
      <h1>Itinerary</h1>
      <div className="info-section">
        <h2 className="uppercase">{`STEN - TBC (in Barcelona)`}</h2>
        <p>
          {`To kick off the wedding celebrations, we're planning a relaxed get-together for some drinks and catching up with everyone a few days before the big day.`}
        </p>
        <p>
          {`Exact details such as date, time, and location are still being finalised, but we'll keep you posted soon.`}
        </p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Wedding Day - Fri 5th Sept</h2>
        <TimeAndEvent time={'18:00'} event={'Ceremony'} />
        <TimeAndEvent time={'18:30'} event={'Appetizers'} />
        <TimeAndEvent time={'19:30'} event={'Dinner'} />
        <TimeAndEvent time={'21:30'} event={'Pre-disco'} />
        <TimeAndEvent time={'00:00'} event={'Club (on-site in hotel)'} />
        <TimeAndEvent time={'04:00'} event={'Fin.'} />
      </div>
      <div className="info-section">
        <h2 className="uppercase">Sat 6th Sept</h2>
        <p>
          {`We're planning on heading to a bar by the beach the following day. Only a quick 5-minute taxi ride from the hotel, it'll be an extra opportunity to catch up with everyone and recount our memories of the main event.`}
        </p>
        <p>
          {`We're are also still finalising the details for this, but we'll update everyone when things are confirmed.`}
        </p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Sun 7th Sept</h2>
        <p>{`Robyn and I will be leaving the hotel around midday to go on our minimoon.`}</p>
      </div>
      <Vips />
    </main>
  )
}
