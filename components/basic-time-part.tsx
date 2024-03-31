import type { NextPage } from "next";
import styles from "./basic-time-part.module.css";

const BasicTimePart: NextPage = () => {
  return (
    <section className={styles.basicTimePart}>
      <header className={styles.statusBar}>
        <div className={styles.mastersStatusBar}>
          <div className={styles.mastersStatusBarPartsL}>
            <div className={styles.timeGeo}>
              <div className={styles.time}>1:11</div>
              <div className={styles.mastersStatusBarPartsA}>
                <div className={styles.sbIconGeo}>􀋒</div>
              </div>
            </div>
          </div>
          <div className={styles.mastersStatusBarPartsR}>
            <div className={styles.indicators}>
              <img
                className={styles.mastersStatusBarPartsA1}
                loading="lazy"
                alt=""
                src="/-masters--status-bar-parts--atoms--indicator-signal.svg"
              />
              <img
                className={styles.mastersStatusBarPartsA2}
                loading="lazy"
                alt=""
                src="/-masters--status-bar-parts--atoms--indicator-wifi.svg"
              />
              <div className={styles.mastersStatusBarPartsA3}>
                <div className={styles.levels}>
                  <div className={styles.batteryLevels}>
                    <img
                      className={styles.levelStartIcon}
                      loading="lazy"
                      alt=""
                      src="/levelstart.svg"
                    />
                    <img
                      className={styles.level2Icon}
                      loading="lazy"
                      alt=""
                      src="/level2.svg"
                    />
                    <img
                      className={styles.level3Icon}
                      loading="lazy"
                      alt=""
                      src="/level2.svg"
                    />
                    <img
                      className={styles.level4Icon}
                      loading="lazy"
                      alt=""
                      src="/level2.svg"
                    />
                    <img
                      className={styles.level5Icon}
                      loading="lazy"
                      alt=""
                      src="/level2.svg"
                    />
                    <img
                      className={styles.level6Icon}
                      loading="lazy"
                      alt=""
                      src="/level2.svg"
                    />
                    <img
                      className={styles.level7Icon}
                      loading="lazy"
                      alt=""
                      src="/level2.svg"
                    />
                    <img
                      className={styles.level8Icon}
                      alt=""
                      src="/level8.svg"
                    />
                    <img
                      className={styles.level9Icon}
                      alt=""
                      src="/level8.svg"
                    />
                    <img
                      className={styles.levelLastIcon}
                      loading="lazy"
                      alt=""
                      src="/levellast.svg"
                    />
                  </div>
                </div>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.basicTimePartInner}>
        <div className={styles.frameParent}>
          <div className={styles.loremIpsumWrapper}>
            <div className={styles.loremIpsum}>Lorem Ipsum...</div>
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicTimePart;
