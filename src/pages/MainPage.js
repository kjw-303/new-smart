import React from "react";
import Header from "../components/Header";
import AdSlider from "../components/AdSlider";
import NoticeRoller from "../components/NoticeRoller";
import MyClassInfo from "../components/MyClassInfo";
import MenuList from "../components/MenuList";
import RealReview from "../components/RealReview";
import SpecialLectures from "../components/SpecialLectures";
import RecommendedClass from "../components/RecommendedClass";
import BoardTabs from "../components/BoardTabs";
import BottomNav from "../components/BottomNav";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="px-6">
        {/* 공지사항 */}
        <NoticeRoller />
        {/* 내 수강 정보 */}
        <MyClassInfo />
        {/* 바로가기 */}
        <MenuList />
        {/* 배너 광고 */}
        <AdSlider />
      </div>
      <div className="pl-6">
        {/* 수강생 리얼후기 */}
        <RealReview />
        {/* 특강 */}
        <SpecialLectures />
        {/* 추천강의 */}
        <RecommendedClass />
        {/* 채용정보 */}
        <BoardTabs />
      </div>
      <BottomNav />
    </div>
  );
};

export default MainPage;
