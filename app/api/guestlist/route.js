import { getAllGuests } from '@/app/api' // your DB helper file

// This tells Next.js not to cache this route — always fetch fresh data
export const dynamic = 'force-dynamic'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const attending = searchParams.get('attending') || 'Yes'

    const guests = await getAllGuests({ attending })

    return new Response(JSON.stringify(guests), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err) {
    console.error('Failed to fetch guests:', err)
    return new Response(JSON.stringify({ error: 'Failed to fetch guests' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
