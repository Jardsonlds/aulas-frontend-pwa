import { useState } from "react"
import Principal from "../../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../../comum/componentes/BotaoCustomizado/BotaoCustomizado";



const BotaoContador = () => {
    const [numero, setNumero] = useState(0);

    const incrementar = () => {
        setNumero (numero + 1);
    };

    const decrementar = () => {

        setNumero (numero - 1);
    };

    return (
<Principal titulo="Botão Contador" voltarPara="/">
    <BotaoCustomizado aoClicar={decrementar}>
    Diminua Menos um!
    </BotaoCustomizado>
<h1>0 Número é: {numero}</h1>
<BotaoCustomizado aoClicar={incrementar}>
    Conte Mais um!
</BotaoCustomizado>
</Principal>
    );
}

export default BotaoContador;