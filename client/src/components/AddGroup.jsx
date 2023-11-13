import { add } from "../services/groupService";
import styles from "./AddGroup.module.css";

export default function AddGroup() {
  return (
    <div className={styles.addForm}>
      <h3>Add Group</h3>
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
            <label htmlFor="duration">Duration</label>
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
          <div className="6u 12u$(xsmall)">
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
                <option value>- Category -</option>
                <option value={1}>Manufacturing</option>
                <option value={1}>Shipping</option>
                <option value={1}>Administration</option>
                <option value={1}>Human Resources</option>
              </select>
            </div>
          </div>
          {/* Break */}
          <div className="4u 12u$(small)">
            <input
              type="radio"
              id="priority-low"
              name="priority"
              defaultChecked
            />
            <label htmlFor="priority-low">Low Priority</label>
          </div>
          <div className="4u 12u$(small)">
            <input type="radio" id="priority-normal" name="priority" />
            <label htmlFor="priority-normal">Normal Priority</label>
          </div>
          <div className="4u$ 12u$(small)">
            <input type="radio" id="priority-high" name="priority" />
            <label htmlFor="priority-high">High Priority</label>
          </div>
          {/* Break */}
          <div className="6u 12u$(small)">
            <input type="checkbox" id="copy" name="copy" />
            <label htmlFor="copy">Email me a copy of this message</label>
          </div>
          <div className="6u$ 12u$(small)">
            <input type="checkbox" id="human" name="human" defaultChecked />
            <label htmlFor="human">I am a human and not a robot</label>
          </div>
          {/* Break */}
          <div className="12u$">
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              rows={6}
              data-gramm="false"
              wt-ignore-input="true"
              defaultValue={""}
            />
          </div>
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
      <form method="post" action="#">
        <div className="row uniform">
          <div className="6u 12u$(xsmall)">
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
          <div className="6u$ 12u$(xsmall)">
            <input
              type="email"
              name="email"
              id="email"
              defaultValue
              placeholder="Email"
            />
          </div>
          {/* Break */}
          <div className="12u$">
            <div className="select-wrapper">
              <select name="category" id="category">
                <option value>- Category -</option>
                <option value={1}>Manufacturing</option>
                <option value={1}>Shipping</option>
                <option value={1}>Administration</option>
                <option value={1}>Human Resources</option>
              </select>
            </div>
          </div>
          {/* Break */}
          <div className="4u 12u$(small)">
            <input
              type="radio"
              id="priority-low"
              name="priority"
              defaultChecked
            />
            <label htmlFor="priority-low">Low Priority</label>
          </div>
          <div className="4u 12u$(small)">
            <input type="radio" id="priority-normal" name="priority" />
            <label htmlFor="priority-normal">Normal Priority</label>
          </div>
          <div className="4u$ 12u$(small)">
            <input type="radio" id="priority-high" name="priority" />
            <label htmlFor="priority-high">High Priority</label>
          </div>
          {/* Break */}
          <div className="6u 12u$(small)">
            <input type="checkbox" id="copy" name="copy" />
            <label htmlFor="copy">Email me a copy of this message</label>
          </div>
          <div className="6u$ 12u$(small)">
            <input type="checkbox" id="human" name="human" defaultChecked />
            <label htmlFor="human">I am a human and not a robot</label>
          </div>
          {/* Break */}
          <div className="12u$">
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              rows={6}
              data-gramm="false"
              wt-ignore-input="true"
              defaultValue={""}
            />
          </div>
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
