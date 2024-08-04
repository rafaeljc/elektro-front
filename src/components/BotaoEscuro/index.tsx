import React from "react";
import { Botao } from "./style";

interface BotaoEscuro {
  type?: "submit" | "reset" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  width?: string;
  texto: string;
}

function BotaoEscuro(props: BotaoEscuro) {
  return (
      <Botao type={props.type} onClick={props.onClick} width={props.width}>{props.texto}</Botao>    
  );
}

export default BotaoEscuro;
