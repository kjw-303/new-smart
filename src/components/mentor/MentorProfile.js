import React from "react";

function MentorProfile({ profileImg, name, field, location }) {
  return (
    <div className="profileWrap">
      <img src={profileImg} alt="" />
      <div className="name">
        <strong>{name}</strong> 멘토
      </div>
      <div>
        <span className="mr-2">{field}</span>
        <span>{location}</span>
      </div>
      <div>상담시간 | (월~금) 09:30~18:30, (토) 09:30~14:00</div>
    </div>
  );
}

export default MentorProfile;
