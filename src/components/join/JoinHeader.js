import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function JoinHeader({ title }) {
  const navigate = useNavigate();
  return (
    <div>
      <IoIosArrowBack
        size={25}
        className="absolute"
        onClick={() => navigate(-1)}
      />
      <h1 className="joinTitle">{title}</h1>
    </div>
  );
}

export default JoinHeader;
