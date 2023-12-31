import * as dateFormatter from "../../utils/dateUtils";
import styles from "./GroupCard.module.css";
import { Link } from 'react-router-dom';
import Path from "../../paths";
import { pathToUrl } from "../../utils/pathUtils";

export default function GroupCard({
  groupId,
  name,
  ship,
  itinerary,
  from,
  to,
  duration,
  imageUrl,
  capacity,
}) {

  return (
    <div className={[styles.flexItem, styles.box].join(" ")}>
      <div className={[styles.image, styles.fit].join(" ")}>
        <img src={imageUrl} alt={groupId} width={418} height={200} />
      </div>
      <h3>{name}</h3>
      <div>
        <p>
          <b>Ship: </b>
          {ship}
        </p>
      </div>
      <div>
        <p>
          <b>Itinerary: </b>
          {itinerary}
        </p>
        <p>
          <b>Duration: {duration}</b> дни
        </p>
      </div>
      <div className={styles.content}>
        <p>
          <b>Начална дата: </b>
          {dateFormatter.formatDate(from)}
        </p>
        <p>
          <b>Крайна дата: </b> {dateFormatter.formatDate(to)}
        </p>
        <p className={styles.price}>
          <b className={styles.priceTag}> {capacity}</b> passengers
        </p>
        <div className={styles.btnContainer}>
          <Link className={[styles.button, styles.fit, styles.small].join(" ")} to={pathToUrl(Path.GroupDetails, { groupId })}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
