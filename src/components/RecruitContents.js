import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import posterTest from "../assets/poster_test.jpg";

const RecruitInfo = [
  {
    poster: posterTest,
    part: "그래픽 디자이너",
    company: "NHN",
  },
  {
    poster: posterTest,
    part: "그래픽 디자이너",
    company: "NHN",
  },
  {
    poster: posterTest,
    part: "그래픽 디자이너",
    company: "NHN",
  },
];

const RecruitContents = () => {
  return (
    <div className="my-6">
      <div className="RecuritSlider">
        <Swiper
          spaceBetween={0}
          slidesPerView="auto"
          loop={false}
          autoplay={false}
          modules={[Autoplay]}
          navigation={false} // 좌우 화살표 활성화
        >
          {RecruitInfo.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="item">
                <div className="poster">
                  <img src={item.poster} />
                </div>
                <div className="info">
                  <div className="part">{item.part}</div>
                  <div className="company">{item.company}</div>
                  <div className="hiring">채용중</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecruitContents;
