import BarraComNavegacao from "../../components/BarraComNavegacao";
import BotaoEscuro from "../../components/BotaoEscuro";
import InputFormulario from "../../components/InputFormulario";
import Oauth from "../../components/Oauth";
import { Container, Conteudo, Formulario } from "./style";

function Cadastro() {
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
          <BotaoEscuro type="submit" texto="Cadastrar-se!" width="188px" />
        </Formulario>
      </Conteudo>
    </Container>
  );
}

export default Cadastro;
