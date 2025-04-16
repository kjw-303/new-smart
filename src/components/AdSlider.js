import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const AdSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }} // 도트 인디케이터 활성화
        navigation={false} // 좌우 화살표 활성화
      >
        <SwiperSlide>
          <img
            src="https://gwangju.allthat-beauty.com/allupload/File/SearchBanner/customer-banner001(0).jpg"
            alt="slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://gwangju.allthat-beauty.com/allupload/File/SearchBanner/customer-banner002(0).jpg"
            alt="slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://gwangju.allthat-beauty.com/allupload/File/SearchBanner/customer-banner003(0).jpg"
            alt="slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdSlider;
