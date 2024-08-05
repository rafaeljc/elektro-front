import { Container, Input, Titulo } from "./style";

interface InputFormulario {
  titulo?: string;
  placeholder?: string;
  type?: string;
  padding_left?: string;
  padding_right?: string;
}

function InputFormulario(props: InputFormulario) {
  return (
    <Container>
      {props.titulo && <Titulo>{props.titulo}</Titulo>}
      <Input type={props.type} placeholder={props.placeholder} 
        padding_left={props.padding_left} padding_right={props.padding_right} />
    </Container>
  );
}

export default InputFormulario;
