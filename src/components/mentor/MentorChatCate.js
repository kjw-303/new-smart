import React from "react";
import { IoLocationSharp, IoTimeSharp } from "react-icons/io5";
import { FaCar, FaWallet } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdQuestionAnswer } from "react-icons/md";

function MentorChatCate({ onSelectCategory }) {
  const mentorCateList = [
    { name: "학원운영시간", icon: <IoTimeSharp size={28} /> },
    { name: "특강신청", icon: <IoLocationSharp size={28} /> },
    { name: "찾아오는길", icon: <FaCar size={28} /> },
    { name: "개강일안내", icon: <FaWallet size={28} /> },
    { name: "근처주차장", icon: <RiCustomerService2Fill size={28} /> },
    { name: "직접문의", icon: <MdQuestionAnswer size={28} /> },
  ];
  return (
    <div className="mentorChatCate fixed bottom-20 left-0 right-0 z-50 ">
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
