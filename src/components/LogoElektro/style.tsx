import styled from "styled-components";

export const Container = styled.div`
  width: 330px;
  height: 363px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Imagem = styled.img`
  top: 0;
`;

export const Texto = styled.h1`
  font-family: "Russo One", sans-serif;
  font-weight: 400;
  font-size: 3.5rem;
  color: #2A2A2A;
  bottom: 0;
  position: absolute;
`;
