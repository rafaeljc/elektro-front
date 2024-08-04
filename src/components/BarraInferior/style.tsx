import styled from "styled-components";
import { Link } from "react-router-dom";

export const PaddingBarraInferior = styled.div`
  height: 68px;
`;

export const Menu = styled.nav`
  width: 100%;
  height: 68px;
  padding: 8.5px 32px;
  background-color: #2B2B2B;
  bottom: 0;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Opcao = styled(Link)`
  width: auto;
  height: 51px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Texto = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 0.875rem;
  color: #DEDEDE;
`;
