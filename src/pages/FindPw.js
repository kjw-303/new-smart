import React from "react";
import { useState, useEffect } from "react";
import JoinHeader from "../components/join/JoinHeader";
import pwIcon from "../assets/pw-find.svg";
import "../css/Join.css";
import { useNavigate } from "react-router-dom";

function FindPw(props) {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [activeBtn, setActiveBtn] = useState(false);

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      alert("휴대폰 번호를 입력해주세요.");
      return;
    }

    navigate("/findPwSend");
  };

  //값 다 있으면 버튼 활성화
  useEffect(() => {
    const isAllFilled = phoneNumber;
    setActiveBtn(isAllFilled);
  }, [phoneNumber]);

  return (
    <div className="joinWrap">
      <JoinHeader title={"비밀번호 찾기"} />
      <div className="findTxt flex flex-col items-center">
        <img src={pwIcon} className="size-24" alt="" />
        <strong className="mt-14">비밀번호를 잊으셨나요?</strong>
        <span className="mt-4">
          비밀번호 재설정 지침을 받으려면 아래에
          <br />
          등록된 휴대폰 번호를 입력하세요.
        </span>
      </div>
      <form>
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
      </form>
      <button
        type="submit"
        className={activeBtn ? "btnJoinDefault active" : "btnJoinDefault"}
        onClick={handleJoinSubmit}
      >
        보내기
      </button>
    </div>
  );
}

export default FindPw;
