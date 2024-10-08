const BotaoCustomizado = (props) => {
  return <button onClick={props.aoClicar}>{props.children}</button>;
};

export default BotaoCustomizado;
