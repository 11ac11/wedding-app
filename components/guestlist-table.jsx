const GuestlistTable = async ({ currentPage, sortedData }) => {

  const renderRows = (sortedData) => {
    return sortedData.map((guest, index) => {
      console.log(guest)
      return (
        <tr key={guest.name}>
          <td>{index + 1}</td>
          <td>{guest.name}</td>
          <td>{guest.guestlist}</td>
          <td>{guest.attending ? '✅' : '❌'}</td>
          <td>{guest.starter}</td>
          <td>{guest.main}</td>
          <td>{guest.dietary_requirements ? 'dietary' : '-'}</td>
          <td>{guest.interested_in_accommodation}</td>
          <td>{guest.is_under_14 ? 'yes' : 'no'}</td>
        </tr>
      )
    });
  };

  return (
    <table className="guestlist">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Guestlist</th>
          <th>Attending</th>
          <th>Starter</th>
          <th>Main</th>
          <th>Diet.</th>
          <th>Accom.</th>
          <th>Under 14</th>
        </tr>
      </thead>
      <tbody>{renderRows(sortedData)}</tbody>
    </table>
  );
};

export default GuestlistTable;
