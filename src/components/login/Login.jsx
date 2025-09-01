import React, { useState } from "react";
import "./Login.css";
import zenithImg from "../../assets/img/background-login-zenith.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div className="login-bg-main">
      <div className="login-container">
        <div className="login-form-section">
          <h1 className="login-title anim-title">SENSELESS</h1>
          <h2
            className="login-subtitle anim-title"
            style={{ animationDelay: "0.1s" }}
          >
            INICIO DE SESIÓN
          </h2>
          <form className="login-form">
            <label
              htmlFor="username"
              className="anim-label"
              style={{ animationDelay: "0.2s" }}
            >
              Username
            </label>
            <div
              className="login-input-wrapper anim-input"
              style={{ animationDelay: "0.3s" }}
            >
              <img
                src="/src/assets/img/icon_pixelart-user.png"
                className="login-icon"
              />
              <input type="text" id="username" placeholder="name20..." value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username"/>
            </div>
            <label htmlFor="password" className="anim-label" style={{ animationDelay: "0.4s" }}>
              Password
            </label>
            <div className="login-input-wrapper anim-input" style={{ animationDelay: "0.5s" }}>
              <img src="/src/assets/img/icon_pixelart-keyhole.png" className="login-icon"/>
              <input type="password" id="password" placeholder="contraseña..." value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password"/>
            </div>
            <div className="login-options anim-label" style={{ animationDelay: "0.6s" }}>
              <label className="remember-label">
                <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)}/>
                <span className="checkmark"></span>
                Recordarme
              </label>
              <a href="#" className="forgot-link">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="form-btn">
              <button type="submit" className="login-btn anim-btn" style={{ animationDelay: "0.7s" }}>
                Iniciar sesión
              </button>
            </div>
          </form>
          <div className="login-bottom anim-label" style={{ animationDelay: "0.8s" }}>
            <span>¿Ya tienes una cuenta? </span>
            <a href="#" className="login-link">Inicia Sesión</a>
          </div>
        </div>
        <div className="login-image-section anim-img">
          <img src={zenithImg} alt="Zenith" />
        </div>
      </div>
    </div>
  );
};

export default Login;
