import * as dateFormatter from "../utils/dateUtils";
import styles from "./GroupCard.module.css";
import { Link } from 'react-router-dom';

export default function GroupCard({
  _id,
  name,
  transportation,
  itinerary,
  from,
  to,
  duration,
  imageUrl,
  price,
}) {

  const detailsClickHandler = (groupId) => {
      <Link to="/groups/details" />
  }


  return (
    <div className={[styles.flexItem, styles.box].join(" ")}>
      <div className={[styles.image, styles.fit].join(" ")}>
        <img src={imageUrl} alt={_id} width={418} height={200} />
      </div>
      <h3>{name}</h3>{" "}
      <div>
        <p>
          <b>Transportation: </b>
          {transportation}
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
          от<b className={styles.priceTag}> €{price}</b>
        </p>
        <div className={styles.btnContainer}>
          <button className={[styles.fit, styles.small].join(" ")} onClick={detailsClickHandler({_id})}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
