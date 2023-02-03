import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import WhatsappModal from './componentes/WhatsappModal';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';
import Inicio from './componentes/Inicio';
import NavBar from './componentes/NavBar';
import Proyectos from './componentes/Proyectos';
import SobreMi from './componentes/SobreMi';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <WhatsappModal />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
