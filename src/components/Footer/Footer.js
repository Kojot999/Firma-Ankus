import styles from "./Footer.module.scss";
import ArrowTop from "../../img/ArrowTop.png";

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div>
        <h2>Firma Ankus</h2>
        <ul>
          <li>Mirosława Ankus</li>
          <li>Piotrowice 68a</li>
          <li>59-424 Męcinka</li>
          <li>NIP: 6951011070</li>
        </ul>
      </div>
      <div>
        <p>Firma Ankus @ andrzej.ankus@wp.pl</p>
        <p>Strona Przygotowana przez EmesClick.com</p>
      </div>
      <img alt="" src={ArrowTop} />
    </div>
  );
};
