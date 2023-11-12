import styles from "./Groups.module.css";

export default function Groups() {
  return (
    <section className={[styles.three, styles.wrapper].join(" ")}>
      <div className={[styles.inner, styles.flex, styles.flex3].join(" ")}>
        <div className={[styles.flexItem, styles.box].join(" ")}>
          <div className={[styles.image, styles.fit].join(" ")}>
            <img src="images/pic02.jpg" alt="" width={418} height={200} />
          </div>
          <div className={styles.content}>
            <h3>Consequat</h3>
            <p>
              Placerat ornare. Pellentesque od sed euismod in, pharetra ltricies
              edarcu cas consequat.
            </p>
            <button className={[styles.fit, styles.small].join(" ")}>
              Details
            </button>
          </div>
        </div>
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
            <button className={[styles.fit, styles.small].join(" ")}>
              Details
            </button>
          </div>
        </div>
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
