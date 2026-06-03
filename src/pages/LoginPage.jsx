import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useValidation } from '../hooks/useValidation';
import { getAluno } from '../services/apiService';

function LoginPage() {
  const [eid, setEid] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { erros, validarEID, validarSenha, limparErros } = useValidation();
  const navigate = useNavigate();

  const handleEidChange = (e) => {
    const valor = e.target.value.toUpperCase().slice(0, 10);
    setEid(valor);
    if (erros.eid) limparErros();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const valEID = validarEID(eid);
    const valSenha = validarSenha(senha);
    
    if (!valEID.valido || !valSenha) return;
    
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    
    const aluno = getAluno(valEID.valor);
    
    if (!aluno) {
      setIsLoading(false);
      return;
    }
    
    login(valEID.valor, aluno.nome);
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <h1>Instituicao Academica</h1>
          <p>Sistema de Matricula Online</p>
        </div>
        
        <form onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <label htmlFor="eid">EID do Aluno</label>
            <input
              type="text"
              id="eid"
              value={eid}
              onChange={handleEidChange}
              placeholder="Ex: 2025EID000"
              maxLength={10}
            />
            {erros.eid && <span className="error-msg">{erros.eid}</span>}
            <small>Insira os 10 caracteres do seu EID</small>
          </div>

          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Sua senha"
            />
            {erros.senha && <span className="error-msg">{erros.senha}</span>}
          </div>

          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? '...' : 'Entrar'}
          </button>
        </form>

        <div className="links">
          <a href="/contato">Esqueceu o EID?</a>
          <a href="/contato">Suporte Tecnico</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;