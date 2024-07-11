import { Button } from "@/components/button"
import { Socials } from "@/components/socials"
import Image from "../../components/hide-img"
import Iceland from "@/public/images/iceland-circle.png"

export default async function FAQs() {

  return (
    <main>
      <Image
        src={Iceland}
        alt="Iceland"
        fill={true}
        width="300px"
      />
      <h1>FAQs</h1>
      <div className="info-section">
        <h2 className="uppercase">RSVP deadline</h2>
        <p>
          {`Please RSVP by 1st July 2025.`}
        </p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Dresscode</h2>
        <p>
          {`It is likely to be warm at the start of September so we would prefer people to come in clothing that they'll feel comfortable in. Ties and blazers are completely optional, open shirts and light dresses won't be frowned upon in the slightest.`}
        </p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Social Media</h2>
        <p>
          {`We would ask that all guests tag us on any social media posts. After the wedding, please upload all photos and videos to our drive by clicking the button below so that we can share all the memories. `}
        </p>
        <Socials />

        <Button text={'Upload photos'} />
      </div>
    </main>
  )
}
