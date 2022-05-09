import styles from "./ScrollTop.module.scss";
import ArrowTop from "../../../img/ArrowTop.png";

export const ScrollToTop = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.pos} onClick={goToTop}>
      <img alt="" src={ArrowTop} className={styles.icon} />
    </div>
  );
};
