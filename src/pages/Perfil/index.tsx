import OpcaoPerfil from "../../components/OpcaoPerfil";
import { Botoes, Container, ImagemPerfil, LogoPequeno, Opcoes, Topo } from "./style";
import Logo from "../../assets/logo.png";
import IconeConfiguracoes from "../../assets/icone-configuracoes.png";
import ImagemUsuario from "../../assets/perfil-imagem-usuario.png";
import IconeDados from "../../assets/perfil-dados.png";
import IconeProdutos from "../../assets/perfil-produtos.png";
import IconeFavoritos from "../../assets/perfil-favoritos.png";
import IconeCarrinho from "../../assets/perfil-carrinho.png";
import IconeCupons from "../../assets/perfil-cupons.png";
import IconeChats from "../../assets/perfil-chats.png";
import BarraInferior from "../../components/BarraInferior";
import BotaoEscuro from "../../components/BotaoEscuro";
import { useNavigate } from "react-router-dom";


function Perfil() {
  const navigate = useNavigate();

  return (
    <Container>
      <Topo>
        <LogoPequeno src={Logo} alt="Logo Elektro" />
        <img src={IconeConfiguracoes} alt="Ícone configurações" />
      </Topo>
      <ImagemPerfil src={ImagemUsuario} alt="Imagem do usuário" />
      <Botoes>
        <BotaoEscuro onClick={() => navigate("/login")} texto="Entrar" />
        <BotaoEscuro onClick={() => navigate("/cadastro")} texto="Cadastrar" />
      </Botoes>
      <Opcoes>
        <OpcaoPerfil icone={IconeDados} texto={"Meus dados"} />
        <OpcaoPerfil icone={IconeProdutos} texto={"Meus produtos"} />
        <OpcaoPerfil icone={IconeFavoritos} texto={"Meus Favoritos"} />
        <OpcaoPerfil icone={IconeCarrinho} texto={"Meu carrinho"} />
        <OpcaoPerfil icone={IconeCupons} texto={"Meus cupons"} />
        <OpcaoPerfil icone={IconeChats} texto={"Meus chats"} />
      </Opcoes>
      <BarraInferior />
    </Container>    
  );
}

export default Perfil;
