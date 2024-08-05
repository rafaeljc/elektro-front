import { useNavigate } from "react-router-dom";
import BarraComNavegacao from "../../components/BarraComNavegacao";
import BotaoEscuro from "../../components/BotaoEscuro";
import InputFormulario from "../../components/InputFormulario";
import Oauth from "../../components/Oauth";
import { Container, Conteudo, Formulario } from "./style";

// TODO:
// - implementar envio dos dados do formulário
function Cadastro() {
  const navigate = useNavigate();

  return (
    <Container>
      <BarraComNavegacao titulo="Cadastrar-se" />
      <Conteudo>
        <Oauth barra="fundo" />
        <Formulario>
          <InputFormulario type="text" titulo="Nome" placeholder="Digite seu nome completo" />
          <InputFormulario type="text" titulo="CPF" placeholder="Digite seu CPF" />
          <InputFormulario type="text" titulo="Telefone" placeholder="Digite seu telefone" />
          <InputFormulario type="text" titulo="E-mail" placeholder="Digite seu e-mail" />
          <InputFormulario type="password" titulo="Senha" placeholder="Digite sua senha" />
          <InputFormulario type="password" titulo="Confirme sua senha" placeholder="Confirme sua senha" />
          <BotaoEscuro onClick={() => navigate("/cadastro/sucesso")} 
              type="button" texto="Cadastrar-se!" width="188px" />
        </Formulario>
      </Conteudo>
    </Container>
  );
}

export default Cadastro;
