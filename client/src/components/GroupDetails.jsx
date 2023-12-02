import "./groupDetails.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as groupService from "../services/groupService";
import * as guestService from "../services/guestService";
import * as formatter from "../utils/dateUtils";
import GuestAddForm from "./GuestAddForm";
import GuestListItem from "./GuestListItem";

export default function GroupDetails({showForm, showGuestAddHandler, children}) {
  const [group, setGroup] = useState({});

  const [transport, setTransport] = useState("");
  // const [showForm, setShowForm] = useState(false);
  const [guests, setGuests] = useState([{}]);
  const { groupId } = useParams();

  useEffect(() => {
    groupService.getOne(groupId).then(setGroup);
  }, [groupId]);

  useEffect(() => {
    setTransport(group.transportation);
  }, [group]);

  useEffect(() => {
    guestService.getAllGuests().then((result) => {
      const filtered = result.filter((guest) => guest.groupId === groupId);
      setGuests(filtered);
    });
  }, [groupId]);

  // const showGuestAddHandler = () => {
  //   if (showForm) {
  //     setShowForm(false);
  //   } else {
  //     setShowForm(true);
  //   }
  // };

  return (
    <>
      <section id="main" className="wrapper">
        <div className="inner">
          <div className="12u">
            <h2 id="content">{group.groupName}</h2>
            <div className="group-details">
            {/* <span className="image left"> */}
             <div className="picture">
              <img
                src={group.imageUrl}
                alt={group.groupName}
                width={500}
                height={350}
              />
            {/* </span> */}
            </div>
            <ul className="alt">
              <li>
                Ship: <h4>{group.ship}</h4>
              </li>
              <li>
                Itinerary: <b>{group.itinerary}</b>
              </li>
              <li>
                Transportation:{" "}
                <a href="#" className={`icon fa-${transport}`}></a>
              </li>
              <li>
                Duration: <b>{group.duration}</b> days
              </li>
              <li>
                Departure date: <b>{formatter.formatDate(group.startDate)}</b>
              </li>
              <li>
                Return date: <b>{formatter.formatDate(group.endDate)}</b>
              </li>
              <li>
                Free capacity: <b>{group.capacity}</b>
              </li>
              <li>
                <span className="price">
                  Inside cabins: <b>€ {group.insidePrice}</b>
                </span>
                <span className="price">
                  Outside cabins: <b>€ {group.outsidePrice}</b>
                </span>
                <span className="price">
                  Balcony cabins: <b>€ {group.balconyPrice}</b>
                </span>
              </li>
            </ul>
            </div>
          </div>

          <div className="row">
            <div className="6u$ 12u$(small)"></div>
          </div>
          <h4>Added by: {group._ownerId}</h4>
          <hr className="major" />
          {/* Elements */}

          <div className="row 200%">
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
                    {guests.map((guest, index) => (
                      <GuestListItem
                        key={index}
                        _id={guest._id}
                        fullName={guest.fullName}
                        email={guest.email}
                        egn={guest.egn}
                        phone={guest.phone}
                        birthDate={guest.birthDate}
                        cabin={guest.cabin}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="12u">
              {/* Buttons */}

             {children}

              {showForm && (
                <GuestAddForm
                  toggler={showGuestAddHandler}
                  setState={setGuests}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
