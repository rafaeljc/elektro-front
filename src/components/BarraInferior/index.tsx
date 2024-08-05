import { Menu, Opcao, Texto } from "./style";
import IconeHome from "../../assets/icone-home.png";
import IconeChat from "../../assets/icone-chat.png";
import IconeAvisos from "../../assets/icone-avisos.png";
import IconePerfil from "../../assets/icone-perfil.png";

function BarraInferior() {
  return (
    <Menu>
      <Opcao to="/">
        <img src={IconeHome} alt="Ícone home"/>
        <Texto>Home</Texto>
      </Opcao>
      <Opcao to="">
        <img src={IconeChat} alt="Ícone chat"/>
        <Texto>Chat</Texto>
      </Opcao>
      <Opcao to="">
        <img src={IconeAvisos} alt="Ícone avisos"/>
        <Texto>Avisos</Texto>
      </Opcao>
      <Opcao to="/perfil">
        <img src={IconePerfil} alt="Ícone perfil"/>
        <Texto>Perfil</Texto>
      </Opcao>
    </Menu>
  );
}

export default BarraInferior;
