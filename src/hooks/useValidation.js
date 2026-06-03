import { useState, useCallback } from 'react';

const REGRAS = {
  eid: {
    regex: /^[0-9]{4}EID[0-9]{3}$/,
    mensagem: 'Formato: 2025EID000'
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mensagem: 'Email invalido'
  },
  senha: {
    minimo: 6,
    mensagem: 'Minimo 6 caracteres'
  },
  nome: {
    minimo: 3,
    mensagem: 'Minimo 3 caracteres'
  },
  mensagem: {
    minimo: 10,
    mensagem: 'Minimo 10 caracteres'
  }
};

export function useValidation() {
  const [erros, setErros] = useState({});

  const validarCampo = useCallback((nome, valor) => {
    const regra = REGRAS[nome];
    if (!regra) return true;

    let valido = true;
    
    if (regra.regex) {
      valido = regra.regex.test(valor);
    } else if (regra.minimo) {
      valido = valor.length >= regra.minimo;
    }

    setErros(prev => ({
      ...prev,
      [nome]: valido ? '' : regra.mensagem
    }));

    return valido;
  }, []);

  const validarEID = useCallback((eid) => {
    const limpo = eid.trim().toUpperCase();
    const valido = REGRAS.eid.regex.test(limpo);
    setErros(prev => ({ ...prev, eid: valido ? '' : REGRAS.eid.mensagem }));
    return { valido, valor: limpo };
  }, []);

  const validarSenha = useCallback((senha) => {
    const valido = senha.length >= REGRAS.senha.minimo;
    setErros(prev => ({ ...prev, senha: valido ? '' : REGRAS.senha.mensagem }));
    return valido;
  }, []);

  const limparErros = useCallback(() => {
    setErros({});
  }, []);

  return {
    erros,
    validarCampo,
    validarEID,
    validarSenha,
    limparErros
  };
}