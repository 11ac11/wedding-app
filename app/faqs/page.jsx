import { Button } from "@/components/button"
import { Socials } from "@/components/socials"
import Image from "../../components/hide-img"
import Iceland from "@/public/images/iceland-circle.png"
import CircleImage from "../../components/shrink-img"

export default async function FAQs() {

  return (
    <main>
      {/* <CircleImage src={'images/iceland-circle.png'} /> */}
      <Image
        src={Iceland}
        alt="Iceland"
        fill={true}
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
          {`Barcelona's early September weather is likely to be warm, so we want everyone to feel comfortable throughout the celebrations. Ties and jackets are entirely optional - think open shirts and breezy dresses, and you'll be perfectly in tune with the atmosphere.`}
        </p>
        <p className="bold">
          {`A friendly heads-up: Just to avoid any accidental colour clashes, our lovely bridesmaids will be sporting burgundy, so feel free to dress to impress in any other delightful hue!`}
        </p>
        <p>
          {`We can't wait to celebrate with you in style!`}
        </p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Social Media</h2>
        <p>
          {`We'd love to see all the amazing moments from our special day through your eyes! Feel free to tag us on instagram using our tags below - we can't wait to see your snaps and stories.`}
        </p>
        <Socials />
        <p>
          {`To make sure we can relive all the laughter and joy, we've set up a shared drive for photos and videos. After the wedding, simply click the button below and upload your captures to contribute to our collective memory of the day!`}
        </p>
        <Button text={'Upload photos'} />
      </div>
    </main>
  )
}
