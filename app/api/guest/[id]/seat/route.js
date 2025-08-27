import { updateGuestSeatPosition } from '@/app/api'

export const dynamic = 'force-dynamic'

export async function PUT(req, { params }) {
  try {
    const { id } = params
    const body = await req.json()
    const { seat_number } = body

    if (!seat_number || isNaN(Number(seat_number))) {
      return new Response(JSON.stringify({ error: 'Invalid seat_number' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    await updateGuestSeatPosition(Number(id), Number(seat_number))

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err) {
    console.error(`Failed to update seat for guest ${params.id}:`, err)
    return new Response(JSON.stringify({ error: err.message || 'Failed to update seat' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
