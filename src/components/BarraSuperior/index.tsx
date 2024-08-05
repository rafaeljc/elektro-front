import { Container, Busca, InputBusca, ButtonBusca } from "./style";
import MenuHamburger from "../../assets/icone-menu-hamburger.png";
import Lupa from "../../assets/icone-lupa.png";
import Carrinho from "../../assets/icone-carrinho.png";

// TODO:
// - implementar menu hamburguer
// - implementar busca
function BarraSuperior() {
  return (
    <Container>
      <img src={MenuHamburger} alt="Ícone menu hamburger" />
      <Busca>
        <InputBusca placeholder="Encontrar na Elektro"></InputBusca>
        <ButtonBusca type="submit">
          <img src={Lupa} alt="Botão busca" />
        </ButtonBusca>
      </Busca>
      <img src={Carrinho} alt="Ícone carrinho" />
    </Container>
  );
}

export default BarraSuperior;
