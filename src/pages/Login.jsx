import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("Vui lòng điền đầy đủ thông tin đăng nhập.");
      return;
    }
    setError("");
    alert("Đăng nhập thành công với tài khoản: " + username);
  };

  return (
    <div style={{ minHeight: "calc(100vh - 100px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", backgroundColor: "#f0f2f7" }}>
      <style>{`
        .auth-wrap {
          width: min(520px, 100%);
          margin: 0 auto;
          color: #1b1b1b;
        }

        .auth-box {
          background: #ffffff;
          border: 1px solid rgba(219, 219, 219, 0.8);
          border-radius: 18px;
          box-shadow: 0 24px 60px rgba(15, 11, 40, 0.12);
          padding: 34px 32px;
        }

        .auth-head {
          margin-bottom: 28px;
        }

        .auth-title {
          margin: 0;
          font-size: 30px;
          line-height: 1.05;
          color: #111111;
        }

        .auth-subtitle {
          margin: 12px 0 0;
          color: #4f5158;
          line-height: 1.75;
        }

        .form-field {
          display: grid;
          gap: 10px;
          margin-bottom: 18px;
        }

        .form-label {
          color: #2f2f2f;
          font-size: 14px;
          font-weight: 600;
        }

        .form-input {
          width: 100%;
          border-radius: 14px;
          padding: 14px 16px;
          border: 1px solid #d7d7db;
          background: #ffffff;
          color: #111111;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-input::placeholder {
          color: #9a9aa8;
        }

        .form-input:focus {
          outline: none;
          border-color: #856bff;
          box-shadow: 0 0 0 4px rgba(133, 107, 255, 0.16);
          background: #ffffff;
        }

        .form-button {
          width: 100%;
          border: none;
          border-radius: 16px;
          padding: 14px 16px;
          background: linear-gradient(135deg, #7f64ff 0%, #a181ff 100%);
          color: #ffffff;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.3s ease;
          box-shadow: 0 12px 28px rgba(116, 82, 255, 0.18);
        }

        .form-button:hover {
          transform: translateY(-1px);
          background: linear-gradient(135deg, #8f75ff 0%, #b390ff 100%);
        }

        .error-message {
          background: rgba(251, 228, 244, 0.95);
          color: #6c2f77;
          border: 1px solid rgba(175, 104, 162, 0.42);
          padding: 14px 16px;
          border-radius: 14px;
          margin-bottom: 18px;
        }
      `}</style>

      <div className="auth-wrap">
        <div className="auth-box">
          <div className="auth-head">
            <p className="section-label" style={{ margin: 0, color: "#7f64ff", letterSpacing: "0.18em", fontSize: "12px", textTransform: "uppercase", fontWeight: 700 }}>Đăng nhập</p>
            <h2 className="auth-title">Chào mừng trở lại</h2>
            <p className="auth-subtitle">Đăng nhập để tiếp tục quản lý công việc trong giao diện hiện đại và dễ nhìn.</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form className="auth-form" onSubmit={handleLogin}>
            <div className="form-field">
              <label className="form-label">Tên đăng nhập</label>
              <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nhập username"
              />
            </div>

            <div className="form-field">
              <label className="form-label">Mật khẩu</label>
              <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
              />
            </div>

            <button className="form-button" type="submit">Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
}
