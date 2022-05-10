import styles from "./About.module.scss";
import phoneIcon from "../../../img/phoneIcon.png";
import mailIcon from "../../../img/mailIcon.png";
import { Map } from "../../Map/Map";

export const About = () => {
  return (
    <div>
      <div className={styles.about}>
        <div id="kontakt" className={styles.section1}>
          <h2>KONTAKT</h2>
          <ul>
            <li>
              <img alt="" src={phoneIcon} />
              <a href="tel:+728 868 711">+728 868 711</a>
            </li>
            <li>
              <img alt="" src={phoneIcon} />
              <a href="tel:+605 144 254">+605 144 254</a>
            </li>
            <li>
              <img alt="" src={phoneIcon} />
              <a href="tel:+72 605 78 89">+72 605 78 89</a>
            </li>
            <li>
              <img alt="" src={mailIcon} />
              <a href="mailto:andrzej.ankus@wp.pl">andrzej.ankus@wp.pl</a>
            </li>
          </ul>
        </div>
        <div id="firma" className={styles.section2}>
          <h2>FIRMA</h2>
          <h4>
            Jesteśmy Firmą z Dolnego Śląska świadczymy usługi
            buowlano-transportowe ponadto podejmujemy się wykonastwa robót
            ziemnych jak i drogowych. Posiadamy także sklep z częściami do
            maszyn Rolniczych.
          </h4>
          <div className={styles.mapContainer}>
            <Map className={styles.map} />
          </div>
        </div>
      </div>
    </div>
  );
};
