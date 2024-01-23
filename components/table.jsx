import { timeAgo } from '@/lib/utils';
import Image from 'next/image';
import RefreshButton from './refresh-button';
import { seed } from '@/lib/guests';
import { Search } from './Search'
import { getAllGuests, searchGuests } from '@/app/api';

const Table = async ({ query, currentPage }) => {

  const dataFromApi = await searchGuests(query)
  console.log(dataFromApi)
  const data = dataFromApi.rows
  // useEffect(() => {
  //   const getGuests = async ()  => {
  //     try {
  //       const res = await getAllGuests()
  //       console.log('client side', res)

  //       setData(res.rows)
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }
  //   getGuests()
  // }, [] )

  // useEffect(() => {
  //   const getGuests = async ()  => {
  //     try {

  //       const res = searchTerm ? await searchGuests(searchTerm) : await getAllGuests()
  //       console.log('client side', res)

  //       setData(res.rows)
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }
  //   getGuests()
  // }, [searchTerm] )




  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Recent guests</h2>
        </div>
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">
          { data.map((guest) => (
            <div key={guest.name} className="flex items-center justify-between py-3">
              <div className="space-y-1">
              <p className="font-medium leading-none">{guest.name}</p>
              <p className="text-sm text-gray-500">Attending: {guest.attending ? '✅' : 'not attending'}</p>
              <p className="text-sm text-gray-500">Dietary req: {guest.dietary_requirements ? 'dietery' : 'nothing'}</p>
              <p className="text-sm text-gray-500">Allergies: {guest.allergies}</p>
              <p className="text-sm text-gray-500">Accomodation: {guest.interested_in_accommodation}</p>
              <p className="text-sm text-gray-500">Under 14: {guest.is_under_14}</p>
              <p className="text-sm text-gray-500">{timeAgo(guest.createdAt)}</p>
              </div>
            </div>
          )) }

      </div>
    </div>
  );
};

export default Table;
