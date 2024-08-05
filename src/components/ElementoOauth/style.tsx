import styled from "styled-components";

interface Opcoes {
  barra: "topo" | "fundo";
  width?: string;
}

export const Container = styled.div<Opcoes>`
  width: ${(props: Opcoes) => (props.width ? props.width : "138px")};
  height: 89px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props: Opcoes) => (props.barra == "topo" ? "flex-end" : "flex-start")};
  align-items: center;
  border: 0;
  border-top: ${(props: Opcoes) => (props.barra == "topo" ? "2px solid #000" : "none")};
  border-bottom: ${(props: Opcoes) => (props.barra == "fundo" ? "2px solid #000" : "none")};
`;

export const Icone = styled.img`
  width: 69px;
  height: 69px;
`;
