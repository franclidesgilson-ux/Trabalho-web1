import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useMatricula } from '../hooks/useMatricula';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CadeiraCard from '../components/CadeiraCard';
import Carrinho from '../components/Carrinho';
import Modal from '../components/Modal';
import Toast from '../components/Toast';

function MatriculaPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const {
    carrinho,
    semestre,
    cadeiras,
    loading,
    toast,
    totalCreditos,
    podeConfirmar,
    carregarCadeiras,
    adicionarCadeira,
    removerCadeira,
    limparCarrinho,
    confirmarMatricula
  } = useMatricula(user?.eid);

  const [showModal, setShowModal] = React.useState(false);
  const [dadosConfirmacao, setDadosConfirmacao] = React.useState(null);

  const handleConfirmar = () => {
    const dados = confirmarMatricula();
    if (dados) {
      setDadosConfirmacao(dados);
      setShowModal(true);
    }
  };

  return (
    <>
      <Header />
      <NavBar />
      
      <main className="matricula-main">
        <h1>Matricula Academica</h1>

        <section className="semestre-section">
          <div className="input-group">
            <label htmlFor="semestre-select">Selecione o periodo letivo:</label>
            <select
              id="semestre-select"
              value={semestre}
              onChange={(e) => carregarCadeiras(e.target.value)}
            >
              <option value="">-- Escolha o semestre --</option>
              <option value="1-1">1 Ano - 1 Semestre</option>
              <option value="1-2">1 Ano - 2 Semestre</option>
              <option value="2-1">2 Ano - 1 Semestre</option>
              <option value="2-2">2 Ano - 2 Semestre</option>
              <option value="3-1">3 Ano - 1 Semestre</option>
              <option value="3-2">3 Ano - 2 Semestre</option>
              <option value="4-1">4 Ano - 1 Semestre</option>
              <option value="4-2">4 Ano - 2 Semestre</option>
              <option value="5-1">5 Ano - 1 Semestre</option>
              <option value="5-2">5 Ano - 2 Semestre</option>
            </select>
          </div>
        </section>

        <div className="matricula-grid">
          <section className="cadeiras-section">
            <h2>Cadeiras Disponiveis</h2>
            
            {loading && <p className="loading-msg">A consultar sistema de notas...</p>}
            
            {!semestre && (
              <p className="placeholder-msg">Selecione um semestre para ver as cadeiras disponiveis.</p>
            )}
            
            {cadeiras.length === 0 && semestre && !loading && (
              <p className="placeholder-msg">Nenhuma cadeira disponivel para este semestre.</p>
            )}
            
            {cadeiras.map(cadeira => (
              <CadeiraCard
                key={cadeira.codigo}
                cadeira={cadeira}
                noCarrinho={carrinho.some(c => c.codigo === cadeira.codigo)}
                onAdicionar={adicionarCadeira}
              />
            ))}
          </section>

          <Carrinho
            carrinho={carrinho}
            totalCreditos={totalCreditos}
            podeConfirmar={podeConfirmar}
            onRemover={removerCadeira}
            onLimpar={limparCarrinho}
            onConfirmar={handleConfirmar}
          />
        </div>
      </main>

      <Toast toast={toast} />
      
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        dados={dadosConfirmacao}
      />

      <Footer />
    </>
  );
}

export default MatriculaPage;