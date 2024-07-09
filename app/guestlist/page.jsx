import GuestlistTable from '@/components/guestlist-table.jsx'
import InsertGuestsForm from '@/components/uploadGuests.jsx'
import { getAllGuests } from '@/app/api';


export default async function Guestlist({ }) {
  const dataFromApi = await getAllGuests();
  console.log(dataFromApi)
  const data = dataFromApi.rows;
  const sortedData = data.sort((a, b) => a.id - b.id);

  const getConfirmedAmount = (data) => {
    return data.filter((guest) => guest.attending).length;
  }

  return (
    <main>
      <h1>Guestlist</h1>
      {`confirmed: ${getConfirmedAmount(sortedData)}`}
      <InsertGuestsForm />
      <GuestlistTable sortedData={sortedData} />
    </main>
  )
}
