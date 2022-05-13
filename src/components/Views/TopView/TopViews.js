import styles from "./TopViews.module.scss";
import TopViewsIMG from "../../../img/TopViewsIMG.jpg";
import TopViewsIMG2 from "../../../img/TopViewsIMG2.png";
import { NavHashLink } from "react-router-hash-link";
import Phone from "../../../img/Phone.svg";

export const TopViews = () => {
  return (
    <div>
      <div className={styles.TopViews}>
        <div className={styles.imgMobileWrapper}>
          <img alt="" src={TopViewsIMG} className={styles.imgMobile} />
        </div>
        <div className={styles.imgDesktopWrapper}>
          <img alt="" src={TopViewsIMG2} className={styles.imgDesktop} />
        </div>
        <div className={styles.wrapper}>
          <h1>USŁUGI</h1>
          <h2>
            <span>BUDOWLANO-TRANSPORTOWE,</span>
          </h2>
          <h3>Oraz wykonawstwo robót ziemnych i drogowych.</h3>
          <div className={styles.linkWrapper}>
            <img alt="" src={Phone} />
            <NavHashLink to="/about">Skontaktuj się z Nami</NavHashLink>
          </div>
        </div>
      </div>
    </div>
  );
};
