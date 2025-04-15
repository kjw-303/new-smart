import React from "react";
import { useSelection } from "../context/SelectionContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const categories = [
  "수강정보",
  "계열 컨텐츠",
  "특강 및 세미나",
  "커뮤니티",
  "취업센터",
  "분실물 찾기",
  "빈 강의실 찾기",
  "사물함 관리",
  "시험접수",
  "기출문제풀이",
  "공지사항",
  "멘토문의",
  "고객센터",
];

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
      <div className="loginfo">
        <p className="user">{user}님, 환영합니다!</p>
        <p className="field">
          계열 : {field} / 지점 : {branch}
        </p>
        <button onClick={handleLogout} className="btnLogout">
          로그아웃
        </button>
      </div>
      <nav>
        <ul>
          {categories.map((cat) => (
            <li key={cat}>{cat}</li>
          ))}
        </ul>
      </nav>
      <main>
        <p>상세 카테고리 구역</p>
      </main>
    </div>
  );
};

export default MainPage;
