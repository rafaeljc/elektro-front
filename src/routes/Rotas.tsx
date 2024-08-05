import { Routes, Route } from "react-router-dom";
import PaginaInicial from "../pages/PaginaInicial";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Parabens from "../pages/Parabens";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/home" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/cadastro/sucesso" element={<Parabens />} />
      // TODO: rota para página não encontrada (404)
    </Routes>
  );
}

export default Rotas;
