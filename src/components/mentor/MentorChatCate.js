import React from "react";
import { IoMdTime } from "react-icons/io";

function MentorChatCate(props) {
  const mentorCateList = [
    { name: "운영시간", icon: <IoMdTime size={28} /> },
    { name: "위치안내", icon: <IoMdTime size={28} /> },
    { name: "주차안내", icon: <IoMdTime size={28} /> },
    { name: "수강료조회", icon: <IoMdTime size={28} /> },
    { name: "불편접수", icon: <IoMdTime size={28} /> },
    { name: "직접문의", icon: <IoMdTime size={28} /> },
  ];
  return (
    <div className="mentorChatCate fixed bottom-0 left-0 right-0 z-50 ">
      <ul>
        {mentorCateList.map((item) => (
          <li key={item.name}>
            <span className="pb-2">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MentorChatCate;
