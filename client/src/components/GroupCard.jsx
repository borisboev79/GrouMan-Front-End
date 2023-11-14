import * as dateFormatter from "../utils/dateUtils";
import styles from "./GroupCard.module.css";

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
  return (
     <div className={[styles.flexItem, styles.box].join(" ")}>
      <div className={[styles.image, styles.fit].join(" ")}>
        <img src={imageUrl} alt={_id} width={418} height={200}  />
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <div>
        <p><b>Transportation: </b>{transportation}</p>
        <p><b>Itinerary: </b>{itinerary}</p>
        <p><b>Duration: {duration}</b> дни</p>
        </div>
        <p><b>Начална дата: </b>{dateFormatter.formatDate(from)}</p>
        <p><b>Крайна дата: </b> {dateFormatter.formatDate(to)}</p>
        <p className={styles.price}>от<b className={styles.priceTag}> €{price}</b></p>  
        <button className={[styles.fit, styles.small].join(" ")}>
          Details
        </button>
      </div>
    </div>
  );
}
