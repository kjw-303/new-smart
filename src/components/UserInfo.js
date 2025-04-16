import React from "react";
import { useAuth } from "../context/AuthContext";
import { useSelection } from "../context/SelectionContext";

const UserInfo = () => {
  const { user } = useAuth();
  const { field, branch } = useSelection();

  return (
    <div className="userSection">
      <div>이름 : {user}</div>
      <div>계열 : {field}</div>
      <div>지점 : {branch}</div>
    </div>
  );
};

export default UserInfo;
