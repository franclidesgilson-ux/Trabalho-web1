import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getAluno, CATALOGO_CADEIRAS } from '../data/mockData';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function NotasPage() {
  const { user } = useAuth();
  const [aluno, setAluno] = useState(null);

  useEffect(() => {
    if (user?.eid) {
      setAluno(getAluno(user.eid));
    }
  }, [user]);

  const getNomeCadeira = (codigo) => {
    for (const sem in CATALOGO_CADEIRAS) {
      const found = CATALOGO_CADEIRAS[sem].find(c => c.codigo === codigo);
      if (found) return found.nome;
    }
    return codigo;
  };

  const agruparPorSemestre = () => {
    if (!aluno?.cadeiras) return {};
    
    const grupos = {};
    Object.entries(aluno.cadeiras).forEach(([codigo, dados]) => {
      const sem = dados.semestre || 'N/A';
      if (!grupos[sem]) grupos[sem] = [];
      grupos[sem].push({ codigo, ...dados });
    });
    return grupos;
  };

  const porSemestre = agruparPorSemestre();

  return (
    <>
      <Header />
      <NavBar />
      
      <main className="notas-main">
        <h1>Historico de Notas</h1>
        
        <div className="info-box">
          <p><strong>Aluno:</strong> {aluno?.nome || '---'}</p>
          <p><strong>EID:</strong> {user?.eid}</p>
          <p><strong>Curso:</strong> {aluno?.curso || '---'}</p>
        </div>

        {Object.entries(porSemestre).sort().map(([semestre, cadeiras]) => {
          const [ano, s] = semestre.split('-');
          return (
            <div key={semestre}>
              <div className="semestre-header">
                {semestre === 'N/A' ? 'Sem semestre definido' : `${ano} Ano - ${s} Semestre`}
              </div>
              
              <table className="tabela-notas">
                <thead>
                  <tr>
                    <th>Codigo</th>
                    <th>Cadeira</th>
                    <th>Status</th>
                    <th>Nota</th>
                    <th>Ano</th>
                  </tr>
                </thead>
                <tbody>
                  {cadeiras.map(c => (
                    <tr key={c.codigo}>
                      <td>{c.codigo}</td>
                      <td>{getNomeCadeira(c.codigo)}</td>
                      <td className={c.status === 'aprovado' ? 'nota-aprovado' : c.status === 'reprovado' ? 'nota-reprovado' : ''}>
                        {c.status.toUpperCase()}
                      </td>
                      <td className={c.status === 'aprovado' ? 'nota-aprovado' : c.status === 'reprovado' ? 'nota-reprovado' : ''}>
                        {c.nota || '-'}
                      </td>
                      <td>{c.ano || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </main>

      <Footer />
    </>
  );
}

export default NotasPage;