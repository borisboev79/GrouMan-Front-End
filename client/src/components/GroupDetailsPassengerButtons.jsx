import  { Link } from 'react-router-dom';

const GroupDetailsPassengerButtons = ({ showForm, showGuestAddHandler }) => {
  return (
    <ul className="actions">
      <li>
        <Link onClick={showGuestAddHandler} className="button">
          {!showForm ? "Add Passenger" : "Cancel Add Passenger"}
        </Link>
      </li>
      <li>
        <Link to="/groups" className="button alt">
          Back to all groups
        </Link>
      </li>
    </ul>
  );
};

export default GroupDetailsPassengerButtons;
