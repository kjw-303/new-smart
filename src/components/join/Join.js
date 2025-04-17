import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import JoinHeader from "./JoinHeader";
import "../../css/Join.css";

//비밀번호 component
function PasswordInput({ label, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="text-left mb-6">
      <label>{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className="inputField pr-10"
          placeholder={`${label}를 입력하세요`}
          value={value}
          onChange={onChange}
        />
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer block"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaRegEyeSlash size={17} /> : <FaRegEye size={17} />}
        </span>
      </div>
    </div>
  );
}

function Join() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [activeBtn, setActiveBtn] = useState(false);

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

  //값 다 있으면 버튼 활성화
  useEffect(() => {
    const isAllFilled = username && password && passwordCheck && phoneNumber;
    setActiveBtn(isAllFilled);
  }, [username, password, passwordCheck, phoneNumber]);

  return (
    <div className="joinWrap">
      <JoinHeader title={"회원가입"} />
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
        <button
          type="submit"
          className={activeBtn ? "btnJoinDefault active" : "btnJoinDefault"}
        >
          가입하기
        </button>
      </form>
      <div className="joinLoginTxt">
        이미 계정이 있으신가요?{" "}
        <span onClick={() => navigate("/login")}>로그인하세요</span>
      </div>
    </div>
  );
}

export default Join;
