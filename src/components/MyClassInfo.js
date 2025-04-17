import React from "react";
import { GoChevronRight } from "react-icons/go";
import { useSelection } from "../context/SelectionContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
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

const MyClassInfo = () => {
  // const { field, branch } = useSelection();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="mb-6">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={false}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }} // 도트 인디케이터 활성화
        navigation={false} // 좌우 화살표 활성화
      >
        <SwiperSlide>
          <div className="loginfo">
            <p className="user">{user}님이 수강중인 강의</p>
            <div className="classInfo">
              <span className="class">웹디자인</span>
              <span>강의정보</span>
              <GoChevronRight size={18} />
            </div>
            <div className="detail">
              <div>월, 수, 금 19:00-20:00</div>
              <div>강남점 6층 A강의장</div>
              <div>김경수 강사</div>
            </div>
            {/* <p className="field">
              계열 : {field} / 지점 : {branch}
            </p>
            <button onClick={handleLogout} className="btnLogout">
              로그아웃
            </button> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="loginfo">
            <p className="user">{user}님이 수강중인 강의</p>
            <div className="classInfo">
              <span className="class">웹디자인</span> <span>강의정보</span>{" "}
              <GoChevronRight size={18} />
            </div>
            <div className="detail">
              <div>월, 수, 금 19:00-20:00</div>
              <div>강남점 6층 A강의장</div>
              <div>김경수 강사</div>
            </div>
            {/* <p className="field">
              계열 : {field} / 지점 : {branch}
            </p>
            <button onClick={handleLogout} className="btnLogout">
              로그아웃
            </button> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyClassInfo;
