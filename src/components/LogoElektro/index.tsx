import { Container, Imagem, Texto } from "./style";
import Logo from "../../assets/logo.png"

function LogoElektro() {
  return (
    <Container>
      <Imagem src={Logo} alt="Logo da Elektro"/>
      <Texto>Elektro</Texto>
    </Container>
  );
}

export default LogoElektro;
