import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="mainBg">
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>아이디 : </label>
          <input
            className="rounded-lg px-4 py-4"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label>비밀번호 : </label>
          <input
            className="rounded-lg px-4 py-4"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btnSubmit">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
