import React, { useState } from 'react';
import { useValidation } from '../hooks/useValidation';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function ContatoPage() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    eid: '',
    assunto: '',
    mensagem: ''
  });
  
  const { erros, validarCampo, limparErros } = useValidation();
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (erros[name]) limparErros();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validos = [
      validarCampo('nome', form.nome),
      validarCampo('email', form.email),
      validarCampo('mensagem', form.mensagem)
    ].every(v => v);

    if (!validos) return;
    
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <>
      <Header />
      <NavBar />
      
      <main className="contato-main">
        <h1>Centro de Suporte</h1>

        <div className="contato-grid">
          <section className="contato-info">
            <h2>Informacoes de Contacto</h2>
            <div className="info-item">
              <strong>Email:</strong> suporte@instituicao.pt
            </div>
            <div className="info-item">
              <strong>Telefone:</strong> +258 21 000 000
            </div>
            <div className="info-item">
              <strong>Secretaria:</strong> Edificio Central, Piso 1
            </div>
            <div className="info-item">
              <strong>Horario:</strong> Seg-Sex: 08h00 - 17h00
            </div>
          </section>

          <section className="contato-form-section">
            <h2>Enviar Mensagem</h2>
            
            {enviado && (
              <div className="success-box">Mensagem enviada com sucesso!</div>
            )}
            
            <form onSubmit={handleSubmit} noValidate>
              <div className="input-group">
                <label htmlFor="nome">Nome Completo *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                />
                {erros.nome && <span className="error-msg">{erros.nome}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {erros.email && <span className="error-msg">{erros.email}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="eid-contato">EID (se aplicavel)</label>
                <input
                  type="text"
                  id="eid-contato"
                  name="eid"
                  value={form.eid}
                  onChange={handleChange}
                  maxLength={10}
                  placeholder="10 caracteres"
                />
              </div>

              <div className="input-group">
                <label htmlFor="assunto">Assunto *</label>
                <select id="assunto" name="assunto" value={form.assunto} onChange={handleChange}>
                  <option value="">-- Selecione --</option>
                  <option value="problema-matricula">Problema na Matricula</option>
                  <option value="esqueci-eid">Esqueci o EID</option>
                  <option value="erro-notas">Erro nas Notas</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="mensagem">Mensagem *</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  value={form.mensagem}
                  onChange={handleChange}
                />
                {erros.mensagem && <span className="error-msg">{erros.mensagem}</span>}
              </div>

              <button type="submit" className="btn-primary">Enviar Mensagem</button>
            </form>
          </section>
        </div>

        <section className="faq-section">
          <h2>Perguntas Frequentes</h2>
          <div className="faq-item">
            <h4>Esqueci o meu EID. O que fazer?</h4>
            <p>Dirija-se a secretaria com o seu Bilhete de Identidade.</p>
          </div>
          <div className="faq-item">
            <h4>O sistema diz que nao posso matricular uma cadeira. Porque?</h4>
            <p>O sistema verifica se ja aprovou a cadeira ou se cumpre pre-requisitos.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContatoPage;