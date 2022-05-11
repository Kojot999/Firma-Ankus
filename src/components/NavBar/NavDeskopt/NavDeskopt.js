import styles from "./NavDeskopt.module.scss";
import { NavLink } from "react-router-dom";
import { LINKSDESKTOP } from "../../../constants/routes";

export const NavDeskopt = () => {
  return (
    <div className={styles.NavDeskopt}>
      {LINKSDESKTOP.map(({ path, name }) => (
        <NavLink
          className={(item) => (item.isActive ? styles.selected : "")}
          key={name}
          to={path}
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
};
