import styles from "./TopViews.module.scss";
import TopViewsIMG from "../../../img/TopViewsIMG.jpg";
import TopViewsIMG2 from "../../../img/TopViewsIMG2.png";

export const TopViews = () => {
  return (
    <div>
      <div className={styles.TopViews}>
        <img alt="" src={TopViewsIMG} className={styles.imgMobile} />
        <img alt="" src={TopViewsIMG2} className={styles.imgDeskopt} />
        <div className={styles.wrapper}>
          <h1>USŁUGI</h1>
          <h2>BUDOWLANO-TRANSPORTOWE,</h2>
          <h3>Oraz wykonawstwo robót ziemnych i drogowych.</h3>
        </div>
      </div>
    </div>
  );
};
