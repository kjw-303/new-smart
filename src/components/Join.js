import React from "react";
import PasswordInput from "./join/PasswordInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import "../css/Join.css";

function Join() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !passwordCheck || !phoneNumber) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    navigate("/login");
  };

  return (
    <div className="joinWrap">
      <div>
        <IoIosArrowBack
          size={25}
          className="float-left"
          onClick={() => navigate("/login")}
        />
        <h1 className="joinTitle">회원가입</h1>
      </div>
      <form className="joinForm mt-7 mb-7" onSubmit={handleJoinSubmit}>
        <div className="text-left mb-6">
          <label>이름</label>
          <input
            type="text"
            className="inputField"
            placeholder="이름을 입력하세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="text-left mb-6">
          <label>휴대폰 번호</label>
          <input
            type="number"
            className="inputField"
            placeholder="휴대폰 번호를 입력하세요"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <PasswordInput
          label="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PasswordInput
          label="비밀번호 확인"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        <button type="submit" className="btnJoin">
          가입하기
        </button>
      </form>
    </div>
  );
}

export default Join;
