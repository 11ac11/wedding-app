import ImgCont from "../../components/img-container"
import CastelldefelsBeach from "../../public/images/castelldefels-beach.png"
import hotelTurret from "../../public/images/hotel-turret.png"
import { ContactBox } from "./contactBox.js"
import Link from 'next/link'
import PinIcon from "../../components/PinIcon"

export default async function Accomodation() {

  return (
    <main>
      <h1>Where to stay</h1>
      <div className="info-section">
        {/* <ImgCont src={aisle} fill={true} className='image' /> */}
        <h2 className="uppercase">The Venue (Hotel Rey Don Jaime)</h2>
        <ImgCont src={hotelTurret} fill={true} className='image' />
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
          (see ` }
          <Link href="/travel" className='inline-link'>{'travel page'}</Link>
          {`).`}
        </p>
        <p>
          {`If you would prefer a different hotel or AirBnB, we recommend staying in Castadefells
          or Barcelona.`}
        </p>
        <Link href="https://maps.app.goo.gl/iCTxM3wwLUpX39Y36" className="inline-link"><PinIcon /> {'Click for Google Maps/Hotel address'}</Link>
      </div>

      <div className="info-section">
        <h2 className="uppercase">Castadefells</h2>
        <p>
          {`The venue is located in the town of Castadefells, which has a lovely
          long, child-friendly beach with soft white sand and calm waters, as well
          as numerous bars and restaurants. It is easy to access Barcelona via
          public transpot for a day trip.`}
        </p>

        <ImgCont src={CastelldefelsBeach} fill={true} className='image' />
      </div>

      <div className="info-section">
        <h2 className="uppercase">Barcelona</h2>
        <p>
          {`Barcelona is within 30 minutes by both train and car so is a good option
          if you want to explore the wonderful city we call home. A taxi back from
          the wedding will probably cost around 40€.`}
        </p>
        <p>
          {`If you would like to stay in Barcelona but would like some advice on whereabouts,
          don't hesitate to contact us!`}
        </p>
      </div>
    </main>
  )
}
