import React, { useRef, useEffect, useState } from "react";
import "./MecanicasSection.css";
import rayoImg from "../../assets/img/rayo.png";
import ovniImg from "../../assets/img/ovni.png";
import calaveraImg from "../../assets/img/calavera.png";
import libroImg from "../../assets/img/libro.png";

const mecanicas = [
  {
    title: "SINERGIAS MÁGICAS",
    description:
      "Combina hechizos para crear efectos únicos e impredecibles en cada run.",
    icon: <img src={rayoImg} alt="Sinergias" />,
  },
  {
    title: "FÍSICAS REALISTAS",
    description:
      "Mundo 2D con físicas avanzadas estilo Noita. Cada elemento interactúa de forma realista.",
    icon: <img src={ovniImg} alt="Físicas" />,
  },
  {
    title: "ROGUELIKE PURO",
    description:
      "Cada muerte es permanente, pero cada run ofrece nuevas combinaciones y secretos.",
    icon: <img src={calaveraImg} alt="Roguelike" />,
  },
  {
    title: "ENEMIGOS ADAPTATIVOS",
    description:
      "Bandidos bullet-hell, Sombras Titubeantes y criaturas que evolucionan por nivel.",
    icon: <img src={libroImg} alt="Enemigos" />,
  },
];

const MecanicasSection = () => {
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
    <section className="mecanicas-section" ref={sectionRef} id="mecanicas">
      <div className="mecanicas-bg" />
      <h2 className={`mecanicas-title mecanicas-title-animate${   visible ? " animate" : "" }`}>MECANICAS DE JUEGO</h2>
      <div className="mecanicas-cards">
        {mecanicas.map((item, idx) => (
          <div className={`mecanica-card mecanica-card-animate${   visible ? " animate" : "" }`} key={idx} style={visible ? { animationDelay: `${0.2 + idx * 0.2}s` } : {}}>
            {React.cloneElement(item.icon, { className: "mecanica-card-icon" })}
            <h3 className={`mecanica-card-title mecanica-card-title-animate${   visible ? " animate" : "" }`}>{item.title}</h3>
            <p className={`mecanica-card-desc mecanica-card-desc-animate${   visible ? " animate" : "" }`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MecanicasSection;
