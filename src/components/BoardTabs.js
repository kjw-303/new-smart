import React, { useState } from "react";
import RecruitContents from "./RecruitContents";
import JobStoryContents from "./JobStoryContents";
import JobTrendContents from "./JobTrendContents";

const tabs = [
  { id: "recruit", label: "채용정보" },
  { id: "story", label: "취업 스토리" },
  { id: "trend", label: "취업 트렌드" },
];

const tabContents = {
  recruit: <RecruitContents />,
  story: <JobStoryContents />,
  trend: <JobTrendContents />,
};

const BoardTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="mt-6">
      <div className="commonCategoryTitle mb-5">
        <h2>님을 위해 준비했어요!</h2>
        <button className="btn">더보기</button>
      </div>
      <div className="tabsContainer">
        <div className="tabList">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`tabBtn ${activeTab === t.id ? "active" : ""}`}
              onClick={() => {
                setActiveTab(t.id);
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="tabPanls">{tabContents[activeTab]}</div>
      </div>
    </div>
  );
};

export default BoardTabs;
