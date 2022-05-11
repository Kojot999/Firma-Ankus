import styles from "./BottomViews.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ROUTES } from "../../../constants/routes";
import { NavHashLink } from "react-router-hash-link";

export const BottomViews = () => {
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,

    responsive: [
      {
        breakpoint: 720,
        settings: {
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
        },
      },
    ],
  };
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {ROUTES.map(({ name, path, img }) => (
          <div key={name} className={styles.tile}>
            <NavHashLink to={path}>
              <div className={styles.overlay}></div>
              <img alt={name} src={img} />
              <div className={styles.butt}>
                <button>{name}</button>
              </div>
            </NavHashLink>
          </div>
        ))}
      </Slider>
    </div>
  );
};
