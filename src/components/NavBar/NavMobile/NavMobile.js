import styles from "./NavMobile.module.scss";
import NavMobileBG from "../../../img/NavMobileBG.png";
import { LINKS } from "../../../constants/routes";
import { NavHashLink } from "react-router-hash-link";

export const NavMobile = ({ closeMenu }) => {
  return (
    <div className={styles.NavMobile}>
      <img alt="" src={NavMobileBG} />
      {LINKS.map(({ path, name }) => (
        <NavHashLink onClick={closeMenu} to={path}>
          {name}
        </NavHashLink>
      ))}
    </div>
  );
};
