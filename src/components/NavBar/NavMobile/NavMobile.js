import styles from "./NavMobile.module.scss";

import { LINKS } from "../../../constants/routes";
import { NavHashLink } from "react-router-hash-link";

export const NavMobile = ({ closeMenu }) => {
  return (
    <div className={styles.NavMobile}>
      {LINKS.map(({ path, name }) => (
        <NavHashLink onClick={closeMenu} to={path}>
          {name}
        </NavHashLink>
      ))}
    </div>
  );
};
