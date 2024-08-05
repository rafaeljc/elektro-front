import { BotaoAvancar, Container, Conteudo, Texto, Titulo } from "./style";
import ImagemParabens from "../../assets/parabens.png";
import IconeSetaAvancar from "../../assets/icone-seta-avancar.png";

function Parabens() {
  return (
    <Container>
      <Conteudo>
        <img src={ImagemParabens} alt="Pessoa animada por cadastrar-se na Elektro" />
        <Titulo>Parabéns, você conseguiu!</Titulo>
        <Texto>Bem-vindo ao time de usuários e colaboradores Elektro.</Texto>
      </Conteudo>
      <BotaoAvancar type="button">
        <img src={IconeSetaAvancar} alt="Avançar para próxima página" />
      </BotaoAvancar>
    </Container>
  );
}

export default Parabens;
