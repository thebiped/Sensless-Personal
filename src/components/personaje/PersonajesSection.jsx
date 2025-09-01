// ...existing code...
import "./PersonajesSection.css";
import olvidoForma1 from "../../assets/img/olvido.png";
import olvidoForma2 from "../../assets/img/olvido.png";
import zenithImg from "../../assets/img/zenith.png";
import sombraTributante from "../../assets/img/sombra-tributante.png";

const slides = [
  {
    id: 1,
    name: "Zenith",
    theme: "Protagonista",
    description: (
      <>
        <strong>Género:</strong> Trans
        <br />
        <strong>Edad:</strong> 18 años
        <br />
        <br />
        Zenith usa una varita mágica que canaliza hechizos y combina elementos
        químicos y mágicos para crear efectos ofensivos y defensivos,
        permitiéndole interactuar estratégicamente con el entorno y los
        enemigos.
      </>
    ),
    character: zenithImg,
  },
  {
    id: 2,
    name: "Sombra Tributante",
    theme: "Enemigo de la Arboleda",
    description: (
      <>
        Cuando detecta a un jugador, "wendigo" corre en linea recta tratando
        de embestir al jugador. si el wendigo choca contra un obstáculo, el
        wendigo queda paralizado por un par de segundos. 
      </>
    ),
    character: sombraTributante,
  },
  {
    id: 3,
    name: "OLVIDO",
    theme: "Jefe del primer nivel (primera forma)",
    description: (
      <>
        <strong>Edad:</strong> 200 años
        <br />
        <strong>Condición:</strong> Alzheimer
        <br />
        <br />
        Olvido es un anciano fabricante de armas mutado tras sobrevivir al
        incidente de la llama blanca. En su primera forma, dispara ráfagas de
        balas en zigzag y salta para aplastar al jugador.
      </>
    ),
    character: olvidoForma1,
  },
  {
    id: 2,
    name: "OLVIDO",
    theme: "Jefe del primer nivel (segunda forma)",
    subtitle: " Transformación: Serpiente con cráneo deformado",
    description:
      "En su segunda forma, Olvido dispara proyectiles giratorios, embiste alrededor del escenario y lanza un láser que cambia de dirección para confundir al jugador.",
    character: olvidoForma2,
  },
];

import { useRef, useEffect, useState } from "react";

function PersonajesSection() {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, slides.length);
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.idx);
          setVisibleSections((prev) => {
            const updated = [...prev];
            updated[idx] = entry.isIntersecting;
            return updated;
          });
        });
      },
      {
        threshold: 0.3,
      }
    );
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="personajes-scroll-container" id="personajes">
      {slides.map((slide, idx) => (
        <section className={`personaje-fade-section${   visibleSections[idx] ? " visible" : "" }`}
          key={slide.id}
          ref={(el) => (sectionRefs.current[idx] = el)}
          data-idx={idx}>
          <div className="personaje-img">
            <img src={slide.character} alt={slide.name} className="character" />
          </div>
          <div className="personaje-content">
            <div className="theme">
              <span>{slide.theme}</span>
            </div>
            <div className="title">
              <h2>{slide.name}</h2>
            </div>
            <div className="description">
              {slide.subtitle && <h4>{slide.subtitle}</h4>}
              <p>{slide.description}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default PersonajesSection;
