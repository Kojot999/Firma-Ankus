import styles from "./TopViews.module.scss";
import { OfertaSprzetowa } from "./TopItems/OfertaSprzetowa";
import { Podwykonastwo } from "./TopItems/Podwykonastwo";
import { Transport } from "./TopItems/Transport";

export const TopViews = () => {
  return (
    <div className={styles.TopViews}>
      <OfertaSprzetowa className={styles.section} />
      <Podwykonastwo className={styles.section} />
      <Transport className={styles.section} />
    </div>
  );
};
