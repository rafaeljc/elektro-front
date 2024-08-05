import BarraComNavegacao from "../../components/BarraComNavegacao";
import { Cadastro, Container, ContainerInput, Conteudo, Formulario, IconeDireita, IconeEsquerda, RecuperarSenha } from "./style";
import Logo from "../../assets/logo.png";
import InputFormulario from "../../components/InputFormulario";
import IconeEmail from "../../assets/icone-email.png";
import IconeCadeado from "../../assets/icone-cadeado.png";
import IconeOlho from "../../assets/icone-olho.png";
import BotaoEscuro from "../../components/BotaoEscuro";
import Oauth from "../../components/Oauth";
import { useNavigate } from "react-router-dom";

// TODO: implementar envio dos dados de login
function Login() {
  const navigate = useNavigate();

  return (
    <Container>
      <BarraComNavegacao titulo="Entrar" />
      <Conteudo>
        <img src={Logo} alt="Logo Elektro" />
        <Formulario>
          <ContainerInput>
            <InputFormulario type="text" placeholder="Digite seu..." padding_left="26px" />
            <IconeEsquerda src={IconeEmail} alt="Ícone email" />
          </ContainerInput>
          <ContainerInput>
            <InputFormulario type="password" placeholder="**********" padding_left="26px" padding_right="26px" />
            <IconeEsquerda src={IconeCadeado} alt="Ícone cadeado" />
            <IconeDireita src={IconeOlho} alt="Ícone olho" />
          </ContainerInput>         
          <RecuperarSenha href="#">Esqueci minha senha</RecuperarSenha>
          <BotaoEscuro onClick={() => navigate("/home")} 
              type="button" texto="Entrar" width="188px" />
        </Formulario>
        <Oauth barra="topo" />
        <Cadastro href="/cadastro">Não possui cadastro? Cadastre-se!</Cadastro>
      </Conteudo>
    </Container>
  );
}

export default Login;
