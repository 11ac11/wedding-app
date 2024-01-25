export default async function HowToGetThere() {

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>How to get there</h1>
      <div className="info-section">
        <h2 className="uppercase">Car</h2>
        <p>
          The venue is only 400 metres from the C-32 motorway and 10 minutes by
          car from El Prat airport. Free parking is provided for those with
          rooms.
        </p>
      </div>

      <div className="info-section">
        <h2 className="uppercase">Train</h2>
        <p>
          Castadafells train station is a 15 minute walk from the venue or a 5
          minute taxi. If you're heading from Barcelona, you can get the R2S
          from Passaig de Gracia or Sants train stations and the journey is
          around 40 minutes on the train.
        </p>
        <br/>
        <p>
          When you get off the train, you need to walk to the closest railway
          crossing bridge and then turn back on yourself. There is a hill
          involved, so depending on your footwear, you may want to get a
          5 minute taxi from the train station.
        </p>
      </div>
    </main>
  )
}
