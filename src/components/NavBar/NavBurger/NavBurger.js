import styles from "./NavBurger.module.scss";
import NavBurgerIcon from "../../../img/NavBurgerIcon.png";
import { useState } from "react";
import { NavMobile } from "../NavMobile/NavMobile";

export const NavBurger = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={styles.NavBurger}>
      <img alt="" src={NavBurgerIcon} onClick={() => setShowMenu(!showMenu)} />
      {showMenu && <NavMobile />}
    </nav>
  );
};
