import React from "react";
import "../css/Join.css";

function Join() {
  return (
    <div className="joinWrap">
      <h1 className="joinTitle">회원가입</h1>
      <form className="joinForm mt-6 mb-6">
        <div className="text-left mb-6">
          <label>이름</label>
          <input type="text" className="inputField" />
        </div>
        <div className="text-left mb-6">
          <label>휴대폰 번호</label>
          <input type="number" className="inputField" />
        </div>
        <div className="text-left mb-6">
          <label>비밀번호</label>
          <input type="password" className="inputField" />
        </div>
        <div className="text-left mb-6">
          <label>비밀번호 확인</label>
          <input type="password" className="inputField" />
        </div>
        <button type="submit" className="btnJoin">
          가입하기
        </button>
      </form>
    </div>
  );
}

export default Join;
