import React, { useRef, useEffect, useState } from "react";
import "./HistoriaSection.css";
import lampara from "../../assets/img/luz.png";
import papiro from "../../assets/img/background-history-content.png";

const HistoriaSection = () => {
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
    <section className="historia-section" ref={sectionRef} id="historia">
      <div className="historia-container">
        <div className={`historia-card historia-card-animate${visible ? " animate" : ""}`}>
          <img src={papiro}alt="Papiro de fondo"className="historia-papiro-bg"/>

          <div className="historia-card-content">
            <h2 className={`historia-title-animate${visible ? " animate" : ""}`}><span>EL</span> ORIGEN</h2>
            <div className="historia-item">
              <h3 className={`historia-item-title-animate${   visible ? " animate" : "" }`}>Memoria Fragmentada</h3>
              <p className={`historia-item-desc-animate${ visible ? " animate" : ""}`}>
                Luna despierta en un mundo donde sus recuerdos se desvanecen.
                Cada muerte la regresa al inicio, pero con nuevos hechizos y
                sinergias mágicas que debe redescubrir.
              </p>
            </div>
            <div className="historia-item">
              <h3 className={`historia-item-title-animate${ visible ? " animate" : ""}`}>El Poder del Olvido</h3>
              <p className={`historia-item-desc-animate${visible ? " animate" : ""}`}>
                Olvido esparce escritos mágicos por los niveles, olvidándose de
                recogerlos. Estos pergaminos contienen hechizos poderosos que
                Luna debe encontrar para sobrevivir.
              </p>
            </div>
            <div className="historia-item">
              <h3 className={`historia-item-title-animate${visible ? " animate" : ""}`}>Sinergias Infinitas</h3>
              <p className={`historia-item-desc-animate${visible ? " animate" : ""}`}>
                Cada run es único. Las combinaciones de hechizos crean sinergias
                impredecibles que transforman completamente el gameplay y las
                estrategias de combate.
              </p>
            </div>
          </div>
        </div>
        <div className="historia-lampara">
          <img src={lampara} alt="Lámpara mágica" className={visible ? "lampara-animate" : ""}/>
        </div>
      </div>
    </section>
  );
};

export default HistoriaSection;
