import Image from "next/image"
import VidCont from '../components/vid-container'

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default async function App() {

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <VidCont />
      <h1 className="getting-married low">{`Robyn & Alex`}</h1>
      <h1 className="getting-married low second">{`are getting married!`}</h1>
      <h3>FRIDAY 05 SEPT. 2025</h3>
      <h3 style={{ textTransform: 'uppercase' }}>We kindly request you to join us</h3>
      <h3 style={{ textTransform: 'uppercase' }}>for the celebration</h3>
    </main>
  )
}
