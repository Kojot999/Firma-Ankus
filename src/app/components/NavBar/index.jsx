import "./style.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") close();
    };

    if (open) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 720) close();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="NavBar">
      <div className="navInner">
        <NavLink to="/" className="brand" onClick={close}>
          Ankus
        </NavLink>

        <button
          className={`burger ${open ? "isOpen" : ""}`}
          type="button"
          aria-label="Otwórz menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`menu ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={close} className="link">
            Oferta i zakres usług
          </NavLink>
          <NavLink to="/oferta" onClick={close} className="link">
            Park maszynowy
          </NavLink>
          <NavLink to="/kontakt" onClick={close} className="link">
            Kontakt i lokalizacja
          </NavLink>
        </nav>
      </div>

      <div className={`overlay ${open ? "show" : ""}`} onClick={close} />
    </header>
  );
};
