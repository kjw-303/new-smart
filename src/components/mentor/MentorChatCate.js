import React from "react";
import { IoLocationSharp, IoTimeSharp } from "react-icons/io5";
import { FaCar, FaWallet } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdQuestionAnswer } from "react-icons/md";

function MentorChatCate({ onSelectCategory }) {
  const mentorCateList = [
    { name: "운영시간", icon: <IoTimeSharp size={28} /> },
    { name: "위치안내", icon: <IoLocationSharp size={28} /> },
    { name: "주차안내", icon: <FaCar size={28} /> },
    { name: "수강료조회", icon: <FaWallet size={28} /> },
    { name: "불편접수", icon: <RiCustomerService2Fill size={28} /> },
    { name: "직접문의", icon: <MdQuestionAnswer size={28} /> },
  ];
  return (
    <div className="mentorChatCate fixed bottom-0 left-0 right-0 z-50 ">
      <ul>
        {mentorCateList.map((item) => (
          <li key={item.name} onClick={() => onSelectCategory(item.name)}>
            <span className="pb-2">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MentorChatCate;
