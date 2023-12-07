import styles from "./Groups.module.css";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faShip,
} from "@fortawesome/free-solid-svg-icons";

import * as groupService from "../../services/groupService";
import GroupCard from "./GroupCard";

export default function Groups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    groupService
      .getAllGroups()
      .then((result) => setGroups(result))
      .catch((error) => {
        console.error("Error updating group capacity =>", error.message);
      });
  }, []);

  return (
    <>
      <section className={[styles.three, styles.wrapper].join(" ")}>
          {groups.length !== 0 ? (
            <div
              className={[styles.inner, styles.flex, styles.flex3].join(" ")}
            >
              {groups.map((group) => (
                <GroupCard
                  key={group._id}
                  groupId={group._id}
                  name={group.groupName}
                  ship={group.ship}
                  itinerary={group.itinerary}
                  duration={group.duration}
                  from={group.startDate}
                  to={group.endDate}
                  imageUrl={group.imageUrl}
                  capacity={group.capacity}
                />
              ))}
            </div>
          ) : (
            <div
              style={{
                paddingTop: "7em",
                height: "10em",
                width: "100%",
                textAlign: "center",
              }}
            >
              <h2>
                <FontAwesomeIcon icon={faPeopleGroup} />{" "}
                <span>No Groups Added Yet </span>
                <FontAwesomeIcon icon={faShip} />
              </h2>
              <p>
                <b>Login and be the first to add one.</b>
              </p>
            </div>
          )}
      </section>
    </>
  );
}
