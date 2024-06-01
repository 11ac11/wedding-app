export default async function Itinerary() {

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>Itinerary</h1>
      <div className="info-section">
        <h2 className="uppercase">Schedule</h2>
        <ul>
          <li>18:00 - Ceremony</li>
          <li>18:30 - Appetizers</li>
          <li>19:30 - Dinner</li>
          <li>21:30 - Pre-disco</li>
          <li>00:00 - Club</li>
          <li>04:00 - Fin.</li>
        </ul>
        <p>
          {`The wedding will take place in the evening to help with the high tempretures
          in September here. The venue is on a hill with a nice breeze, but please wear
          clothing you'll feel comfortable in. Ties/blazers etc. are not mandatory.`}
        </p>
      </div>

      <div className="info-section">
        <h2 className="uppercase">Club?!</h2>
        <p>
          {`The venue offers a private club area which runs until the early hours.
          We'll have a variety of music, starting with some 80s at the beginning
          and gradually navigating through other genres.` }
        </p>
        <p>
          {`This part of the evening will an open bar. We would ask that anyone
          who wants to continue the party to provide a 20€ donation towards the bar.` }
        </p>
      </div>
    </main>
  )
}
