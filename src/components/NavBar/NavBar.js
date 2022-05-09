import styles from "./NavBar.module.scss";
import { NavBurger } from "./NavBurger/NavBurger";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.NavBarBurger}>
        <NavBurger />
      </div>
      <div>
        <NavLink to="/">
          <h1>FIRMA ANKUS</h1>
        </NavLink>
      </div>
    </div>
  );
};
