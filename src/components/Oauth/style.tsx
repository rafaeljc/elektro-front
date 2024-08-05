import styled from "styled-components";

interface Opcao {
  barra: "topo" | "fundo";
}

export const Container = styled.div<Opcao>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: ${(props: Opcao) => (props.barra == "topo" ? "flex-start" : "flex-end")};
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #2B2B2B;
`;

// para alinhar corretamente o texto com os elementos
export const ContainerElemento = styled.div<Opcao>`
  padding: ${(props: Opcao) => (props.barra == "topo" ? "5px 0 0 0" : "0 0 5px 0")};
`;
