import * as dateFormatter from '../utils/dateUtils'
import styles from './GroupCard.module.css'

export default function GroupCard({ _id, name, itinerary, from, to, duration, imageUrl, price }) {
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
          <b>Itinerary: </b>{itinerary}
          <br />
         <b> {duration}</b> дни
          <br />
          <b>Начална дата: </b>{dateFormatter.formatDate(from)}
          <br />
          <b>Крайна дата: </b> {dateFormatter.formatDate(to)}
          <br />
          <p className={styles.price}>от<b className={styles.priceTag}> €{price}</b></p>

        </p>
        <button className={[styles.fit, styles.small].join(" ")}>
          Details
        </button>
      </div>
    </div>
  );
}
