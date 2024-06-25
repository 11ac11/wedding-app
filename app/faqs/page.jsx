import { Button } from "@/components/button"
import { Socials } from "@/components/socials"



export default async function FAQs() {

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>FAQs</h1>
      <div className="info-section">
        <h2 className="uppercase">Dresscode</h2>
        <p>
          {`Please come comfotable, it could be hot, but bare in mind we are
          elevated so there should be a nice breeze. Ties/Blazers optional.`}
        </p>
      </div>
      <div className="info-section">
        <h2 className="uppercase">Social Media</h2>
        <p>
          {`We would ask that all guests tag us on any social media posts. After the wedding,
          please upload all photos and videos to our drive by clicking the button below.`}
        </p>
        <Socials />

        <Button text={'Upload'} />
      </div>
    </main>
  )
}
