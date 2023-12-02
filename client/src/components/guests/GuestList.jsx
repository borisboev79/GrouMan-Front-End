import GuestListItem from "./GuestListItem";

export default function GuestList({guests}) {
 
  return (
  
      <div className="12u">
        {/* Table */}
        <h3>Guests in group</h3>
        <div className="table-wrapper">
          <table className="alt">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>EGN</th>
                <th>Phone</th>
                <th>Birthdate</th>
                <th>Cabin Type</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest) => (
                <GuestListItem
                  key={guest._id}
                  {...guest}
                  // _id={guest._id}
                  // _ownerId = {guest._ownerId}
                  // fullName={guest.fullName}
                  // email={guest.email}
                  // egn={guest.egn}
                  // phone={guest.phone}
                  // birthDate={guest.birthDate}
                  // cabin={guest.cabin}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
  )
}
