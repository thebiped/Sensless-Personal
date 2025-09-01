import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from './components/inicio/HeroSection';
import HistoriaSection from './components/historia/HistoriaSection';
import EquipoSection from './components/equipo/EquipoSection';
import PersonajesSection from './components/personaje/PersonajesSection';
import MecanicasSection from './components/mecanica/MecanicasSection';
import JuegoSection from './components/juego/JuegoSection';
import Login from './components/login/Login'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <HeroSection />
              <EquipoSection />
              <HistoriaSection />
              <PersonajesSection />
              <MecanicasSection />
              <JuegoSection />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;