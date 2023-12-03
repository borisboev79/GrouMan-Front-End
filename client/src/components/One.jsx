import styles from "./One.module.css";

export default function One() {
  return (
    <section className={[styles.one, styles.wrapper].join(" ")}>
      <div className={[styles.inner, styles.flex, styles.flex3].join(" ")}>
        <div className={[styles.flexItem, styles.left].join(" ")}>
          <div className={styles.leftSide}>
            <h3>Create Groups</h3>
            <p>Only admins can create groups. Ask your branch manager.</p>
          </div>
          <div className={styles.leftSide}>
            <h3>Add, Edit, Remove Passengers</h3>
            <p>Register, so you can work with cruise groups.</p>
          </div>
        </div>
        <div
          className={[
            styles.flexItem,
            styles.image,
            styles.fit,
            styles.round,
          ].join(" ")}
        >
          <img
            src="\src\assets\crusit-pad.jpg"
            alt=""
            width={330}
            height={330}
          />
        </div>
        <div className={[styles.flexItem, styles.right].join(" ")}>
          <div className={styles.rightSide}>
            <h3>Tour Leaders</h3>
            <p>
              Apply to lead a group. It's fun, it's free travel and you get
              paid.
            </p>
          </div>
          <div className={styles.rightSide}>
            <h3>Access everywhere</h3>
            <p>
              Grouman lets you work from virtually everywhere. Any mobile phone
              or laptop will do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
