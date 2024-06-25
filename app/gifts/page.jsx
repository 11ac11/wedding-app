import { Button } from "../../components/button"

export default async function Gifts() {

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>Gifts</h1>
      <div className="info-section">
        {/* <h2 className="uppercase">Gifts</h2> */}
        <p>
          {`We really appreciate many of you are travelling a long way to be here,
          which we know isn't cheap! You being there on our special day is
          already the best gift and we don't expect anything else.`}
        </p>
        <p>
          {`However, if you would like to give a little extra, we would prefer a donation towards
          our honeymoney. You can contribute to our honeymoney pot with a card payment via this link: `}
        </p>
        <Button text="I'd like to contribute" />
      </div>
    </main>
  )
}
