import { useState } from 'react';

import GuestListItem from "./GuestListItem";
import GuestEditForm from '../edit-guest/GuestEditForm';



export default function GuestList({guests, filterGuests}) {

  const[isEdit, setIsEdit] = useState(false);


 
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
              {!isEdit &&
              guests.map((guest) => (
                <GuestListItem
                  key={guest._id}
                  {...guest}
                  filterGuests={filterGuests}
                />
              ))}
              {isEdit && <GuestEditForm toggler={setIsEdit}/> }
            </tbody>
          </table>
        </div>
      </div>
  )
}
