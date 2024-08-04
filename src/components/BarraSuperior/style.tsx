import styled from "styled-components";

export const PaddingBarraSuperior = styled.div`
  height: 71px;
`;

export const Container = styled.div`
  width: 100%;
  height: 71px;
  padding: 15px 30px;
  background-color: #2B2B2B;
  top: 0;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px
`;

export const Busca = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const InputBusca = styled.input`
  width: 100%;
  height: 40px;
  background-color: #F5F5F5;
  padding-left: 69px;
  padding-right: 10px;
  border: 0;
  border-radius: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #2B2B2B;
`;

export const ButtonBusca = styled.button`
  left: 41px;
  border: 0;
  position: absolute;
`;
