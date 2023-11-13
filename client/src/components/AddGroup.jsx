import { add } from "../services/groupService";
import styles from "./AddGroup.module.css";

export default function AddGroup() {
  return (
    <div className={styles.addForm}>
      <h3>Add New Cruise Group</h3>
      <form method="post" action="#">
        <div className="row uniform">
          <div className="6u 12u$(xsmall)">
            <label htmlFor="name">Group name:</label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue
              placeholder="Name"
            />
            <div
              data-lastpass-icon-root="true"
              style={{
                position: "relative !important",
                height: "0px !important",
                width: "0px !important",
                float: "left !important",
              }}
            />
          </div>
          <div className="6u 12u$(xsmall)">
            <label htmlFor="itinerary">Itinerary</label>
            <input
              type="text"
              name="itinerary"
              id="itinerary"
              defaultValue
              placeholder="Itinerary"
            />
            <div
              data-lastpass-icon-root="true"
              style={{
                position: "relative !important",
                height: "0px !important",
                width: "0px !important",
                float: "left !important",
              }}
            />
          </div>
          <div className="6u 12u$(xsmall)">
            <label htmlFor="from">Departure:</label>
            <input
              type="date"
              name="from"
              id="from"
              defaultValue
              placeholder="from"
            />
            <div
              data-lastpass-icon-root="true"
              style={{
                position: "relative !important",
                height: "0px !important",
                width: "0px !important",
                float: "left !important",
              }}
            />
          </div>
          <div className="6u 12u$(xsmall)">
            <label htmlFor="to">Return:</label>
            <input
              type="date"
              name="to"
              id="to"
              defaultValue
              placeholder="to"
            />
            <div
              data-lastpass-icon-root="true"
              style={{
                position: "relative !important",
                height: "0px !important",
                width: "0px !important",
                float: "left !important",
              }}
            />
          </div>
          <div className="2u 12u$(xsmall)">
            <label htmlFor="duration">Duration:</label>
            <input
              type="number"
              name="duration"
              id="duration"
              defaultValue
              placeholder="Duration"
            />
            <div
              data-lastpass-icon-root="true"
              style={{
                position: "relative !important",
                height: "0px !important",
                width: "0px !important",
                float: "left !important",
              }}
            />
          </div>
          <div className="10u 12u$(xsmall)">
            <label htmlFor="itinerary">ImageUrl</label>
            <input
              type="text"
              name="itinerary"
              id="itinerary"
              defaultValue
              placeholder="Itinerary"
            /></div>
          {/* Break */}
          <div className="12u$">
            <div className="select-wrapper">
              <select name="category" id="category">
                <option value>- Transport -</option>
                <option value={1}>Flight</option>
                <option value={1}>Bus</option>
                <option value={1}>Car</option>
              
              </select>
            </div>
          </div>
          {/* Break */}
        
          {/* Break */}
          <div className="12u$">
            <ul className="actions">
              <li>
                <input type="submit" defaultValue="Send Message" />
              </li>
              <li>
                <input type="reset" defaultValue="Reset" className="alt" />
              </li>
            </ul>
          </div>
        </div>
      </form>
     
    </div>
  );
}
