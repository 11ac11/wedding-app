import Image from "next/image"
import VidCont from '../components/vid-container'

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default async function App() {

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="getting-married low">{ `We're getting married!`}</h1>
      <h1 className="getting-married">{ `We're getting married!`}</h1>
      <VidCont />

    </main>
  )
}
