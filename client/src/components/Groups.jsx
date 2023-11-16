import styles from "./Groups.module.css";
import * as groupService from "../services/groupService";
import * as dateFormatter from "../utils/dateUtils";
import { useState, useEffect } from "react";
import GroupCard from "./GroupCard";

export default function Groups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    groupService
      .getAllGroups()
      .then((result) => setGroups(result))
      .catch((err) => console.log(err));
    console.log("fetching");
  }, []);


  return (
    <>
      <section className={[styles.three, styles.wrapper].join(" ")}>
        <div className={[styles.inner, styles.flex, styles.flex3].join(" ")}>
          {groups.map((group) => (
            <GroupCard
              key={group._id}
              _id={group._id}
              name={group.groupName}
              transportation={group.transportation}
              itinerary={group.itinerary}
              duration={group.duration}
              from={group.startDate}
              to={group.endDate}
              imageUrl={group.imageUrl}
              capacity={group.capacity}
              inside={group.insidePrice}
              outside={group.outsidePrice}
              balcony={group.balconyPrice}

            />
          ))}
        </div>
      </section>
    </>
  );
}
