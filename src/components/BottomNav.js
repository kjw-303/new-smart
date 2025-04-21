import React from "react";
import { useNavigate } from "react-router-dom";

import {
  MdHome,
  MdOutlinePhoneAndroid,
  MdMarkUnreadChatAlt,
  MdPerson,
} from "react-icons/md";

const menus = [
  { name: "홈", icon: <MdHome size={24} />, link: "/main" },
  {
    name: "멘토챗",
    icon: <MdOutlinePhoneAndroid size={24} />,
    link: "/mentor",
  },
  { name: "커뮤니티", icon: <MdMarkUnreadChatAlt size={24} />, link: "/" },
  { name: "마이페이지", icon: <MdPerson size={24} />, link: "/" },
];

function BottomNav(props) {
  const navigate = useNavigate();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-md">
      <div className="flex justify-around py-2">
        {menus.map((menu) => (
          <div key={menu.name} onClick={() => navigate(menu.link)}>
            <em className="flex justify-center">{menu.icon}</em>
            <span>{menu.name}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default BottomNav;
