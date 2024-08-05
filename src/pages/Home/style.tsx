import styled from "styled-components";

export const Container = styled.div`
  background-color: #F5F5F5;
`;

export const Conteudo = styled.article`
  padding: 13.5px 31.5px 0px 31.5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

export const LogoPequeno = styled.img`
  width: 42px;
  height: 42px;
`;

export const Titulo = styled.h1`
  font-family: "Russo One", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  color: #FF8F0E;
`;

export const Carousel = styled.div`
  width: 100%;
  height: 230px;
  border-bottom: 2px solid #B9B9B9;
`;

export const SecaoTitulo = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #000;
`;

export const Categorias = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const CategoriasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
`;

export const CategoriasItem = styled.div`
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: #2B2B2B;
`;

export const Footer = styled.footer`  
  width: 100%;
  height: 180px;
  background-color: #FFAE50;
  margin-top: 42px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #2B2B2B;
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
`;

export const FooterIcones = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;
