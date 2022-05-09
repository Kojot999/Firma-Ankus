import styles from "./NavMobile.module.scss";
import NavMobileBG from "../../../img/NavMobileBG.png";

export const NavMobile = () => {
  return (
    <div className={styles.NavMobile}>
      <img alt="" src={NavMobileBG} />
      <ul className={styles.NavList}>
        <li>
          <p>START</p>
        </li>
        <li>
          <p>OFERTA</p>
        </li>
        <li>
          <p>REALIZACJE</p>
        </li>
        <li>
          <p>FIRMA</p>
        </li>
        <li>
          <p>KONTAKT</p>
        </li>
      </ul>
    </div>
  );
};
