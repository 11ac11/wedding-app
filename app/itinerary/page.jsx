export default async function Itinerary() {

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>Itinerary</h1>
      <div className="info-section">
        <h2 className="uppercase">Rough timings on the day</h2>
        <ul>
          <li> 5pm - Arrive for canapes</li>
          <li> 6pm - Ceremony</li>
          <li> 7pm - Dinner</li>
          <li> 9pm - Pre-disco</li>
          <li>11pm - Club</li>
        </ul>
        <p>
          The wedding will take place in the evening to help with the high tempretures
          in September here. The venue is on a hill with a nice breeze, but please wear
          clothing you'll feel comfortable in.
        </p>
      </div>

      <div className="info-section">
        <h2 className="uppercase">Club?!</h2>
        <p>
          The venue offers a private club area which runs until the early hours.
          We'll have a variety of music, starting with some 80s at the beginning
          and gradually navigating through other genres.
        </p>
        <br/>
        <p>
          This part of the evening will an open bar. We would ask that anyone
          who wants to continue the party to provide a 20€ donation towards the bar.
        </p>
      </div>
    </main>
  )
}
