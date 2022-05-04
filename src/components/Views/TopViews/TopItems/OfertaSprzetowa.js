import styles from "./OfertaSprzetowa.module.scss";
import Oferta1 from "../../../../img/Oferta1.jpg";

export const OfertaSprzetowa = () => {
  return (
    <div className={styles.OfertaSprzetowa}>
      <div>
        <img src={Oferta1} />
      </div>
    </div>
  );
};
