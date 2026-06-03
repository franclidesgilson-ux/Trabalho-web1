import React from 'react';

function Carrinho({ carrinho, totalCreditos, podeConfirmar, onRemover, onLimpar, onConfirmar }) {
  return (
    <section className="carrinho-section">
      <h2>Cadeiras Selecionadas</h2>
      
      {carrinho.length === 0 ? (
        <p className="placeholder-msg">Nenhuma cadeira selecionada.</p>
      ) : (
        <>
          <ul className="carrinho-lista">
            {carrinho.map(c => (
              <li key={c.codigo} className="carrinho-item">
                <div className="carrinho-item-info">
                  <strong>{c.nome}</strong>
                  <small>{c.codigo} • {c.creditos} creditos</small>
                </div>
                <button className="btn-remover" onClick={() => onRemover(c.codigo)}>
                  ×
                </button>
              </li>
            ))}
          </ul>
          
          <div className="carrinho-resumo">
            <p><strong>Total de creditos:</strong> {totalCreditos}</p>
            <p><strong>N de Cadeiras:</strong> {carrinho.length}</p>
          </div>
        </>
      )}

      <div className="acoes-matricula">
        <button 
          className="btn-primary btn-confirmar" 
          onClick={onConfirmar}
          disabled={!podeConfirmar}
        >
          Confirmar Matricula
        </button>
        <button className="btn-secondary" onClick={onLimpar}>
          Limpar Tudo
        </button>
      </div>

      <div className="info-box info-warning">
        <strong>IMPORTANTE:</strong>
        <ul>
          <li>Minimo: 24 creditos por semestre</li>
          <li>Maximo: 30 creditos por semestre</li>
          <li>O sistema verifica automaticamente o seu historico</li>
        </ul>
      </div>
    </section>
  );
}

export default Carrinho;