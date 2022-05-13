import styles from "./Footer.module.scss";
import phoneIcon from "../../img/phoneIcon.png";

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div>
        <h2>Firma Ankus</h2>
        <div className={styles.wrapper}>
          <div className={styles.wrapperData}>
            <ul>
              <li>Mirosława Ankus</li>
              <li>Piotrowice 68a</li>
              <li>59-424 Męcinka</li>
              <li>NIP: 6951011070</li>
            </ul>
          </div>
          <div>
            <p>Firma Ankus @ andrzej.ankus@wp.pl</p>
          </div>
        </div>
      </div>
      <div className={styles.wrapperPhone}>
        <h2>Kontakt</h2>
        <ul className={styles.footerPhone}>
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
        </ul>
      </div>
    </div>
  );
};
