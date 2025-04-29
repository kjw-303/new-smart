import React, { useState } from "react";
import MentorProfile from "../components/mentor/MentorProfile";
import MentorChatCate from "../components/mentor/MentorChatCate";
import MentorChatArea from "../components/mentor/MentorChatArea";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import "../css/MentorChat.css";
import mentorImg from "../assets/mentor-img.png";

function MentorChat() {
  const defaultChatList = {
    기본멘트:
      "안녕하세요 수강생님! SBS컴퓨터아트학원 강남점 멘토 박명수입니다.",
    학원운영시간: "운영시간은 평일 오전 9시부터 오후 6시까지입니다.",
    특강신청: "수강료는 과정마다 상이하여 개별 안내가 필요합니다람쥐",
    찾아오는길: "서울 강남구 어디어디에 위치해 있습니다.",
    개강일안내: "개강일은 5월 25일 입니다.",
    근처주차장: "건물 내 지하 1층 주차장을 이용하시면 됩니다.",
    직접문의: "직접 궁금한 점을 자유롭게 남겨주세요!",
  };

  const [chatList, setChatList] = useState([
    { type: "mentor", message: defaultChatList["기본멘트"] },
  ]);

  const [directInput, setDirectInput] = useState(false);
  const [directInputValue, setDirectInputValue] = useState("");

  const handleSelectCategory = (cateName) => {
    if (cateName === "직접문의") {
      setDirectInput(true);
      return;
    } else {
      setDirectInput(false);
    }

    const answer = defaultChatList[cateName];
    // 나 먼저 추가
    setChatList((prev) => [...prev, { type: "user", message: cateName }]);
    // 멘토 후에 추가
    setTimeout(() => {
      setChatList((prev) => [...prev, { type: "mentor", message: answer }]);
    }, 500);
  };

  const handleSendDirectMessage = () => {
    if (directInputValue.trim() === "") return;

    setChatList((prev) => [
      ...prev,
      { type: "user", message: directInputValue },
    ]);

    setTimeout(() => {
      setChatList((prev) => [
        ...prev,
        {
          type: "mentor",
          message: "문의 주셔서 감사합니다! 빠르게 답변드릴게요 😊",
        },
      ]);
    }, 500);

    // 입력창 초기화
    setDirectInputValue("");
  };

  return (
    <div className="mentorWrap">
      <Header />
      <div className="mentorChatWrap">
        <MentorProfile
          profileImg={mentorImg}
          name={"박명수"}
          field={"SBS아카데미컴퓨터아트학원"}
          location={"강남점"}
        />
        <MentorChatArea chatList={chatList} />

        {directInput ? (
          <div className="directInput">
            <input
              type="text"
              value={directInputValue}
              onChange={(e) => setDirectInputValue(e.target.value)}
            />
            <button type="submit" onClick={handleSendDirectMessage}>
              전송
            </button>
          </div>
        ) : (
          ""
        )}

        <MentorChatCate onSelectCategory={handleSelectCategory} />
      </div>
      <BottomNav />
    </div>
  );
}

export default MentorChat;
