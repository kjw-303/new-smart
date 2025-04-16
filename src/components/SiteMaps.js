import React, { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import UserInfo from "./UserInfo";
import AdSlider from "./AdSlider";
import { useNavigate } from "react-router-dom";
import { GoX } from "react-icons/go";

const stieMapData = [
  {
    title: "학원소삭",
    subItems: [
      {
        name: "수강정보",
        children: ["수강중인 강의", "수강 예정 강의", "수강 완료된 강의의"],
      },
      {
        name: "계열 컨텐츠",
        children: ["원데이클래스", "오디션정보"],
      },
      { name: "특강&세미나" },
      { name: "추천강의" },
      {
        name: "취업센터",
        children: ["채용정보", "취업 성공스토리", "취업 트렌드"],
      },
      { name: "공지사항" },
    ],
  },
  {
    title: "학원생활",
    subItems: [
      { name: "분실물 찾기" },
      { name: "빈 강의실 찾기" },
      { name: "사물함 관리" },
      { name: "시험접수" },
      { name: "기출문제풀이" },
    ],
  },
  {
    title: "학원아이",
    subItems: [
      {
        name: "커뮤니티",
        children: ["질문게시판", "자유게시판", "계열별 게시판", "수강후기기"],
      },
    ],
  },
  {
    title: "학원문의",
    subItems: [
      { name: "멘토문의" },
      { name: "고객센터", children: ["불편접수", "의견 접수"] },
    ],
  },
];

const SiteMap = () => {
  // 닫기 버튼
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/main");
  };

  return (
    <div className="sitemapContainer">
      <div className="flex justify-end" onClick={handleClose}>
        <GoX size={25} />
      </div>
      {/* 유저 정보 */}
      <UserInfo />
      {/* 배너 광고 */}
      <AdSlider />
      {stieMapData.map((category) => (
        <CategoryItem key={category.title} category={category} />
      ))}
    </div>
  );
};

const CategoryItem = ({ category }) => {
  const { title, subItems } = category;
  return (
    <div className="categoryBox">
      <h2 className="categoryTitle">{title}</h2>
      <div className="subList">
        {subItems.map((item) => (
          <SubItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

const SubItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  if (item.children && item.children.length > 0) {
    return (
      <div className="subitemChildren">
        <div className="subitemLabel" onClick={toggleExpand}>
          {item.name}
        </div>
        {expanded && (
          <ul>
            {item.children.map((child) => (
              <li key={child} className="childItem">
                <GoChevronLeft size={15} />
                {child}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  return <div className="subitem">{item.name}</div>;
};

export default SiteMap;
