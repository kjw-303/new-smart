import React from "react";
import JoinHeader from "./JoinHeader";
import pwIcon from "../../assets/pw-find-send.svg";

function FindPwSend(props) {
  return (
    <div className="joinWrap">
      <JoinHeader title={"비밀번호 찾기"} />
      <div className="findTxt flex flex-col items-center">
        <img src={pwIcon} className="size-24" alt="" />
        <strong className="mt-14">
          비밀번호 복구 인증코드를
          <br />
          귀하의 휴대폰 번호로 보냈습니다.
        </strong>
        <span className="mt-4">
          문자를 받지 못하셨나요? <br />
          스팸문자함을 확인하거나 다시 인증버튼을 클릭하세요.
        </span>
      </div>
    </div>
  );
}

export default FindPwSend;
