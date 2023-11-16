import "./groupDetails.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as groupService from "../services/groupService";
import * as formatter from "../utils/dateUtils";

export default function GroupDetails() {
  const [group, setGroup] = useState({});
  const { groupId } = useParams();

  useEffect(() => {
    groupService.getOne(groupId).then(setGroup);
  }, [groupId]);

  return (
    <>
      <section id="main" className="wrapper">
        <div className="inner">
          <div className="12u">
            <h2 id="content">{group.groupName}</h2>

            <span className="image left">
              <img
                src={group.imageUrl}
                alt={group.groupName}
                width={430}
                height={330}
              />
            </span>
            <ul className="alt">
              <li>
                Ship: <h4>{group.ship}</h4>
              </li>
              <li>
                Itinerary: <b>{group.itinerary}</b>
              </li>
              <li>
                Transportation: <a href="#" className="icon fa-plane"></a>{" "}
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

          <div className="row">
            <div className="6u$ 12u$(small)"></div>
          </div>
          <hr className="major" />
          {/* Elements */}

          <div className="row 200%">
            <div className="12u">
              {/* Table */}
              <h3>Table</h3>
              <div className="table-wrapper">
                <table className="alt">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item 1</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item 2</td>
                      <td>Vis ac commodo adipiscing arcu aliquet.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item 3</td>
                      <td> Morbi faucibus arcu accumsan lorem.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item 4</td>
                      <td>Vitae integer tempus condimentum.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item 5</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={2} />
                      <td>100.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <div className="12u">
              {/* Buttons */}

              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    Add Passenger
                  </a>
                </li>
                <li>
                  <Link to="/groups" className="button alt">
                    Back to all groups
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
