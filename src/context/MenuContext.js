// src/context/MenuContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { CgChanel } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";

// 1) 상태에는 id, label만 저장
const defaultMenuData = [
  { id: "emptyRoom", label: "빈강의실찾기" },
  { id: "reviews", label: "수강생후기" },
  { id: "books", label: "교재몰" },
  { id: "jobs", label: "채용정보" },
  { id: "exam", label: "시험접수" },
  { id: "lostFound", label: "분실물찾기" },
  { id: "settings", label: "설정" },
];

// 2) id별로 아이콘을 매핑
const iconMap = {
  emptyRoom: <CgChanel size={25} />,
  reviews: <CgChanel size={25} />,
  books: <CgChanel size={25} />,
  jobs: <CgChanel size={25} />,
  exam: <CgChanel size={25} />,
  lostFound: <CgChanel size={25} />,
  settings: <CgMathPlus size={25} />,
};

const MenuContext = createContext();
export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [menuData, setMenuData] = useState(() => {
    const saved = localStorage.getItem("appMenus");
    return saved ? JSON.parse(saved) : defaultMenuData;
  });

  // 상태 변경 시 저장 (id, label만)
  useEffect(() => {
    localStorage.setItem("appMenus", JSON.stringify(menuData));
  }, [menuData]);

  // 렌더링 시점에 아이콘을 붙여서 내보내기
  const menus = menuData.map((item) => ({
    ...item,
    icon: iconMap[item.id] || null,
  }));

  return (
    <MenuContext.Provider value={{ menus, setMenus: setMenuData }}>
      {children}
    </MenuContext.Provider>
  );
};
