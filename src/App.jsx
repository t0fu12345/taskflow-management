import React, { useState } from "react";
import Login from "./pages/Login";       
import Register from "./pages/Register"; 
import Tasks from "./pages/Tasks";

export default function App() {
  // Dùng state để quản lý xem đang ở trang nào ('login' or 'register' or 'tasks')
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", backgroundColor: "#f4f6f9" }}>
      
      {/* KHU VỰC DIỀU HƯỚNG NHANH (MENU THANH TRÊN) */}
      <style>{`
        .nav-bar {
          display: flex;
          justify-content: center;
          gap: 12px;
          padding: 14px 18px;
          background: rgba(126, 94, 255, 0.14);
          border-radius: 999px;
          border: 1px solid rgba(126, 94, 255, 0.24);
          box-shadow: 0 18px 36px rgba(90, 55, 255, 0.12);
          backdrop-filter: blur(10px);
          margin: 0 20px;
        }

        .nav-tab {
          appearance: none;
          border: none;
          background: transparent;
          color: #4f3f8f;
          padding: 10px 20px;
          border-radius: 999px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .nav-tab:hover {
          color: #2e1aa8;
          background: rgba(143, 107, 255, 0.18);
          transform: translateY(-1px);
        }

        .nav-tab.active {
          color: #2a1163;
          background: rgba(143, 107, 255, 0.26);
          box-shadow: 0 10px 24px rgba(94, 60, 255, 0.18);
        }
      `}</style>
      <nav className="nav-bar">
        <button
          className={`nav-tab ${currentPage === "login" ? "active" : ""}`}
          onClick={() => setCurrentPage("login")}
        >
          Trang Đăng Nhập
        </button>
        <button
          className={`nav-tab ${currentPage === "register" ? "active" : ""}`}
          onClick={() => setCurrentPage("register")}
        >
          Trang Đăng Ký
        </button>
        <button
          className={`nav-tab ${currentPage === "tasks" ? "active" : ""}`}
          onClick={() => setCurrentPage("tasks")}
        >
          Quản lý công việc
        </button>
      </nav>

      {/* HIỂN THỊ COMPONENT TƯƠNG ỨNG DỰA VÀO STATE */}
      <div style={{ padding: "20px" }}>
  {currentPage === "login" ? <Login /> : currentPage === "register" ? <Register /> : <Tasks />}
      </div>

    </div>
  );
}