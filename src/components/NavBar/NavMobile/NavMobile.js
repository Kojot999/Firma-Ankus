import styles from "./NavMobile.module.scss";
import NavMobileBG from "../../../img/NavMobileBG.png";

export const NavMobile = () => {
  return (
    <div className={styles.NavMobile}>
      <img alt="" src={NavMobileBG} />
    </div>
  );
};
