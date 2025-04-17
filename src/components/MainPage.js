import React from "react";
import Header from "./Header";
import AdSlider from "./AdSlider";
import NoticeRoller from "./NoticeRoller";
import MyClassInfo from "./MyClassInfo";
import MenuList from "./MenuList";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="px-6">
        {/* 공지사항 */}
        <NoticeRoller />
        {/* 내 수강 정보 */}
        <MyClassInfo />
        {/* 배너 광고 */}
        <AdSlider />
        {/* 바로가기 */}
        <MenuList />
      </div>
    </div>
  );
};

export default MainPage;
