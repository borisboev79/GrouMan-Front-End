import "./groupDetails.css";
import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import * as groupService from "../../services/groupService";
import * as guestService from "../../services/guestService";
import * as formatter from "../../utils/dateUtils";

import GuestAddForm from "../guests/GuestAddForm";
import GuestList from "../guests/GuestList";
import Path from "../../paths";
import AuthContext from "../../contexts/authContext";

export default function GroupDetails({
  showForm,
  showGuestAddHandler,
  children,
}) {
  const navigate = useNavigate();
  const [group, setGroup] = useState({});
  const { isAuthenticated } = useContext(AuthContext);
  const { userId } = useContext(AuthContext);

  const [transport, setTransport] = useState("");
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

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(`Are you sure you want to delete ${group.groupName}?`);

    if (hasConfirmed) {
        await groupService.remove(groupId);

        navigate(Path.Groups);
    }
  }

  return (
    <>
      <section id="main" className="wrapper">
        <div className="inner">
          <div className="12u">
            <h2 id="content">{group.groupName}</h2>
            <div className="group-details">
              <div className="picture">
                <img
                  src={group.imageUrl}
                  alt={group.groupName}
                  width={500}
                  height={350}
                />
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
          {isAuthenticated && (userId === group._ownerId &&
          <>
          <Link className="button fit small" to={`/groups/${groupId}/edit`}>
            Edit Group
          </Link>
          <button className="button fit small" onClick={deleteButtonClickHandler}>
            Delete Group
          </button>
          </>)}

          <hr className="major" />

          {/* GuestList */}
          <div className="row 200%">
            <div className="12u">
              <GuestList guests={guests} />
            </div>
            {/* Buttons */}
            <div className="12u">
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
