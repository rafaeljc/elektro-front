import styled from "styled-components";

export const Card = styled.div`
  width: 155px;
  height: 189px;
  border: 1px;
  border-radius: 15.13px;
  background-color: #F5F5F5;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.08));
  padding: 7.51px 9.46px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Imagem = styled.img`
  height: 127px;
  border-radius: 15.13px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Nome = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 0.8275rem;
  color: #2B2B2B;
`;

export const Preco = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 0.9456rem;
  color: #2B2B2B;
`;
