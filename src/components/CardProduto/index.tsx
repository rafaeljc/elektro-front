import { Card, Container, Imagem, Informacoes, Nome, Preco } from "./style";
import IconeGostei from "../../assets/icone-gostei.png";
import { useState, useEffect } from "react";

interface CardProduto {
  imagem: string;
  nome: string;
  preco: string;
}

const useImagem = (path: string) => {
  const [imagem, setImagem] = useState("");

  useEffect(() => {
    const fetchImagem = async () => {
      try {
        const response = await import(path);
        setImagem(response.default);
      } catch (error) {
        console.log("Não foi possível carregar a imagem");
      }
    }

    fetchImagem();
  }, [path]);

  return imagem;
}

function CardProduto(props: CardProduto) {
  let pathImagem = "../../assets/produtos/" + props.imagem;  

  return (
    <Card>      
      <Imagem src={useImagem(pathImagem)} alt={`Imagem do produto ${props.nome}`} />
      <Container>
        <Informacoes>
          <Nome>{props.nome}</Nome>
          <Preco>R${props.preco}</Preco>
        </Informacoes>
        <img src={IconeGostei} alt="Gostei do produto"/>
      </Container>
    </Card>
  );
}

export default CardProduto;
