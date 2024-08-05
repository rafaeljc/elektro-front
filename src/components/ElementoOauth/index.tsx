import { Container, Icone } from "./style";

interface ElementoOauth {
  icone: string;
  barra: "topo" | "fundo";
  width?: string;
}

function ElementoOauth(props: ElementoOauth) {
  return (
    <Container barra={props.barra} width={props.width}>
      <Icone src={props.icone} />
    </Container>
  );
}

export default ElementoOauth;
