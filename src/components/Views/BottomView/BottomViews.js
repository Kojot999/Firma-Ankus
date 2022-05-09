import styles from "./BottomViews.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ROUTES } from "../../../constants/routes";
import { NavLink } from "react-router-dom";

export const BottomViews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    dotsClass: styles.dots,
    appendDots: (dots) => <ul>{dots}</ul>,
  };
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {ROUTES.map(({ name, path, img }) => (
          <div className={styles.tile}>
            <NavLink to={path}>
              <img alt={name} src={img} />
              <div className={styles.butt}>
                <button>{name}</button>
              </div>
            </NavLink>
          </div>
        ))}
      </Slider>
    </div>
  );
};
