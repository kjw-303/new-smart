import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CategorySelector from "./components/CategorySelector";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import SiteMaps from "./components/SiteMaps";
import Join from "./components/join/Join";
import FindPw from "./components/join/FindPw";
import FindPwSend from "./components/join/FindPwSend";
import { SelectionProvider } from "./context/SelectionContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import "./App.css";
import { MenuProvider } from "./context/MenuContext";
import MenuSettings from "./pages/MenuSettings";
import MenuList from "./components/MenuList";

function AppRoutes() {
  const { user } = useAuth();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CategorySelector />} />
        <Route path="/login" element={<Login />} />
        {/* 로그인하지 않은 경우 /login으로 Redirect */}
        <Route
          path="/main"
          element={user ? <MainPage /> : <Navigate to="/login" replace />}
        />
        <Route path="/sitemaps" element={<SiteMaps />} />
        <Route path="/join" element={<Join />} />
        <Route path="/menu" element={<MenuList />} />
        <Route path="/settings" element={<MenuSettings />} />
        <Route path="/findPw" element={<FindPw />} />
        <Route path="/findPwSend" element={<FindPwSend />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <MenuProvider>
      <SelectionProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </SelectionProvider>
    </MenuProvider>
  );
}

export default App;
