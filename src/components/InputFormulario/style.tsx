import styled from "styled-components";

interface Opcoes {
  padding_left?: string;
  padding_right?: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Input = styled.input<Opcoes>`
  width: 100%;
  height: 24px;
  background-color: #F5F5F5;
  margin: 8px 0;
  border: 0;
  border-bottom: 2px solid #B9B9B9;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #B9B9B9;
  padding-left: ${(props: Opcoes) => (props.padding_left ? props.padding_left : "none")};
  padding-right: ${(props: Opcoes) => (props.padding_right ? props.padding_right : "none")};
`;

export const Titulo = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #2B2B2B;
`;
