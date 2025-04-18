import React from "react";
import Header from "../components/Header";
import MentorProfile from "../components/mentor/MentorProfile";
import MentorChatCate from "../components/mentor/MentorChatCate";
import "../css/MentorChat.css";
import mentorImg from "../assets/mentor-img.png";

function MentorChat(props) {
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
        <MentorChatCate />
      </div>
    </div>
  );
}

export default MentorChat;
