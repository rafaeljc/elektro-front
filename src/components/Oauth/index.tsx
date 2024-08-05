import ElementoOauth from "../ElementoOauth";
import { Container, ContainerElemento } from "./style";
import OauthFacebook from "../../assets/oauth-facebook.png";
import OauthGoogle from "../../assets/oauth-google.png";

interface Oauth {
  barra: "topo" | "fundo";
}

function Oauth(props: Oauth) {
  return (
    <Container barra={props.barra}>
      <ContainerElemento barra={props.barra}>
        <ElementoOauth icone={OauthFacebook} barra={props.barra} /> 
      </ContainerElemento>        
      ou
      <ContainerElemento barra={props.barra}>
        <ElementoOauth icone={OauthGoogle} barra={props.barra} /> 
      </ContainerElemento>         
    </Container>
  );
}

export default Oauth;
