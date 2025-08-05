import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import { drew } from "../content/drewExport.js";

// const slidesData = [
//   {
//     id: 0,
//     image: drew.photo1,
//     caption: "Drew Photo",
//   },
//   {
//     id: 1,
//     image: drew.photo2,
//     caption: "Drew Photo",
//   },
//   {
//     id: 2,
//     image: drew.photo3,
//     caption: "Drew Photo",
//   },
//   {
//     id: 3,
//     image: drew.photo4,
//     caption: "Drew Photo",
//   },
// ];

const slidesData = Object.keys(drew).map((key, index) => ({
  id: index,
  image: drew[key],
  caption: "Drew Photo",
}));

const DrewSwiper = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        speed={500}
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
            <img src={slide.image} className="swiper-img" alt="Side Street Cafe" />
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

export default DrewSwiper;
