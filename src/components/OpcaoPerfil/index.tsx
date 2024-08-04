import { Opcao } from "./style";

interface OpcaoPerfil {
  icone: string;
  texto: string;
}

function OpcaoPerfil(props: OpcaoPerfil) {
  return (
    <Opcao>
      <img src={props.icone} alt={`Ícone ${props.texto}`} />
      {props.texto}
    </Opcao>
  );
}

export default OpcaoPerfil;
