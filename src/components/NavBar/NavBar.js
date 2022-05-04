import styles from "./NavBar.module.scss";
import { NavBurger } from "./NavBurger/NavBurger";

export const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.NavBarBurger}>
        <NavBurger />
      </div>
      <div>
        <h1>FIRMA ANKUS</h1>
      </div>
    </div>
  );
};
