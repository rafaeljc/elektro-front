import styled from "styled-components";

interface Botao {
  width?: string;
}

export const Botao = styled.button<Botao>`
  width: ${(props: Botao) => (props.width ? props.width : "139px")};
  height: 40px;
  background-color: #2B2B2B;
  border: 0;
  border-radius: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  color: #F5F5F5;
`;
