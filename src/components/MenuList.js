import React from "react";
import { useMenu } from "../context/MenuContext";

const MenuList = () => {
  const { menus } = useMenu();
  return (
    <div className="menuListContainer">
      {menus.map((item) => (
        <div key={item.id} className="menuItem">
          <div className="icon">{item.icon}</div>
          <div className="text">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
