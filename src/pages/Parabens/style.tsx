import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 235px 27px 88px 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Conteudo = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

export const Titulo = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #2B2B2B;
`;

export const Texto = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #2B2B2B;
  text-align: center;
`;

export const BotaoAvancar = styled.button`
  width: 49px;
  height: 49px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
`;
