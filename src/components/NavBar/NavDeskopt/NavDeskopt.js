import styles from "./NavDeskopt.module.scss";
import { NavHashLink } from "react-router-hash-link";
import { LINKS } from "../../../constants/routes";

export const NavDeskopt = () => {
  return (
    <div className={styles.NavDeskopt}>
      {LINKS.map(({ path, name }) => (
        <NavHashLink to={path}>{name}</NavHashLink>
      ))}
    </div>
  );
};
