import VidCont from '../components/vid-container'

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default async function App() {

  return (
    <main>
      <VidCont />
      <h1 className="getting-married low">{`Robyn + Alex`}</h1>
      <h1 className="getting-married low second">{`are getting married!`}</h1>
      <h3>FRIDAY 05 SEPT. 2025</h3>
    </main>
  )
}
