import styles from "./Realizacje.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LINKSREALIZACJE } from "../../../../constants/routes";

export const Realizacje = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  return (
    <div id="realizacje" className={styles.section3}>
      <h2>REALIZACJE</h2>
      <ul>
        <li>
          <p>Wykonujemy także prace ziemno-drogowe jako Podwykonawcy</p>
        </li>
        <div>
          <Slider {...settings}>
            {LINKSREALIZACJE.map(({ name, img }) => (
              <div className={styles.tile}>
                <div className={styles.overlay}></div>
                <img alt={name} src={img} />
                <div className={styles.text}>
                  <p>{name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <li>
          <p>Jesteśmy Zarejstrowanie w Systemie BDO</p>
        </li>
      </ul>
    </div>
  );
};
