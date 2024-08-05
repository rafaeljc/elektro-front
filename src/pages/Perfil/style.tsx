import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 16px 32px 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const Topo = styled.header`
  margin-bottom: 1%;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoPequeno = styled.img`
  width: 48px;
  height: 48px;
`;

export const ImagemPerfil = styled.img`
  margin-bottom: 20px;
`;

export const Botoes = styled.div`
  margin-bottom: 32px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Opcoes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 21px;
`;
