import { useState, useCallback, useMemo } from 'react';
import { getCadeirasPorSemestre, verificarMatricula } from '../services/apiService';

const MIN_CREDITOS = 24;
const MAX_CREDITOS = 30;

export function useMatricula(eid) {
  const [carrinho, setCarrinho] = useState([]);
  const [semestre, setSemestre] = useState('');
  const [cadeiras, setCadeiras] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const totalCreditos = useMemo(() => 
    carrinho.reduce((sum, c) => sum + c.creditos, 0)
  , [carrinho]);

  const podeConfirmar = useMemo(() => 
    totalCreditos >= MIN_CREDITOS && totalCreditos <= MAX_CREDITOS
  , [totalCreditos]);

  const showToast = useCallback((mensagem, tipo = 'sucesso') => {
    setToast({ mensagem, tipo });
    setTimeout(() => setToast(null), 4000);
  }, []);

  const carregarCadeiras = useCallback(async (novoSemestre) => {
    if (!novoSemestre) {
      setCadeiras([]);
      setSemestre('');
      setCarrinho([]);
      return;
    }
    
    setLoading(true);
    setSemestre(novoSemestre);
    setCarrinho([]);
    
    const lista = getCadeirasPorSemestre(novoSemestre);
    
    const cadeirasComVerificacao = await Promise.all(
      lista.map(async (cadeira) => {
        const verificacao = await verificarMatricula(eid, cadeira.codigo);
        return { ...cadeira, verificacao };
      })
    );
    
    setCadeiras(cadeirasComVerificacao);
    setLoading(false);
  }, [eid]);

  const adicionarCadeira = useCallback((cadeira) => {
    if (carrinho.find(c => c.codigo === cadeira.codigo)) {
      showToast('Esta cadeira ja esta no carrinho', 'aviso');
      return;
    }
    
    if (totalCreditos + cadeira.creditos > MAX_CREDITOS) {
      showToast(`Limite de ${MAX_CREDITOS} creditos excedido!`, 'erro');
      return;
    }
    
    setCarrinho(prev => [...prev, cadeira]);
    showToast(`"${cadeira.nome}" adicionada!`, 'sucesso');
  }, [carrinho, totalCreditos, showToast]);

  const removerCadeira = useCallback((codigo) => {
    setCarrinho(prev => prev.filter(c => c.codigo !== codigo));
  }, []);

  const limparCarrinho = useCallback(() => {
    setCarrinho([]);
    showToast('Carrinho limpo', 'aviso');
  }, [showToast]);

  const confirmarMatricula = useCallback(() => {
    if (totalCreditos < MIN_CREDITOS) {
      showToast(`Minimo de ${MIN_CREDITOS} creditos nao atingido!`, 'erro');
      return null;
    }
    
    if (totalCreditos > MAX_CREDITOS) {
      showToast(`Maximo de ${MAX_CREDITOS} creditos excedido!`, 'erro');
      return null;
    }
    
    const dados = {
      semestre,
      cadeiras: carrinho,
      totalCreditos,
      data: new Date().toISOString()
    };
    
    sessionStorage.setItem('matricula_confirmada', JSON.stringify(dados));
    return dados;
  }, [semestre, carrinho, totalCreditos, showToast]);

  return {
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
  };
}