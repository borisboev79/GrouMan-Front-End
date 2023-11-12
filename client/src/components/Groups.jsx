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
      console.log('fetching')
  }, []);

  const detailsClickHandler = () => {
    groupService.getAllGroups();
  };

  return (
    <section className={[styles.three, styles.wrapper].join(" ")}>
      <div className={[styles.inner, styles.flex, styles.flex3].join(" ")}>

      
        {groups.map((group) => {
          <GroupCard
            key={group._id}
            _id={group._id}
            name={group.groupName}
            itinerary={group.itinerary}
            from={group.startDate}
            to={group.endDate}
            imageUrl={group.imageUrl}
          />;
        })}
       

        <GroupCard name="name" _id="1" itinerary="test test" duration="7" />

        {/* Card volcano */}

        <div className={[styles.flexItem, styles.box].join(" ")}>
          <div className={[styles.image, styles.fit].join(" ")}>
            <img src="images/pic03.jpg" alt="" width={418} height={200} />
          </div>
          <div className={styles.content}>
            <h3>Adipiscing</h3>
            <p>
              Morbi in sem quis dui placerat Pellentesque odio nisi, euismod
              pharetra lorem ipsum.
            </p>
            <button
              className={[styles.fit, styles.small].join(" ")}
              onClick={detailsClickHandler}
            >
              Details
            </button>
          </div>
        </div>

        {/* Card stairs */}

        <div className={[styles.flexItem, styles.box].join(" ")}>
          <div className={[styles.image, styles.fit].join(" ")}>
            <img src="images/pic04.jpg" alt="" width={418} height={200} />
          </div>
          <div className={styles.content}>
            <h3>Malesuada</h3>
            <p>
              Nam dui mi, tincidunt quis, accu an porttitor, facilisis luctus
              que metus vulputate sem magna.
            </p>
            <button className={[styles.fit, styles.small].join(" ")}>
              Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
