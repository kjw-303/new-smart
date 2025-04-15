// src/components/Header.js
import React from "react";
import { FaBell, FaUser } from "react-icons/fa";
import "../css/Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-left">
        {/* 햄버거 메뉴 */}
        <div className="hamburger" onClick={() => navigate("/sitemap")}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="header-right">
        {/* 알람 아이콘 */}
        <button className="icon-button">
          <FaBell size={20} />
        </button>
        {/* 마이페이지 아이콘 */}
        <button className="icon-button">
          <FaUser size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
