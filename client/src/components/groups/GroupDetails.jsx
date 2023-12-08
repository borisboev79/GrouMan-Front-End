import "./GroupDetails.css";
import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import * as groupService from "../../services/groupService";
import * as guestService from "../../services/guestService";
import * as formatter from "../../utils/dateUtils";

import GuestAddForm from "../guests/GuestAddForm";
import GuestEditForm from "../edit-guest/GuestEditForm";
import GuestList from "../guests/GuestList";
import Path from "../../paths";
import AuthContext from "../../contexts/authContext";
import GuestContext from "../../contexts/guestContext";
import GuestDeleteModal from "../delete-guest/GuestDeleteModal";
import GroupDeleteModal from "../delete-group/GroupDeleteModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faShip,
  faPlaneDeparture,
  faCar,
  faBus,
} from "@fortawesome/free-solid-svg-icons";

export default function GroupDetails({
  showForm,
  showGuestAddHandler,
  children,
}) {
  const navigate = useNavigate();
  const [group, setGroup] = useState([{}]);
  const { isAuthenticated } = useContext(AuthContext);
  const { userId } = useContext(AuthContext);
  const { groupId } = useParams();
  const [showGroupDelete, setShowGroupDelete] = useState(false);
  const [groupOwner, setOwner] = useState({});



  const showDeleteGroupToggler = () => {
    if (showGroupDelete) {
      setShowGroupDelete(false);
      scrolLockToggler();
    } else {
      setShowGroupDelete(true);
      scrolLockToggler();
    }
  };

  const [guests, setGuests] = useState([]);

  const { guestId } = useContext(GuestContext);
  const { showEdit } = useContext(GuestContext);
  const [guestToDelete, setGuestToDelete] = useState({});
  const { showDelete } = useContext(GuestContext);
  const { scrolLockToggler } = useContext(GuestContext);

  useEffect(() => {
    guestService.getOne(guestId).then(setGuestToDelete);
  }, [guestId]);

  const filterGuests = (guestId) => {
    const result = guests.filter((guest) => guest._id !== guestId);
    setGuests(result);
  };

  const deleteGuestClickHandler = async (userId) => {
    await guestService.remove(userId);
    filterGuests(guestId);
  };

  useEffect(() => {
    groupService.getOne(groupId).then(setGroup);
  }, [groupId]);


  useEffect(() => {
    if(group.owner !== undefined){
       setOwner(group.owner);
    } 
  }, [group]);

  useEffect(() => {
    guestService.getAllGuests().then((result) => {
      const filtered = result.filter((guest) => guest.groupId === groupId);
      setGuests(filtered);
    });
  }, [groupId, showEdit]);

  const deleteGroupClickHandler = async () => {
    await groupService.remove(groupId);

    navigate(Path.Groups);
  };

  return (
    <>
      {/* DeleteGroup Modal */}
      {showGroupDelete && (
        <GroupDeleteModal
          onDelete={deleteGroupClickHandler}
          showDeleteGroupToggler={showDeleteGroupToggler}
          {...group}
        />
      )}
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
                <p className="author">Group created by: <b>{groupOwner.username}</b></p>
              </div>
              <ul className="alt">
                <li>
                  Ship: <h4>{group.ship}</h4>
                </li>
                <li>
                  Itinerary: <b>{group.itinerary}</b>
                </li>
                <li>
                  Transportation:
                  {group.transportation === "plane" && (
                    <span className="transport-icon">
                      <FontAwesomeIcon icon={faPlaneDeparture} />
                    </span>
                  )}
                  {group.transportation === "car" && (
                    <span className="transport-icon">
                      <FontAwesomeIcon icon={faCar} />
                    </span>
                  )}
                  {group.transportation === "bus" && (
                    <span className="transport-icon">
                      <FontAwesomeIcon icon={faBus} />
                    </span>
                  )}
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

          <div className="group-buttons">
            {isAuthenticated && userId === group._ownerId && (
              <>
                <Link className="button small" to={`/groups/${groupId}/edit`}>
                  Edit Group
                </Link>
                <button
                  className="button alt small spec"
                  onClick={() => [showDeleteGroupToggler(), scrolLockToggler()]}
                >
                  Delete Group
                </button>
              </>
            )}
          </div>
          <hr className="major" />
          {/* DeleteGuest Modal */}
          {showDelete && (
            <GuestDeleteModal
              onDelete={deleteGuestClickHandler}
              {...guestToDelete}
            />
          )}

          {/* GuestList */}
          <div className="row 200%">
            {guests.length !== 0 ? (
              <div className="12u">
                <GuestList guests={guests} filterGuests={filterGuests} />
              </div>
            ) : (
              <div
                style={{
                  paddingTop: "1em",
                  height: "10em",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <h2>
                  {/* <FontAwesomeIcon icon={faPeople} /> */}
                  <FontAwesomeIcon icon={faPeopleGroup} />{" "}
                  <span>No Guests Yet </span>
                  <FontAwesomeIcon icon={faShip} />
                </h2>
                <p>
                  <b>Login to enroll your clients.</b>
                </p>
              </div>
            )}
            {/* Buttons */}
            {!showEdit && (
              <div className="12u">
                {children}

                {showForm && (
                  <GuestAddForm
                    toggler={showGuestAddHandler}
                    setState={setGuests}
                  />
                )}
              </div>
            )}
            <div className="12u">
              {showEdit && <GuestEditForm groupId={groupId} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
