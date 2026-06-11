import React, { useState } from "react";
import Login from "./pages/Login";       
import Register from "./pages/Register"; 

export default function App() {
  // Dùng state để quản lý xem đang ở trang nào ('login' hoặc 'register')
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", backgroundColor: "#f4f6f9" }}>
      
      {/* KHU VỰC DIỀU HƯỚNG NHANH (MENU THANH TRÊN) */}
      <nav style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "15px", backgroundColor: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <button 
          onClick={() => setCurrentPage("login")} 
          style={{ padding: "8px 16px", cursor: "pointer", fontWeight: currentPage === "login" ? "bold" : "normal", color: currentPage === "login" ? "#007bff" : "#333", border: "none", background: "none" }}
        >
          Trang Đăng Nhập
        </button>
        <button 
          onClick={() => setCurrentPage("register")} 
          style={{ padding: "8px 16px", cursor: "pointer", fontWeight: currentPage === "register" ? "bold" : "normal", color: currentPage === "register" ? "#28a745" : "#333", border: "none", background: "none" }}
        >
          Trang Đăng Ký
        </button>
      </nav>

      {/* HIỂN THỊ COMPONENT TƯƠNG ỨNG DỰA VÀO STATE */}
      <div style={{ padding: "20px" }}>
        {currentPage === "login" ? <Login /> : <Register />}
      </div>

    </div>
  );
}