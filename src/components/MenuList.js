import React from "react";
import { useMenu } from "../context/MenuContext";
import { useNavigate } from "react-router-dom";

const MenuList = () => {
  const { menus } = useMenu();
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (id === "settings") {
      navigate("/settings");
    }
  };
  return (
    <div className="menuListContainer my-6">
      {menus.map((item) => (
        <div
          key={item.id}
          className="menuItem"
          onClick={() => handleClick(item.id)}
        >
          <div className="icon">{item.icon}</div>
          <div className="text">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
