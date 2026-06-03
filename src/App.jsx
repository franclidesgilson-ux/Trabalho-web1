import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import MatriculaPage from './pages/MatriculaPage';
import ConfirmacaoPage from './pages/ConfirmacaoPage';
import NotasPage from './pages/NotasPage';
import ContatoPage from './pages/ContatoPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/contato" element={<ContatoPage />} />
      
      {/* Rotas protegidas */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/matricula" element={<MatriculaPage />} />
        <Route path="/confirmacao" element={<ConfirmacaoPage />} />
        <Route path="/notas" element={<NotasPage />} />
      </Route>
    </Routes>
  );
}

export default App;