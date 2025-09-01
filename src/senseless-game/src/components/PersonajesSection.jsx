import { useEffect, useState } from "react";
import "./PersonajesSection.css";
import olvidoForma1 from "../assets/img/olvido.png";
import olvidoForma2 from "../assets/img/olvido.png";
import zenithImg from "../assets/img/zenith.png";
import containerBg from "../assets/img/container-chracter.png";

const slides = [
  {
    id: 1,
    name: "OLVIDO",
    theme: "Jefe del primer nivel (primera forma)",
    description: (
      <>
        <strong>Edad:</strong> 200 años<br />
        <strong>Condición:</strong> Alzheimer<br />
        <br />
        Olvido es un anciano fabricante de armas mutado tras sobrevivir al incidente de la llama blanca. En su primera forma, dispara ráfagas de balas en zigzag y salta para aplastar al jugador.
      </>
    ),
    character: olvidoForma1,
    background: containerBg,
  },
  {
    id: 2,
    name: "OLVIDO",
    theme: "Jefe del primer nivel (segunda forma)",
    subtitle: "Transformación: Serpiente con cráneo deformado",
    description: (
      "En su segunda forma, Olvido dispara proyectiles giratorios, embiste alrededor del escenario y lanza un láser que cambia de dirección para confundir al jugador."
    ),
    character: olvidoForma2,
    background: containerBg,
  },
  {
    id: 3,
    name: "Zenith",
    theme: "Protagonista",
    description: (
      <>
        <strong>Género:</strong> Trans<br />
        <strong>Edad:</strong> 18 años<br />
        <br />
        Zenith usa una varita mágica que canaliza hechizos y combina elementos químicos y mágicos para crear efectos ofensivos y defensivos, permitiéndole interactuar estratégicamente con el entorno y los enemigos.
      </>
    ),
    character: zenithImg,
    background: containerBg,
  },
];

function PersonajesSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight;

      const scrollPercentage = scrollPosition / (totalHeight - windowHeight);
      const newIndex = Math.floor(scrollPercentage * slides.length);
      setCurrent(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="personajes-section">
      {slides.map((slide, idx) => (
        <div className={`slide${idx === current ? " active" : ""}`} key={slide.id}>
          {/* Columna izquierda */}
          <div
            className="slide-left"
            style={{ backgroundImage: `url(${slide.background})` }}
          >
            <img src={slide.character} alt={slide.name} className="character" />
          </div>
          {/* Columna derecha */}
          <div className="slide-right">
            <div className="theme"><span>{slide.theme}</span></div>
            <div className="title"><h2>{slide.name}</h2></div>
            <div className="description">
              <h4>{slide.subtitle}</h4>
              <p>{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PersonajesSection;