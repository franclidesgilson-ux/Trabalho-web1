import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function DashboardPage() {
  const navigate = useNavigate();

  const cards = [
    {
      titulo: 'Nova Matricula',
      desc: 'Inscreva-se nas cadeiras do proximo semestre',
      status: 'Disponivel',
      statusClass: 'status-active',
      path: '/matricula'
    },
    {
      titulo: 'Minhas Cadeiras',
      desc: 'Visualize as cadeiras em que esta matriculado',
      status: 'Em breve',
      statusClass: '',
      path: null
    },
    {
      titulo: 'Historico',
      desc: 'Consulte seu historico academico completo',
      status: 'Em breve',
      statusClass: '',
      path: null
    },
    {
      titulo: 'Sistema de Notas',
      desc: 'Aceda ao portal de notas e avaliacoes',
      status: 'Interno',
      statusClass: 'status-external',
      path: '/notas'
    }
  ];

  return (
    <>
      <Header />
      <NavBar />
      
      <main className="dashboard-main">
        <section className="welcome-section">
          <h1>Bem-vindo!</h1>
          <p>Selecione uma opcao abaixo para continuar.</p>
        </section>

        <div className="dashboard-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className="dash-card"
              onClick={() => card.path && navigate(card.path)}
              style={{ cursor: card.path ? 'pointer' : 'default' }}
            >
              <h3>{card.titulo}</h3>
              <p>{card.desc}</p>
              <span className={`card-status ${card.statusClass}`}>
                {card.status}
              </span>
            </div>
          ))}
        </div>

        <section className="info-section">
          <h3>Periodo de Matricula Atual</h3>
          <div className="info-box">
            <p><strong>2025/2026 - 2 Semestre</strong></p>
            <p>De <strong>15 de Janeiro</strong> a <strong>28 de Fevereiro</strong></p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '65%' }}></div>
            </div>
            <small>Faltam 12 dias para o encerramento</small>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default DashboardPage;