import { Routes, Route } from "react-router-dom";
import PaginaInicial from "../pages/PaginaInicial";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import Login from "../pages/Login";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/home" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/login" element={<Login />} />
      // TODO: rota para página não encontrada (404)
    </Routes>
  );
}

export default Rotas;
