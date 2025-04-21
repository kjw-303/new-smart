import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import posterTest from "../assets/poster_test.jpg";

const RecomClass = [
  {
    poster: posterTest,
    tag: ["일러스트", "디자인", "마야야"],
    title: "이모티콘 그려보기기",
  },
  {
    poster: posterTest,
    tag: ["일러스트", "디자인", "마야야"],
    title: "이모티콘 그려보기기",
  },
  {
    poster: posterTest,
    tag: ["일러스트", "디자인", "마야야"],
    title: "이모티콘 그려보기기",
  },
];

const RecommendedClass = () => {
  return (
    <div className="mt-6">
      <div className="commonCategoryTitle mb-5">
        <h2>님을 위해 준비했어요!</h2>
        <button className="btn">더보기</button>
      </div>
      <div className="recomSlider">
        <Swiper
          spaceBetween={0}
          slidesPerView="auto"
          loop={false}
          autoplay={false}
          modules={[Autoplay]}
          navigation={false} // 좌우 화살표 활성화
        >
          {RecomClass.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="item">
                <div className="poster">
                  <img src={item.poster} />
                </div>
                <div className="tag">
                  {item.tag.map((tag) => (
                    <div key={tag} className="list">
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="title">{item.title}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendedClass;
