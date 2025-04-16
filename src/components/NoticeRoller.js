import React from "react";

const NoticeRoller = () => {
  const notices = [
    "공지사항 1: 새로운 업데이트가 출시되었습니다.",
    "공지사항 2: 서버 점검 일정이 공지되었습니다.",
    "공지사항 3: 새로운 기능이 추가되었습니다.",
    "공지사항 4: 이벤트 참여 안내가 있습니다.",
    "공지사항 5: 시스템 업데이트 예정입니다.",
  ];
  const repeatedNotice = [...notices, ...notices];

  return (
    <div className="noticeBanner">
      <div className="noticeTitle">공지사항</div>
      <div className="noticeRollerContainer">
        <ul className="noticeRoller">
          {repeatedNotice.map((notice, index) => (
            <li key={index} className="noticeItem">
              {notice}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoticeRoller;
