import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import LogoElektro from "../../components/LogoElektro"

function PaginaInicial() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  });
  
  // splash
  return (
    <Container>
      <LogoElektro />
    </Container>
  );
}

export default PaginaInicial;
