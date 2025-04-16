import React from "react";
import { useSelection } from "../context/SelectionContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import AdSlider from "./AdSlider";
import NoticeRoller from "./NoticeRoller";

const MainPage = () => {
  const { field, branch } = useSelection();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <Header />
      {/* 공지사항 */}
      <NoticeRoller />
      <div className="loginfo">
        <p className="user">{user}님, 환영합니다!</p>
        <p className="field">
          계열 : {field} / 지점 : {branch}
        </p>
        <button onClick={handleLogout} className="btnLogout">
          로그아웃
        </button>
      </div>
      <div>
        {/* 배너 광고 */}
        <AdSlider />
      </div>
      <main>
        <p>상세 카테고리 구역</p>
      </main>
    </div>
  );
};

export default MainPage;
