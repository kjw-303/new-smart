import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import posterTest from "../assets/poster_test.jpg";

const SpecialLectures = [
  {
    poster: posterTest,
    data: "2025.12.12",
    title: "AtoZ, 마야 완벽정리리",
  },
  {
    poster: posterTest,
    data: "2025.12.12",
    title: "AtoZ, 마야 완벽정리리",
  },
  {
    poster: posterTest,
    data: "2025.12.12",
    title: "AtoZ, 마야 완벽정리리",
  },
  {
    poster: posterTest,
    data: "2025.12.12",
    title: "AtoZ, 마야 완벽정리리",
  },
  {
    poster: posterTest,
    data: "2025.12.12",
    title: "AtoZ, 마야 완벽정리리",
  },
];

const SpecialLecture = () => {
  return (
    <div className="mt-6">
      <div className="commonCategoryTitle mb-5">
        <h2>다가오는 특강 보러가요!</h2>
        <button className="btn">더보기</button>
      </div>
      <div className="specialSlider">
        <Swiper
          spaceBetween={0}
          slidesPerView="auto"
          loop={false}
          autoplay={false}
          modules={[Autoplay]}
          navigation={false} // 좌우 화살표 활성화
        >
          {SpecialLectures.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="item">
                <div className="poster">
                  <img src={item.poster} />
                </div>
                <div className="data">{item.data}</div>
                <div className="title">{item.title}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SpecialLecture;
