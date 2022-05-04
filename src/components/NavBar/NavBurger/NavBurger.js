import styles from "./NavBurger.module.scss";
import NavBurgerIcon from "../../../img/NavBurgerIcon.png";

export const NavBurger = () => {
  return (
    <div className={styles.NavBurger}>
      <img alt="" src={NavBurgerIcon} />
    </div>
  );
};
