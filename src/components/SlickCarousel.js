import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { breakfast, specials, other } from "../content/contentExport.js";
import { Autoplay } from "swiper/modules";

const slideData = [
  {
    id: 0,
    image: other.ownerPhoto,
    caption: "Owner Photo",
  },
  {
    id: 1,
    image: breakfast.bananaNutWaffle,
    caption: "Banana Nut Waffle",
  },
  {
    id: 2,
    image: specials.mushroomSwiss,
    caption: "Mushroom Swiss Burger",
  },
  {
    id: 3,
    image: specials.mannySandy,
    caption: "Manny's Sandy",
  },
  {
    id: 4,
    image: breakfast.cbhBenny,
    caption: "Corned Beef Hash Benedict",
  },
  {
    id: 5,
    image: specials.redVelvetWaffle,
    caption: "Red Velvet Waffle",
  },
  {
    id: 6,
    image: specials.spicyChxSandy,
    caption: "Spicy Chicken Sandwich",
  },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="arrow slick-next"
      style={{ display: "block", right: "10px", zIndex: 2 }}
      onClick={onClick}
    >
      ▶
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="arrow slick-prev"
      style={{ display: "block", left: "10px", zIndex: 2 }}
      onClick={onClick}
    >
      ◀
    </div>
  );
};

const SlickCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 500,
    fade: true,
    lazyLoad: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="slick-container">
      <Slider {...settings}>
        {slideData.map((slide) => (
          <div key={slide.id}>
            <img src={slide.image} className="slick-img" alt={slide.caption} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
