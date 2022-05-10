import styles from "./NavBurger.module.scss";
import { useState, useEffect } from "react";
import { NavMobile } from "../NavMobile/NavMobile";
import Hamburger from "hamburger-react";

export const NavBurger = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (showMenu === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [showMenu]);
  const closeMenu = () => setShowMenu(false);

  return (
    <nav className={styles.NavBurger}>
      <Hamburger toggled={showMenu} toggle={setShowMenu} />
      {showMenu && <NavMobile closeMenu={closeMenu} />}
    </nav>
  );
};
