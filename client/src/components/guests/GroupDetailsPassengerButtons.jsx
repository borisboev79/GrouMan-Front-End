import { useContext } from 'react';
import  { Link } from 'react-router-dom';

import AuthContext from "../../contexts/authContext";


const GroupDetailsPassengerButtons = ({ showForm, showGuestAddHandler }) => {
const {isAuthenticated } = useContext(AuthContext);

  return (
    <ul className="actions">
      {isAuthenticated && 
      <li>
        <Link onClick={showGuestAddHandler} className="button">
          {!showForm ? "Add Passenger" : "Cancel Add Passenger"}
        </Link>
      </li>}
      <li>
        <Link to="/groups" className="button alt">
          Back to all groups
        </Link>
      </li>
    </ul>
  );
};

export default GroupDetailsPassengerButtons;
