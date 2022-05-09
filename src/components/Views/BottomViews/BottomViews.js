import styles from "./BottomViews.module.scss";
import BottomViewsIMG from "../../../img/BottomViewsIMG.jpg";

export const BottomViews = () => {
  return (
    <div className={styles.BottomViews}>
      <div>
        <img alt="" src={BottomViewsIMG} />
      </div>
    </div>
  );
};
