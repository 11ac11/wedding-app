import { ContributeButton } from "./contribute-button.js"
import Image from "../../components/hide-img"
import Granada from "@/public/images/granada circle.png"

export default async function Gifts() {

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Image
        src={Granada}
        alt="Granada"
        fill={true}
        width="400px"
      />
      <h1>Gifts</h1>
      <div className="info-section">
        <p>
          {`We really appreciate many of you are travelling a long way to be here,
          which we know isn't cheap! You being there on our special day is
          already the best gift and we don't expect anything else.`}
        </p>
        <p>
          {`However, if you would like to give a little extra, we would prefer a donation towards
          our honeymoon and wedding costs. You can contribute to our collection pot with a card payment via this link: `}
        </p>
        <ContributeButton />
        <p style={{ marginTop: '1rem', fontSize: '0.7rem' }}>
          {`Please note, clicking the above button will take you to a different site which is 100% secure to process card payments.`}
        </p>
      </div>
    </main>
  )
}
