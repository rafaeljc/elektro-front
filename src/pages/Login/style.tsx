import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Conteudo = styled.div`
  width: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Formulario = styled.form`
  margin-top: -34px;
  padding-bottom: 36px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerInput = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const IconeEsquerda = styled.img`
  left: 0;
  margin-bottom: 3px;
  position: absolute;
`;

export const IconeDireita = styled.img`
  right: 0;
  margin-bottom: 3px;
  position: absolute;
`;

export const RecuperarSenha = styled.a`
  margin-top: 2px;
  margin-bottom: 20px;
  width: 100%;
  text-align: right;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #000;
`;

export const Cadastro = styled.a`
  margin-top: 40px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #0271A0;
`
