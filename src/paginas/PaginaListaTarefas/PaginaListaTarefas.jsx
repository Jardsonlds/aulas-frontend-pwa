import { useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import { MdDelete } from "react-icons/md";

const PaginaListaTarefas = () => {
  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicinarNaLista = () => {
    setTarefas([...tarefas, descricao]);
    if (descricao) {
      tarefas.push(descricao);
      setTarefas([...tarefas]);
      setDescricao("");
    } else {
      alert("Preencha o Campo Descrição");
    }
    setDescricao("");

    document.getElementById("campoDescrição").focus();
  };
  const removerDaLista = (index) => {
    tarefas.splice(index, 1);
    setTarefas([...tarefas]);
  };

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">
      <div>
        <input
          type="text"
          value={descricao}
          onChange={(e) => {
            setDescricao(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              adicinarNaLista();
            }
          }}
        />
        <BotaoCustomizado aoClicar={adicinarNaLista}>+</BotaoCustomizado>

        <ul>
          {tarefas.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <MdDelete color="blue" onClick={() => removerDaLista(index)} />
              </li>
            );
          })}
        </ul>
      </div>
    </Principal>
  );
};

export default PaginaListaTarefas;
