import styles from "./TopViews.module.scss";
import TopViewsIMG from "../../../img/TopViewsIMG.jpg";

export const TopViews = () => {
  return (
    <div className={styles.TopViews}>
      <div>
        <img alt="" src={TopViewsIMG} />
      </div>
    </div>
  );
};
