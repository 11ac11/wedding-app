import ImgCont from "../../components/img-container"
import CastelldefelsBeach from "../../public/images/castelldefels-beach.png"
import hotelTurret from "../../public/images/hotel-turret.png"
import { ContactBox } from "./contactBox.js"

export default async function Accomodation() {

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>Where to stay</h1>
      <div className="info-section">
        <h2 className="uppercase">The Venue (Hotel Rey Don Jaime)</h2>
        <p>
          We would love everyone to stay at the venue with us so we can enjoy afternoon,
          evening and the next day together, but understand this might not be the
          best option for everyone.
        </p>
        <p>
          The venue is only 400 metres from the C-32 motorway and 10 minutes by
          car from Barcelona El Prat airport. Free parking is provided for those with
          rooms. It is also easily accessible via public transport from Barcelona
          (see how to get there).
        </p>
        <ContactBox />
        <ImgCont src={hotelTurret} fill={true} className='image' />
      </div>

      <div className="info-section">
        <h2 className="uppercase">In Castadefells</h2>
        <p>
          The venue is located in the town of Castadefells. It has a lovely
          long, child-friendly beach with soft white sand and calm waters, as well
          as numerous bars and restaurants. It is easy to access Barcelona via
          public transpot for a day trip.
        </p>

        <ImgCont src={CastelldefelsBeach} fill={true} className='image' />
      </div>

      <div className="info-section">
        <h2 className="uppercase">In Barcelona</h2>
        <p>
          Barcelona is within 30 minutes by train and car so is a good option
          if you want to explore the wonderful city we call home.
        </p>
        <p>
          Areas we advise to stay in/see:
        </p>
        <p>
          If you want any food recommendations, please see this document:
        </p>
      </div>
    </main>
  )
}
