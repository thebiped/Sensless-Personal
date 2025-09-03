import React, { useState } from "react";
import "./Register.css";
import olvidoImg from "../../assets/img/background-register-olvido.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div className="register-bg-main">
      <div className="register-container">
        <div className="register-form-section">
          <h1 className="register-title anim-title">SENSELESS</h1>
          <h2
            className="register-subtitle anim-title"
            style={{ animationDelay: "0.1s" }}
          >
            CREAR UNA CUENTA
          </h2>
          <form className="register-form">
            <div className="input-group">
                <label htmlFor="username" className="anim-label" style={{ animationDelay: "0.2s" }}>
                    Username
                </label>
                <div className="register-input-wrapper anim-input" style={{ animationDelay: "0.3s" }}>
                    <img src="/src/assets/img/icon_pixelart-user.png" className="register-icon"/>
                    <input type="text" id="username" placeholder="name20..." value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username"/>
                </div>
            </div>
            <div className="input-group">
                <label htmlFor="password" className="anim-label" style={{ animationDelay: "0.4s" }}>Password</label>
                <div className="register-input-wrapper anim-input" style={{ animationDelay: "0.5s" }}>
                    <img src="/src/assets/img/icon_pixelart-keyhole.png" className="register-icon"/>
                    <input type="password" id="password" placeholder="contraseña..." value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password"/>
                </div>
            </div>
            <div className="input-group">
                <label htmlFor="password" className="anim-label" style={{ animationDelay: "0.4s" }}>Confirm password</label>
                <div className="register-input-wrapper anim-input" style={{ animationDelay: "0.5s" }}>
                    <img src="/src/assets/img/icon_pixelart-keyhole.png" className="register-icon"/>
                    <input type="password" id="password" placeholder="contraseña..." value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password"/>
                </div>
            </div>
            <div className="login-options anim-label" style={{ animationDelay: "0.6s" }}>
              <label className="remember-label">
                <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)}/>
                <span className="checkmark"></span>
                Acepto los <a href="#" className="checkbox-text">Terminos y condiciones</a>
              </label>
            </div>
            <div className="form-btn">
              <button type="submit" className="register-btn anim-btn" style={{ animationDelay: "0.7s" }}>
                Registrarse
              </button>
            </div>
          </form>
          <div className="register-bottom anim-label" style={{ animationDelay: "0.8s" }}>
            <span>¿Ya tienes una cuenta? </span>
            <Link to="/login" className="register-link">Inicia Sesión</Link>
          </div>
        </div>
        <div className="register-image-section anim-img">
          <img src={olvidoImg} alt="Zenith" />
        </div>
      </div>
    </div>
  );
};

export default Register;
