import GuestlistTable from '@/components/guestlist-table.jsx'
import InsertGuestsForm from '@/components/uploadGuests.jsx'

export default async function Gueslist({ searchParams }) {
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>Guestlist</h1>
      <GuestlistTable currentPage={currentPage} />
      <InsertGuestsForm />
    </main>
  )
}
