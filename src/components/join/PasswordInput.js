import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

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

export default PasswordInput;
