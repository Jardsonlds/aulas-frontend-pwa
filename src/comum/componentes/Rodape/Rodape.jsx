import './Rodape.css';

function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape_root">
      <h6>
        Copyright © {anoAtual} - Todos os direitos
        reservados - Jardson Lds.
      </h6>
    </footer>
  );
}

export default Rodape;
