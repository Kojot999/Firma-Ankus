import styles from "./TopViews.module.scss";
import { OfertaSprzetowa } from "./TopItems/OfertaSprzetowa";

export const TopViews = () => {
  return (
    <div className={styles.TopViews}>
      <div>
        <OfertaSprzetowa />
      </div>
    </div>
  );
};
