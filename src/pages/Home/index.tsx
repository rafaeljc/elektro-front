import BarraSuperior from "../../components/BarraSuperior";
import { PaddingBarraSuperior } from "../../components/BarraSuperior/style";
import BarraInferior from "../../components/BarraInferior";
import { PaddingBarraInferior } from "../../components/BarraInferior/style";
import { 
  Conteudo, 
  Header, 
  LogoPequeno, 
  Titulo, 
  Footer, 
  Carousel,  
  SecaoTitulo, 
  Categorias,
  CategoriasItem,
  CategoriasGrid,
  Container,
  FooterIcones
} from "./style";
import Logo from "../../assets/logo.png";
import CatCelulares from "../../assets/categorias/celulares.png";
import CatNotebooks from "../../assets/categorias/notebooks.png";
import CatTablets from "../../assets/categorias/tablets.png";
import CatPerifericos from "../../assets/categorias/perifericos.png";
import CatTVs from "../../assets/categorias/tvs.png";
import CatAcessorios from "../../assets/categorias/acessorios.png";
import CatPCs from "../../assets/categorias/pcs.png";
import CatSmartwatches from "../../assets/categorias/smartwatches.png";
import VitrineProdutos from "../../components/VitrineProdutos";
import ImagemCarousel from "../../assets/_carousel.png";
import IconeFacebook from "../../assets/icone-facebook.png";
import IconeInstagram from "../../assets/icone-instagram.png";
import IconeTiktok from "../../assets/icone-tiktok.png";
import IconeTwitter from "../../assets/icone-twitter.png";
import IconeLinkedin from "../../assets/icone-linkedin.png";

function Home() {
  const paraVoce = {
    titulo: "Para você",
    listaProdutos: [
      { imagem: "1.png", nome: "Celular", preco: "800,00" },
      { imagem: "2.png", nome: "Capa protetora", preco: "20,00" },
    ],
  };

  const produtosDestaque = {
    titulo: "Produtos em destaque",
    listaProdutos: [
      { imagem: "3.png", nome: "Smart TV", preco: "1400,00" },
      { imagem: "4.png", nome: "Monitor", preco: "750,00" },
    ],
  };

  const maisVendidos = {
    titulo: "Mais vendidos",
    listaProdutos: [
      { imagem: "5.png", nome: "Smartphone", preco: "3.200,00" },
      { imagem: "6.png", nome: "Smartwatch", preco: "900,00" },
    ],
  };

  return (
    <Container>
      <BarraSuperior />
      <PaddingBarraSuperior />
      <Conteudo>        
        <Header>
          <LogoPequeno src={Logo} alt="Logo da Elektro" />
          <Titulo>Bem-vindo à Elektro!</Titulo>
        </Header>
        <Carousel>
          <img src={ImagemCarousel} alt="Carousel" />
        </Carousel>
        <Categorias>
          <SecaoTitulo>Categorias Elektro</SecaoTitulo>
          <CategoriasGrid>
            <CategoriasItem>
              <img src={CatCelulares} alt="Ícone da categoria Celulares"/>
              Celulares
            </CategoriasItem>
            <CategoriasItem>
              <img src={CatNotebooks} alt="Ícone da categoria Notebooks"/>
              Notebooks
            </CategoriasItem>
            <CategoriasItem>
              <img src={CatTablets} alt="Ícone da categoria Tablets"/>
              Tablets
            </CategoriasItem>
            <CategoriasItem>
              <img src={CatPerifericos} alt="Ícone da categoria Periféricos"/>
              Periféricos
            </CategoriasItem>
            <CategoriasItem>
              <img src={CatTVs} alt="Ícone da categoria TVs"/>
              TVs
            </CategoriasItem>
            <CategoriasItem>
              <img src={CatAcessorios} alt="Ícone da categoria Acessórios"/>
              Acessórios
            </CategoriasItem>
            <CategoriasItem>
              <img src={CatPCs} alt="Ícone da categoria PCs"/>
              PCs
            </CategoriasItem>
            <CategoriasItem>
              <img src={CatSmartwatches} alt="Ícone da categoria Smartwatches"/>
              Smartwatches
            </CategoriasItem>
          </CategoriasGrid>
        </Categorias>
        <VitrineProdutos 
          titulo={paraVoce.titulo} 
          listaProdutos={paraVoce.listaProdutos} />
        <VitrineProdutos 
          titulo={produtosDestaque.titulo} 
          listaProdutos={produtosDestaque.listaProdutos} />
        <VitrineProdutos 
          titulo={maisVendidos.titulo} 
          listaProdutos={maisVendidos.listaProdutos} />
      </Conteudo>
      <Footer>
        Siga-nos nas redes sociais!
        <FooterIcones>
          <img src={IconeFacebook} alt="Siga-nos no Facebook" />
          <img src={IconeInstagram} alt="Siga-nos no Instagram" />
          <img src={IconeTiktok} alt="Siga-nos no Tiktok" />
          <img src={IconeTwitter} alt="Siga-nos no Twitter" />
          <img src={IconeLinkedin} alt="Siga-nos no Linkedin" />
        </FooterIcones>
      </Footer>
      <PaddingBarraInferior />
      <BarraInferior />
    </Container>
  );
}

export default Home;
