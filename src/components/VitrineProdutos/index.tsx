import CardProduto from "../CardProduto";
import { Vitrine, Titulo, BarraDivisoria, ListaProdutos } from "./style";

interface VitrineProdutos {
  titulo: string;
  listaProdutos: CardProduto[];
}

// TODO:
// implementar scroll horizontal
function VitrineProdutos(props: VitrineProdutos) {
  return (
    <Vitrine>
      <Titulo>
        {props.titulo}
        <BarraDivisoria />
      </Titulo>      
      <ListaProdutos>
        { props.listaProdutos.map((produto, i) => (
          <CardProduto key={i} 
            nome={produto.nome} 
            imagem={produto.imagem} 
            preco={produto.preco} />
        )) }
      </ListaProdutos>
    </Vitrine>
  );
}

export default VitrineProdutos;
