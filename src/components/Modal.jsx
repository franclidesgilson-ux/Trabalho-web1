import React from 'react';
import { useNavigate } from 'react-router-dom';

function Modal({ show, onClose, dados }) {
  const navigate = useNavigate();

  if (!show) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h3>Matricula Confirmada!</h3>
        <p>Sua matricula foi registada com sucesso.</p>
        <div className="resumo-modal">
          <p><strong>Semestre:</strong> {dados?.semestre}</p>
          <p><strong>Cadeiras:</strong> {dados?.cadeiras?.length}</p>
          <p><strong>Total creditos:</strong> {dados?.totalCreditos}</p>
        </div>
        <button className="btn-primary" onClick={() => navigate('/confirmacao')}>
          Ver Comprovativo
        </button>
      </div>
    </div>
  );
}

export default Modal;