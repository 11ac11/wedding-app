import fromBcnTrain from "../../public/images/bcn-castelldefels.jpg"
import fromAirportCar from "../../public/images/airport-venue-car.jpg"
import taxiRanks from "../../public/images/train-stations-taxi-rank.jpg"
import ImgCont from "../../components/img-container"

export default async function Travel() {

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>How to get there</h1>
      <div className="info-section">
        {`Personally, we wouldn't recommend hiring a car if you plan to stay in
        Barcelona or Castdelldefels as the public transport is more than adequate.
        However, if you plan on exploring more of Catalunya, then hiring a car would
        be a good option.`}
      </div>
      <div className="info-section">
        <h2 className="uppercase">Train from Barcelona</h2>
        <ImgCont src={fromBcnTrain} fill={true} className='image' />
        <p>
          {`Castadafells train station is a 15 minute walk from the venue or a 5
          minute taxi. If you're heading from Barcelona, you can get the R2S/R2
          from Passaig de Gracia or Sants train stations and the journey is
          around 30 minutes.` }
        </p>
        <ImgCont src={taxiRanks} fill={true} className='image' />
        <p>
          {`There are TWO stations on the RS2/R2 line, 'Castadefells' and
          'Castadefells platja' (beach). Although the platja stop looks closer
          on a map, there isn't a taxi rank and the walk to the hotel is a 15 min
          uphill walk, so we recommend getting off at the first stop, 'Castafedells'
          and getting a taxi (less than 10€) from the rank right outside.` }
        </p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Car/Taxi from Airport</h2>
        <ImgCont src={fromAirportCar} fill={true} className='image' />
        <p>
          {`The venue is only 400 metres from the C-32 motorway and 10 minutes by
          car from El Prat airport. Free parking is provided for those with
          rooms.`}
        </p>
        <p>
          {`A taxi from the airport costs around 20-30€ each way.`}
        </p>
        <p>
          {`A taxi from Barcelona centre costs around 30-50€ each way,
          and the drive is slightly longer than the train (~40 mins depending on traffic).
          You can hail the black and yellow taxis from the street, or book one through
          Uber/Freenow, who tend to be cheaper.`}
        </p>
      </div>


    </main>
  )
}