import Image from "next/image";
import fromBcnTrain from "../../public/images/bcn-castelldefels.jpg"
import fromAirportCar from "../../public/images/airport-venue-car.jpg"

export default async function HowToGetThere() {

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>How to get there</h1>
      <div className="info-section">
        { `Personally, we wouldn't recommend hiring a car if you plan to stay in
        Barcelona or Castdelldefels as the public transport is more than adequate.
        However, if you plan on exploring more of Catalunya, then hiring a car would
        be a good option.`}
      </div>
      <div className="info-section">
        <h2 className="uppercase">Train from Barcelona</h2>
        <Image src={fromBcnTrain} width={800} />
        <p>
          { `Castadafells train station is a 15 minute walk from the venue or a 5
          minute taxi. If you're heading from Barcelona, you can get the R2S/R2
          from Passaig de Gracia or Sants train stations and the journey is
          around 30 minutes.` }
        </p>
        <p>
          { `Once you get off the train at Castelldefels, you need to walk to
          the closest railway crossing bridge and then turn back on yourself.
          There is a hill involved, so depending on your footwear, you may want
          to get the 5 minute taxi from the train station.` }
        </p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Car/Taxi from Airport</h2>
        <Image src={fromAirportCar} width={800} />
        <p>
          { `The venue is only 400 metres from the C-32 motorway and 10 minutes by
          car from El Prat airport. Free parking is provided for those with
          rooms.`}
        </p>
        <p>
          { `A taxi from the airport costs around 20-30€ each way.` }
        </p>
        <p>
          { `A taxi from Barcelona centre costs around 30-50€ each way,
          and the drive is slightly longer than the train (~40 mins depending on traffic).
          You can hail the black and yellow taxis from the street, or book one through
          Uber/Freenow, although Uber/Freenow tend to be cheaper.`}
        </p>
      </div>


    </main>
  )
}
