import { useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";

const PaginaListaTarefas = () => {
    const [descricao, setDescricao] = useState ('');
    const [tarefas, setTarefas] = useState([]);
    
    const adicinarNaLista = () => {
        setTarefas([...tarefas, descricao]);

    };

    return(
    <Principal titulo="Lista de Tarefas" voltarPara="/">
    <div>
        <input type="text" value={descricao} onChange={(e) => {
            setDescricao(e.target.value);
        }}
        />
        <BotaoCustomizado aoClicar={adicinarNaLista}> 
        + 
        </BotaoCustomizado>
        
        <ul>
            {tarefas.map((item, index) => {
                return <li key={index}>{item}</li>;
            })}
        </ul>

    </div>
    </Principal>
    );
};

export default PaginaListaTarefas;
