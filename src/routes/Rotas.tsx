import { Routes, Route } from "react-router-dom";
import PaginaInicial from "../pages/PaginaInicial";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      // TODO: rota para página não encontrada (404)
    </Routes>
  );
}

export default Rotas;
