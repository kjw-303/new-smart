import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MentorProfile from "../components/mentor/MentorProfile";
import MentorChatCate from "../components/mentor/MentorChatCate";
import MentorChatArea from "../components/mentor/MentorChatArea";
import { IoIosArrowBack } from "react-icons/io";
import "../css/MentorChat.css";
import mentorImg from "../assets/mentor-img.png";

function MentorChat() {
  const defaultChatList = {
    기본멘트:
      "안녕하세요. 멘토챗입니다! 직접 문의 남길 사항이 있으시면 직접문의 버튼을 클릭해주세요!😉",
    운영시간: "운영시간은 평일 오전 9시부터 오후 6시까지입니다.",
    위치안내:
      "서울 강남구 어디어디에 위치해 있습니다. 양재역 4번 출구로 나와 약 200m 직진 하시면 우측에 있습니다.",
    주차안내: "건물 내 지하 1층 주차장을 이용하시면 됩니다.",
    수강료조회: "수강료는 과정마다 상이하여 개별 안내가 필요합니다람쥐",
    불편접수: "불편접수 페이지로 이동? ㄱㄱ",
    직접문의: "직접 궁금한 점을 자유롭게 남겨주세요!",
  };

  const [selectedCate, setSelectedCate] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="mentorWrap">
      <div className="mentorChatWrap">
        <IoIosArrowBack size={30} onClick={() => navigate(-1)} />
        <MentorProfile
          profileImg={mentorImg}
          name={"박명수"}
          field={"SBS아카데미컴퓨터아트학원"}
          location={"강남점"}
        />
        <MentorChatArea
          defaultChatList={defaultChatList}
          selectedCate={selectedCate}
        />
        <div className="directInput">
          <input type="text" />
        </div>
        <MentorChatCate onSelectCategory={setSelectedCate} />
      </div>
    </div>
  );
}

export default MentorChat;
