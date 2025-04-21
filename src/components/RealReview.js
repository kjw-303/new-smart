import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviewData = [
  {
    name: "김진욱",
    review:
      "선생님께서 정말 섬세하게 잘 알려주시고 폭 넓은 시야로 작업할 수 있도록 잘 이끌어주셔서 열심히 배우고 있습니다!",
  },
  {
    name: "김진욱",
    review:
      "선생님께서 정말 섬세하게 잘 알려주시고 폭 넓은 시야로 작업할 수 있도록 잘 이끌어주셔서 열심히 배우고 있습니다!",
  },
  {
    name: "김진욱",
    review:
      "선생님께서 정말 섬세하게 잘 알려주시고 폭 넓은 시야로 작업할 수 있도록 잘 이끌어주셔서 열심히 배우고 있습니다!",
  },
];

const RealReview = () => {
  return (
    <div className="mt-6">
      <div className="commonCategoryTitle mb-5">
        <h2>수강생들의 리얼후기</h2>
        <button className="btn">더보기</button>
      </div>
      <div className="realSlider">
        <Swiper
          spaceBetween={0}
          slidesPerView="auto"
          loop={true}
          autoplay={false}
          modules={[Autoplay]}
          navigation={false} // 좌우 화살표 활성화
        >
          {reviewData.map((item) => (
            <SwiperSlide key={item.id}>
              <div>
                <div className="stName">
                  <span className="name">{item.name}</span> 수강생
                </div>
                <div className="review">{item.review}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RealReview;
