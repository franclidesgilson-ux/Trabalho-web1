import React from 'react';

function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div className={`toast ${toast.tipo}`}>
      {toast.mensagem}
    </div>
  );
}

export default Toast;