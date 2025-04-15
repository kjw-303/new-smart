import React from "react";

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

const Sitemap = () => {
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sitemap;
