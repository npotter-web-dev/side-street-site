import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import { breakfast } from "../content/contentExport.js";

const slidesData = [
  {
    id: 1,
    image: breakfast.bananaNutWaffle,
    caption: "Banana Nut Waffle",
  },
  {
    id: 2,
    image: breakfast.cbhBenny,
    caption: "Corned Beef Hash Benedict",
  },
  {
    id: 3,
    image: breakfast.pancakes,
    caption: "Corned Beef Hash Benedict",
  },
  {
    id: 4,
    image: breakfast.chxSteak,
    caption: "Banana Nut Waffle",
  },
  {
    id: 5,
    image: breakfast.omlette,
    caption: "Omelette",
  },
];

const MenuSwiper = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        overFlow="hidden"
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        className="swiper_container"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} className="swiper-img" />
          </SwiperSlide>
        ))}
        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default MenuSwiper;
