import fromBcnTrain from "../../public/images/bcn-castelldefels.jpg"
import fromAirportCar from "../../public/images/airport-venue-car.jpg"
import taxiRanks from "../../public/images/train-stations-taxi-rank.jpg"
import ImgCont from "../../components/img-container"
import HideImage from "../../components/hide-img"
import Turrent from "@/public/images/image2 1.png"
import Tenerife from "@/public/images/tenerife-circle.png"
import R2Logo from "@/public/images/R2.svg"
import Image from "next/image"

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: `Travel`,
  description: '5 September 2025',
  appleWebApp: {
    title: `Robyn + Alex's Wedding`,
    statusBarStyle: 'black-translucent',
  },
}

export default async function Travel() {

  return (
    <main>
      <HideImage
        src={Tenerife}
        alt="Tenerife"
        fill={true}
      />
      <h1>How to get there</h1>
      <div className="info-section">
        <h2 className="uppercase">Train from Barcelona</h2>
        <ImgCont
          src={fromBcnTrain}
          fill={true}
          className='image'
          alt="Barcelona train map" />
        <p>
          {`Castelldefels train station is a 15 minute walk from the venue or a 5 minute taxi. If you're heading from Barcelona, you can get the R2S/R2 from Passaig de Gracia or Sants train stations and the journey is
          around 30 minutes.`}
        </p>
        <p>
          {`Both Barcelona and Castelldefels are in zone 1.`}
        </p>
        <h4>{`Line/Boarding Stations:`}</h4>
        <ul>
          <li>
            Line:
            <Image src={R2Logo} width={20} style={{ position: "relative", top: "5px", left: "5px" }} alt="R2" />
          </li>
          <li>{`Frequency: every 15 mins`}</li>
          <li>
            {`From: Estacio de Francia, Passeig de Gracia or Barcelona Sants`}
          </li>
        </ul>
        <h4>{`Arrival Station:`}</h4>
        <ul>
          <li>{`Recommended: Castelldefels Train Station (then short 10 min, 10€ taxi from there)`}</li>
          <li>{`Castelldefels Platja Station (closer, but no taxi rank and 15 min uphill walk to hotel)`}</li>
        </ul>
        <h4>{`Price:`}</h4>
        <ul>
          <li>{`Single: 2,55€`}</li>
          <li>{`Part of T-casual (10 journeys): 11,35€`}</li>
        </ul>
        <h4>{`Trip duration:`}</h4>
        <ul>
          <li>{`Estacio de Francia station: ~45 mins`}</li>
          <li>{`Passaig de Gracia station: ~35 mins`}</li>
          <li>{`Barcelona-Sants station: ~30 mins`}</li>
        </ul>
        <ImgCont
          src={taxiRanks}
          fill={true}
          className='image'
          alt="Taxi info" />
        <p>
          {`There are TWO stations on the RS2/R2 line, 'Castelldefels' and
          'Castelldefels platja' (beach). Although the platja stop looks closer
          on a map, there isn't a taxi rank and the walk to the hotel is a 15 min uphill walk, so we recommend getting off at the first stop, 'Castelldefels' and getting a taxi (less than 10€) from the rank right outside.` }
        </p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Taxi from Barcelona</h2>
        <p>
          {`The drive is slightly longer than the train (~40 mins depending on traffic). You can hail the black and yellow taxis from the street, or book one through Uber/Freenow/Cabify, who tend to be cheaper.`}
        </p>
        <h4>{`Price:`}</h4>
        <ul>
          <li>{`4 seater: ~30-50€ each way`}</li>
          <li>{`6 seater: ~60-80€ each way`}</li>
        </ul>
        <h4>{`Trip duration:`}</h4>
        <ul>
          <li>{`~40 mins`}</li>
        </ul>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Car/Taxi from Airport</h2>
        <ImgCont
          src={fromAirportCar}
          fill={true}
          className='image'
          alt="Instructions from airport in car" />
        <p>
          {`The venue is only 400 metres from the C-32 motorway and 10 minutes by car from El Prat airport. Free parking is provided for those with
          rooms.`}
        </p>
        <p>
          {`A taxi from the airport costs around 20-30€ each way.`}
        </p>
      </div>


    </main>
  )
}
