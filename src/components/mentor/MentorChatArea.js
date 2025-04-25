import React from "react";
import { useRef, useEffect } from "react";

function MentorChatArea({ chatList }) {
  const chatAreaRef = useRef(null);

  useEffect(() => {
    // 새 메시지 생기면 맨 아래로 스크롤
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = 0;
    }
  }, [chatList]);

  return (
    <div className="chatArea" ref={chatAreaRef}>
      <div className="spacer"></div>
      <div className="chatList">
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
      {/* <div className="directInput">
        <input type="text" d/>
        <button type="submit">전송</button>
      </div> */}
    </div>
  );
}

export default MentorChatArea;
