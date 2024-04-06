import GuestlistTable from '@/components/guestlist-table.jsx'
import InsertGuestsForm from '@/components/uploadGuests.jsx'
import { getAllGuests } from '@/app/api';


export default async function Guestlist({ searchParams }) {
  const currentPage = Number(searchParams?.page) || 1;

  const dataFromApi = await getAllGuests();
  const data = dataFromApi.rows;
  const sortedData = data.sort((a, b) => a.id - b.id);

  const getConfirmedAmount = (data) => {
    return data.filter((guest) => guest.attending).length;
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>Guestlist</h1>
      {`confirmed: ${getConfirmedAmount(sortedData)}`}
      <InsertGuestsForm />
      <GuestlistTable currentPage={currentPage} sortedData={sortedData} />
    </main>
  )
}
