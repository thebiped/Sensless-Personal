import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const btnRef = useRef(null);
  const [btnAnimated, setBtnAnimated] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBtnAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    if (btnRef.current) {
      observer.observe(btnRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section" id="inicio">
      {/* Header Navigation */}
      <header className="hero-header">
        <div className="header-container">
          <div className="logo header-animate" style={{ animationDelay: "0.1s" }}>Logo</div>
          <nav className="nav-menu">
            <a href="#inicio" className="header-animate" style={{ animationDelay: "0.3s" }}>Inicio</a>
            <a href="#historia"className="header-animate"style={{ animationDelay: "0.45s" }}>Historia</a>
            <a href="#personajes" className="header-animate" style={{ animationDelay: "0.6s" }}>Personajes</a>
            <a href="#mecanicas" className="header-animate" style={{ animationDelay: "0.75s" }}>Mecanicas</a>
            <Link to="/login" className="nav-login-btn header-animate" style={{ animationDelay: "0.9s" }}>Login</Link>          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title fade-in-scale">
            <span className="title-the fade-in-scale">The</span>
            <span className="title-senseless fade-in-scale">SensLess</span>
          </h1>
          <p className="hero-description fade-in">
            En un mundo fracturado por recuerdos perdidos y sombras que acechan, tu única misión es encontrar el sentido antes de perderte en el vacío.
          </p>
          <button ref={btnRef} className={`btn-play btn-play-animate${   btnAnimated ? " animate" : "" }`}>
            <svg height="24" width="24" viewBox="0 0 24 24" className="sparkle" fill="#AAAAAA">
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>
            <span className="text">Jugar Ahora</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
