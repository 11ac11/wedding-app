import { searchGuests } from '@/app/api';

const Table = async ({ query, currentPage }) => {
  const dataFromApi = await searchGuests(query)
  const data = dataFromApi.rows

  return (
    <div className={ query ? 'table-container fade-in' : 'table-container fade-out' }>
      <div className="table-all-rows">
        { query && data.map((guest) => (
          <div key={guest.name} className="table-row">
            <div className="guest-info guestname-row">
              <p className="uppercase">{guest.name}</p>
              <p className="secondary">Attending: {guest.attending ? '✅' : 'not attending'}</p>
            </div>
            <div className="guest-info">
              <p className="secondary">Dietary req: {guest.dietary_requirements ? 'dietery' : 'nothing'}</p>
              <p className="secondary">Allergies: {guest.allergies}</p>
              <p className="secondary">Accomodation: {guest.interested_in_accommodation}</p>
              <p className="secondary">Under 14: {guest.is_under_14 || 'no'}</p>
            </div>
          </div>
        )) }
      </div>
    </div>
  );
};

export default Table;
