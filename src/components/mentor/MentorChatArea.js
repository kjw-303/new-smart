import React from "react";

function MentorChatArea({ defaultChatList, selectedCate }) {
  const message = selectedCate
    ? defaultChatList[selectedCate]
    : defaultChatList["기본멘트"];

  return (
    <div className="chataArea">
      <div className="bubble">{message}</div>
    </div>
  );
}

export default MentorChatArea;
