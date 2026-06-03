import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function ConfirmacaoPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const saved = sessionStorage.getItem('matricula_confirmada');
    if (saved) {
      setDados(JSON.parse(saved));
    }
  }, []);

  if (!dados) {
    return (
      <>
        <Header />
        <NavBar />
        <main className="confirmacao-main">
          <p>Nenhuma matricula encontrada.</p>
          <button className="btn-primary" onClick={() => navigate('/matricula')}>
            Ir para Matricula
          </button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <NavBar />
      
      <main className="confirmacao-main">
        <div className="confirmacao-card">
          <div className="success-icon">✅</div>
          <h1>Matricula Realizada com Sucesso!</h1>
          <p className="confirmacao-data">
            Data: {new Date().toLocaleString('pt-PT')}
          </p>
          
          <div className="comprovativo-box">
            <h3>Comprovativo de Matricula</h3>
            <div className="comprovativo-dados">
              <p><strong>Aluno:</strong> {user?.nome}</p>
              <p><strong>EID:</strong> {user?.eid}</p>
              <p><strong>Periodo:</strong> {dados.semestre}</p>
              <p><strong>N de Cadeiras:</strong> {dados.cadeiras?.length}</p>
              <p><strong>Total creditos:</strong> {dados.totalCreditos}</p>
            </div>
            
            <table className="tabela-matricula">
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Cadeira</th>
                  <th>creditos</th>
                </tr>
              </thead>
              <tbody>
                {dados.cadeiras?.map(c => (
                  <tr key={c.codigo}>
                    <td>{c.codigo}</td>
                    <td>{c.nome}</td>
                    <td>{c.creditos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="acoes-confirmacao">
            <button className="btn-primary" onClick={() => window.print()}>
              Imprimir
            </button>
            <button className="btn-secondary" onClick={() => navigate('/dashboard')}>
              Voltar ao Dashboard
            </button>
            <button className="btn-secondary" onClick={() => navigate('/matricula')}>
              Nova Matricula
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ConfirmacaoPage;