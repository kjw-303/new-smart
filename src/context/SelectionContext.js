import React, { createContext, useContext, useState } from "react";
const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [field, setField] = useState("");
  const [branch, setBranch] = useState("");
  return (
    <SelectionContext.Provider value={{ field, branch, setField, setBranch }}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection must be used with a SelectionProvider");
  }
  return context;
};
