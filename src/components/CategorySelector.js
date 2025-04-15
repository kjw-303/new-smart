import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelection } from "../context/SelectionContext";
import "../css/Contents.css";

const fields = [
  "컴퓨터",
  "게임",
  "아이티",
  "웹툰",
  "뷰티",
  "항공운항",
  "요리",
  "엔터",
  "팻아카데미",
];
const branches = ["홍대", "노원", "광주", "대전", "안산", "안양", "대구"];

const CategorySelector = () => {
  const navigate = useNavigate();
  const { setField, setBranch } = useSelection();
  const [selectedField, setSelectedField] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedField && selectedBranch) {
      setField(selectedField);
      setBranch(selectedBranch);
      navigate("/login");
    } else {
      alert("계열과 지점을 모두 선택해주세요.");
    }
  };

  return (
    <div className="mainBg">
      <h1>계열 및 지점 선택</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label>계열 : </label>
          <select
            className="rounded-lg px-4 py-4"
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
          >
            <option value="">선택하세요.</option>
            {fields.map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <label>지점 : </label>
          <select
            className="rounded-lg px-4 py-4"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option value="">선택하세요.</option>
            {branches.map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btnSubmit">
          다음
        </button>
      </form>
    </div>
  );
};

export default CategorySelector;
