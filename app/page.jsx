import Image from "next/image"
import hotelTurret from "../public/images/hotel-turret.png"

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default async function App() {

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>We're getting married!</h1>
      <Image src={hotelTurret} quality={100} style={{ borderRadius: '1rem' }}/>
    </main>
  )
}
