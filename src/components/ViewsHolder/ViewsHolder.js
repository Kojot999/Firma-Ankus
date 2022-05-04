import { TopViews } from "../Views/TopViews/TopViews";
import styles from "./ViewsHolder.module.scss";
import { BottomViews } from "../Views/BottomViews/BottomViews";

export const ViewsHolder = () => {
  return (
    <div className={styles.Holder}>
      <div>
        <TopViews />
        <BottomViews />
      </div>
    </div>
  );
};
