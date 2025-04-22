import React from "react";

function MentorChatArea({ chatList }) {
  return (
    <div className="chataArea">
      {chatList.map((chat, idx) => (
        <div
          key={idx}
          className={`bubble ${
            chat.type === "mentor" ? "bubbleLeft" : "bubbleRight"
          }`}
        >
          <span>{chat.message}</span>
        </div>
      ))}
    </div>
  );
}

export default MentorChatArea;
