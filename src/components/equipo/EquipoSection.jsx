import React, { useRef, useEffect, useState } from "react";
import "./EquipoSection.css";

const EquipoSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="equipo-section" ref={sectionRef} id="equipo">
      <div className="equipo-container">
        <div className="equipo-header">
          <h2 className={`section-title equipo-title-animate${   visible ? " animate" : "" }`}>NUESTRO EQUIPO </h2>
        </div>
        <div className="equipo-content">
          <div className="equipo-grid">
            <div className="miembro-card">
              <div className="avatar-container">
                <div className={`avatar juan-avatar equipo-avatar-animate${   visible ? " animate" : "" }`}></div>
              </div>
              <h3 className={`miembro-nombre equipo-nombre-animate${   visible ? " animate" : "" }`}>Juan Cottier</h3>
              <p className={`miembro-rol equipo-rol-animate${   visible ? " animate" : "" }`}>
                Líder de Proyecto y Programador Principal
              </p>
              <a className="miembro-github" href="https://github.com/Juanerros" target="_blank" rel="noopener noreferrer">Ver GitHub</a>
            </div>
            <div className="miembro-card">
              <div className="avatar-container">
                <div className={`avatar mateo-avatar equipo-avatar-animate${   visible ? " animate" : "" }`}></div>
              </div>
              <h3 className={`miembro-nombre equipo-nombre-animate${   visible ? " animate" : "" }`}>Mateo Palacio</h3>
              <p className={`miembro-rol equipo-rol-animate${   visible ? " animate" : "" }`}>
                Programador de Sistemas y Mecánicas
              </p>
              <a className="miembro-github" href="https://github.com/palateo8967" target="_blank" rel="noopener noreferrer">Ver GitHub</a>
            </div>
            <div className="miembro-card">
              <div className="avatar-container">
                <div className={`avatar farias-avatar equipo-avatar-animate${ visible ? " animate" : ""}`}></div>
              </div>
              <h3 className={`miembro-nombre equipo-nombre-animate${ visible ? " animate" : ""}`}>Farias Tomas</h3>
              <p className={`miembro-rol equipo-rol-animate${visible ? " animate" : ""}`}>
                Diseñador de Juego y Arte Conceptual
              </p>
              <a className="miembro-github" href="#" target="_blank" rel="noopener noreferrer">Ver GitHub</a>
            </div>
            <div className="miembro-card">
              <div className="avatar-container">
                <div className={`avatar jesus-avatar equipo-avatar-animate${   visible ? " animate" : "" }`}></div>
              </div>
              <h3 className={`miembro-nombre equipo-nombre-animate${visible ? " animate" : ""}`}>Jesus Leto</h3>
              <p className={`miembro-rol equipo-rol-animate${   visible ? " animate" : "" }`}>
                Diseñador Web y Experiencia de Usuario
              </p>
              <a className="miembro-github" href="https://github.com/thebiped" target="_blank" rel="noopener noreferrer">Ver GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipoSection;
