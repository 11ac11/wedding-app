import { Button } from '@/components/button'
import { Socials } from '@/components/socials'
import Image from '../../components/hide-img'
import Iceland from '@/public/images/iceland-circle.png'

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
        <h2 className="uppercase">RSVP deadline</h2>
        <p>{`Please RSVP by 1st June 2025.`}</p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Dresscode</h2>
        <p>{`Smart-casual, as we expect it to be warm in early September. Ties and blazers optional.`}</p>
        <p className="bold">
          {`Ladies: please avoid wearing white or burgundy so that we don't confuse you with the bridal party!`}
        </p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Local Taxis</h2>
        <p>{`You can use the taxi applications Uber, Cabify or Freenow.`}</p>
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
        <h2 className="uppercase">Social Media</h2>
        <p>
          {`We'd love to see all the amazing moments from our special day through your eyes! Feel free to tag us on instagram using our tags below.`}
        </p>
        <Socials />
        <p>
          {`We've also set up a shared drive for photos and videos. After the wedding, click the button below and upload your captures to contribute to our collective memory of the day!`}
        </p>
        <Button text={'Upload photos'} />
      </div>
    </main>
  )
}
