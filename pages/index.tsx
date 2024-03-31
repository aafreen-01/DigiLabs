import type { NextPage } from "next";
import BasicTimePart from "../components/basic-time-part";
import styles from "./index.module.css";

const Screen1: NextPage = () => {
  return (
    <div className={styles.screen1}>
      <BasicTimePart />
      <section className={styles.screen1Inner}>
        <div className={styles.errorMsgillustrationParent}>
          <img
            className={styles.errorMsgillustrationIcon}
            alt=""
            src="/error-msgillustration.svg"
          />
          <img
            className={styles.rinotification2LineIcon}
            loading="lazy"
            alt=""
            src="/rinotification2line.svg"
          />
        </div>
      </section>
      <footer className={styles.section2ctaButtonWrapper}>
        <button className={styles.section2ctaButton}>
          <b className={styles.sendNotification}>Send Notification</b>
        </button>
      </footer>
    </div>
  );
};

export default Screen1;
