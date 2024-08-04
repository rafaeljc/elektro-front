import { Barra, Titulo } from "./style";
import OpcaoVoltar from "../OpcaoVoltar";
import IconeVoltar from "../../assets/icone-voltar.png";

interface BarraComNavegacao {
  titulo: string;
}

function BarraComNavegacao(props: BarraComNavegacao) {
  return (
    <Barra>
      <OpcaoVoltar imagem={IconeVoltar} />
      <Titulo>{props.titulo}</Titulo>
    </Barra>
  );
}

export default BarraComNavegacao;
