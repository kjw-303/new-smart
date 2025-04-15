import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../css/Join.css";

function Join() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      login(username, password);
      navigate("/main");
    } else {
      alert("아이디와 비밀번호를 입력해주세요.");
    }
  };

  return (
    <div className="joinWrap">
      <h1 className="joinTitle">회원가입</h1>
      <form className="joinForm mt-6 mb-6">
        <div className="text-left mb-6">
          <label>이름</label>
          <input
            type="text"
            className="inputField"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="text-left mb-6">
          <label>휴대폰 번호</label>
          <input type="number" className="inputField" />
        </div>
        <div className="text-left mb-6">
          <label>비밀번호</label>
          <input
            type="password"
            className="inputField"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
