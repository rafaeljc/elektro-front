import { Container, Input, Titulo } from "./style";

interface InputFormulario {
  titulo?: string;
  placeholder?: string;
}

function InputFormulario(props: InputFormulario) {
  return (
    <Container>
      {props.titulo && <Titulo>{props.titulo}</Titulo>}
      <Input placeholder={props.placeholder} />
    </Container>
  );
}

export default InputFormulario;
