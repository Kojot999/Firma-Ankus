import "./style.scss";
import phoneIcon from "@assets/phoneIcon.png";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="wrapper">
        <div className="wrapperData">
          <h2>Firma Ankus</h2>
          <ul>
            <li>Mirosława Ankus</li>
            <li>Piotrowice 68a</li>
            <li>59-424 Męcinka</li>
            <li>NIP: 6951011070</li>
          </ul>
          <p>@ andrzej.ankus@wp.pl</p>
        </div>

        <div className="wrapperData">
          <h2>Ankus s. z o.o.</h2>
          <ul>
            <li>Adam Sebastian Ankus</li>
            <li>Piotrowice 68a</li>
            <li>59-424 Męcinka</li>
            <li>NIP: 6951539799</li>
          </ul>
          <p>@ firmaankus@gmail.com</p>
        </div>

        <div className="wrapperPhone">
          <h2>Kontakt</h2>
          <ul className="footerPhone">
            <li>
              <span className="iconWrap">
                <img alt="" src={phoneIcon} />
              </span>
              <a href="tel:+605144251">
                Adam Ankus <span>+605 144 251</span>
              </a>
            </li>

            <li>
              <span className="iconWrap">
                <img alt="" src={phoneIcon} />
              </span>
              <a href="tel:+726057889">
                Biuro Stacjonarny <span>+72 605 78 89</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
