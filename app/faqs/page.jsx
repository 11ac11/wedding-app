import React from 'react'
import { Button } from '@/components/button'
import { UploadPhotoButton } from '@/components/UploadPhotoButton'
import { Socials } from '@/components/socials'
import Image from '../../components/hide-img'
import Iceland from '@/public/images/iceland-circle.png'
import Link from 'next/link'

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: `FAQs`,
  appleWebApp: {
    title: `Robyn + Alex's Wedding`,
    statusBarStyle: 'black-translucent'
  }
}

export default async function FAQs() {
  return (
    <main>
      <Image src={Iceland} alt="Iceland" fill={true} />
      <h1>FAQs</h1>
      <div className="info-section">
        <h2 className="uppercase" style={{ fontSize: '2rem', textAlign: 'center', borderBottom: 0 }}>
          Ceremony
        </h2>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Dresscode</h2>
        <p>{`Smart-casual, as we expect it to be warm in early September. Ties and blazers optional.`}</p>
        <p className="bold">
          {`Ladies: please avoid wearing white or burgundy/copper so that we don't confuse you with the bridal party!`}
        </p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Phones</h2>
        <p>{`We welcome people using phones for photos and videos at the ceremony, but please ensure all phones are on silent.`}</p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Social Media</h2>
        <p>
          {`We'd love to see all the amazing moments from our special day through your eyes! Feel free to tag us on instagram using our tags below.`}
        </p>
        <Socials />
      </div>
      <div className="info-section">
        <h2 className="uppercase">Share Your Photos</h2>
        <p>
          {`We've also set up a shared drive for photos and videos. After the wedding, click the button below and upload your captures to contribute to our collective memory of the day!`}
        </p>
        <UploadPhotoButton />
      </div>
      <div className="info-section">
        <h2 className="uppercase">RSVP deadline</h2>
        <p>{`Please RSVP by 1st June 2025.`}</p>
      </div>
      <div className="info-section">
        <h2 className="uppercase" style={{ fontSize: '2rem', textAlign: 'center', borderBottom: 0 }}>
          Hotel
        </h2>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Address/getting there</h2>
        <p>{`Gran Hotel Rey Don Jaime, Avinguda de l'Hotel, 22, 08860 Castelldefels, Barcelona`}</p>
        <p>
          {`For more information on how to get there, please see the `}
          <Link href="/travel" className="inline-link">
            {'travel page.'}
          </Link>
        </p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Around the hotel</h2>
        <p>{`The hotel is on a big hill which can be a challenge in the heat. Walking down to the town is not so bad, but we recommend a taxi to return the hotel.`}</p>
        <p>
          {`The closest supermarket is a `}
          <a
            href="https://maps.app.goo.gl/zZogd35wuv3SMLLdA"
            className="inline-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Condis (check on google maps)'}
          </a>
          {` which is the same side of the train tracks to the hotel.`}
        </p>
        <p>{`Most of the bars, cafes and restaurants are the other side of the train tracks, towards the beach. To get there from the hotel, go down the hill, turn right and head towards the bridge to cross the train tracks. Once over the bridge, head towards the beach and you will start seeing things.`}</p>
        <a
          href="https://maps.app.goo.gl/BVgiAvZhW6RJZRj27"
          className="inline-link"
          target="_blank"
          rel="noopener noreferrer"
        >{`See walking route on google maps`}</a>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Breakfast</h2>
        <p>{`Breakfast at the hotel is 17.50€ per person, and is from 07:00am-10.30am every day.`}</p>
        <p>{`As the hotel is on a hill, not near any cafes and the town is 15 minute walk away, we would recommend getting breakfast at the venue. That is, unless you don't mind getting a taxi or the challenging walk back!`}</p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Check in/Check out</h2>
        <p>{`Check in: 15:00`}</p>
        <p>{`Check out: 12:00`}</p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Spa</h2>
        <p>{`If you have a booked a room, you will get 50% discount on the spa facilities, but you must book your slot through reception.`}</p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Local Taxis</h2>
        <p>{`You can use the taxi applications Uber, Cabify or Freenow, although they are not as available as they are in Barcelona city centre. Alternatively, you can ask the hotel to book one for you or call yourself.`}</p>
        <p>
          {`The local Castelldefels taxi number is: `}
          <a href="tel:+34956652222" className="inline-link">
            +34 95 665 22 22
          </a>
        </p>
        <p>
          {`Or you can book online with them here (more than 2 hours in advance): `}
          <a href="https://taxifels.es/en/" className="inline-link">
            taxifels.es/en/
          </a>
        </p>
      </div>
      <div className="info-section">
        <h2 className="uppercase" style={{ fontSize: '2rem', textAlign: 'center', borderBottom: 0 }}>
          Thursday/Saturday events
        </h2>
      </div>
      <p>
        {`For addresses and information on how to get there, please see the `}
        <Link href="/itinerary" className="inline-link">
          {'itinerary page.'}
        </Link>
      </p>
    </main>
  )
}
