import React from 'react';

function CadeiraCard({ cadeira, noCarrinho, onAdicionar }) {
  const { codigo, nome, creditos, docente, verificacao } = cadeira;
  const { podeMatricular, motivo, mensagem } = verificacao;

  const getStatusClass = () => {
    if (noCarrinho) return 'adicionada';
    if (!podeMatricular) {
      if (motivo === 'ja_aprovado') return 'aprovada';
      return 'bloqueada';
    }
    if (motivo === 'recuperacao') return 'pendente';
    return 'disponivel';
  };

  const getBadgeClass = () => {
    if (motivo === 'ja_aprovado') return 'status-aprovado';
    if (motivo === 'sem_pre_requisitos') return 'status-bloqueado';
    if (motivo === 'recuperacao') return 'status-reprovado';
    return 'status-novo';
  };

  const statusClass = getStatusClass();

  return (
    <div className={`cadeira-card ${statusClass}`} data-codigo={codigo}>
      <h3>{nome}</h3>
      <div className="cadeira-info">
        <span>{codigo}</span>
        <span>{creditos} creditos</span>
        <span>{docente}</span>
      </div>
      <span className={`status-badge ${getBadgeClass()}`}>
        {mensagem}
      </span>
      {podeMatricular && !noCarrinho && (
        <button className="btn-add" onClick={() => onAdicionar(cadeira)}>
          Adicionar
        </button>
      )}
    </div>
  );
}

export default CadeiraCard;