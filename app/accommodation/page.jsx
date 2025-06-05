import ImgCont from '../../components/img-container'
import CastelldefelsBeach from '../../public/images/castelldefels-beach.png'
import hotelTurret from '../../public/images/hotel-turret.png'
import { ContactBox } from './contactBox.jsx'
import Link from 'next/link'
import HideImage from '../../components/hide-img'
import LocationInfo from '@/components/LocationInfo'
import Mexico from '@/public/images/mexico-circle.png'

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: `Accommodation`,
  appleWebApp: {
    title: `Robyn + Alex's Wedding`,
    statusBarStyle: 'black-translucent'
  }
}

export default async function Accommodation() {
  return (
    <main>
      <HideImage src={Mexico} alt="Mexico" fill={true} />
      <h1>Where to stay</h1>
      <div className="info-section" id="hotel">
        {/* <ImgCont src={aisle} fill={true} className='image' /> */}
        <h2 className="uppercase">The Venue (Hotel Rey Don Jaime)</h2>
        <ImgCont src={hotelTurret} fill={true} className="image" alt="Turret" />
        <ContactBox />
        <p>
          {`We would love everyone to stay at the venue with us so we can enjoy afternoon,
          evening and the next day together, but understand this might not be the
          best option for everyone.`}
        </p>
        <p>
          {`The venue is only 400 metres from the C-32 motorway and 10 minutes by
          car from Barcelona El Prat airport. Free parking is provided for those with
          rooms. It is also easily accessible via public transport from Barcelona
          (see `}
          <Link href="/travel" className="inline-link">
            {'travel page'}
          </Link>
          {`).`}
        </p>
        <LocationInfo handleCloseId={'hotel'} linkColor={'var(--offblack)'} openText={'Click here for map/location'}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11995.800152543743!2d1.9570958105940228!3d41.26642372454822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4829b7646e45d%3A0x8d152959c81572f3!2sGran%20Hotel%20Rey%20Don%20Jaime!5e0!3m2!1sen!2ses!4v1749114223960!5m2!1sen!2ses"
            width="100%"
            height="450"
            style={{ border: '0px', borderRadius: '2px' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </LocationInfo>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Other options</h2>
        <p
          style={{ marginTop: '1rem' }}
        >{`If you would prefer a different hotel or AirBnB, we recommend staying in Castelldefels or Barcelona.`}</p>
        <h2 className="uppercase">Castelldefels</h2>
        <p>
          {`The venue is located in the town of Castelldefels, which boasts a long stretch of soft, white sand that gives way to calm, shallow waters, as well as numerous bars and restaurants. It is easy to access Barcelona via public transpot for a day trip.`}
        </p>

        <ImgCont src={CastelldefelsBeach} fill={true} className="image" alt="Castelldefels beach" />
      </div>

      <div className="info-section">
        <h2 className="uppercase">Barcelona</h2>
        <p>
          {`Barcelona is within 30 minutes by both train and car. A taxi back from the wedding will probably cost around 40€.`}
        </p>
        <p>
          {`If you would like to stay in Barcelona but would like some advice on whereabouts, don't hesitate to contact us.`}
        </p>
      </div>
    </main>
  )
}
