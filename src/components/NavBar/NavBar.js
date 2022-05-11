import styles from "./NavBar.module.scss";
import { NavBurger } from "./NavBurger/NavBurger";
import { NavLink } from "react-router-dom";
import { NavDeskopt } from "./NavDeskopt/NavDeskopt";

export const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.NavBarBurger}>
        <NavBurger />
      </div>
      <div className={styles.NavLogo}>
        <NavLink to="/">
          <h1>FIRMA ANKUS</h1>
        </NavLink>
      </div>
      <div className={styles.NavBarDesktop}>
        <NavDeskopt />
      </div>
    </div>
  );
};
