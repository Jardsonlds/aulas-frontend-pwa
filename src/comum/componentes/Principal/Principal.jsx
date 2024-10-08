import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import "./Principal.css";

function Principal() {
  return (
    <main className="principal_root">
      Principal
      <BotaoCustomizado aoClicar={() => alert("clicou no Botão")} >Salvar</BotaoCustomizado>
      <BotaoCustomizado aoClicar={() => alert("clicou no Botão")} >Salvar</BotaoCustomizado>
      <BotaoCustomizado aoClicar={() => alert("clicou no Botão")} >Salvar</BotaoCustomizado>
    </main>
    
  );
}

export default Principal;
