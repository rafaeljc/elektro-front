import { Routes, Route } from "react-router-dom";
import PaginaInicial from "../pages/PaginaInicial";
import Home from "../pages/Home";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/home" element={<Home />} />
      // TODO: rota para página não encontrada (404)
    </Routes>
  );
}

export default Rotas;
