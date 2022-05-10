import styles from "./TopViews.module.scss";
import TopViewsIMG from "../../../img/TopViewsIMG.jpg";

export const TopViews = () => {
  return (
    <div>
      <div className={styles.TopViews}>
        <div className={styles.overlay}></div>
        <img alt="" src={TopViewsIMG} />
        <h4>
          Jesteśmy Firmą z Dolnego Śląska świadczymy usługi
          buowlano-transportowe ponadto podejmujemy się wykonastwa robót
          ziemnych jak i drogowych.
        </h4>
      </div>
    </div>
  );
};
