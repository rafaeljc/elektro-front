import { useNavigate } from "react-router-dom";
import { Button } from "./style";

interface OpcaoVoltar {
  imagem: string;
}

function OpcaoVoltar(props: OpcaoVoltar) {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)} type="button">
      <img src={props.imagem} alt="Voltar para página anterior" />
    </Button>
  );
}

export default OpcaoVoltar;
