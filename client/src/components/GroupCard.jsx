import * as dateFormatter from '../utils/dateUtils'
import styles from './GroupCard.module.css'

export default function GroupCard({ _id, name, itinerary, from, to, duration, imageUrl }) {
  return (
    <div className={[styles.flexItem, styles.box].join(" ")}>
      <div className={[styles.image, styles.fit].join(" ")}>
        <img
          src={imageUrl}
          alt={_id}
          width={418}
          height={200}
        />
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>
          {itinerary}
          <br />
          {duration} дни
          <br />
          от {dateFormatter.formatDate(from)}
          <br />
          до {dateFormatter.formatDate(to)}
        </p>
        <button className={[styles.fit, styles.small].join(" ")}>
          Details
        </button>
      </div>
    </div>
  );
}
