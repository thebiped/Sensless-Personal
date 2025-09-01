import React, { useRef, useEffect, useState } from "react";
import "./JuegoSection.css";

const JuegoSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const btnRef = useRef(null);
  const [btnAnimated, setBtnAnimated] = useState(false);

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
    <section className="juego-section" ref={sectionRef} id="juego">
      <div className="overlay"></div>
      <div className="juego-content">
        <div className="content">
          <h2 className={`juego-title juego-title-animate${visible ? " animate" : ""}`}>
            ¿LISTO PARA RECORDAR?
          </h2>
          <p className={`juego-description juego-description-animate${visible ? " animate" : ""}`}>
            Sumérgete en un mundo donde cada muerte te acerca más a la verdad.
            Descubre los secretos de Luna y enfrenta el poder del Olvido.
          </p>
        </div>
        <button ref={btnRef} className={`btn-play juego-btn-animate${   btnAnimated ? " animate" : "" }`}>
          <svg height="24" width="24" viewBox="0 0 24 24" className="sparkle" fill="#AAAAAA">
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
          <span className="text">Jugar Ahora</span>
        </button>
      </div>
    </section>
  );
};

export default JuegoSection;
