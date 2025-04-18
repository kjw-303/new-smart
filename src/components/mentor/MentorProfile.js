import React from "react";

function MentorProfile({ profileImg, name, field, location }) {
  return (
    <div className="profileWrap">
      <img src={profileImg} alt="" />
      <div>
        <span className="mr-2">{field}</span>
        <span>{location}</span>
      </div>
      <div className="name">
        <strong>{name}</strong> 멘토
      </div>
    </div>
  );
}

export default MentorProfile;
