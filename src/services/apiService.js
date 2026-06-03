import { BD_NOTAS_SIMULADO, CATALOGO_CADEIRAS } from '../data/mockData';

// Busca aluno por EID
export const getAluno = (eid) => {
  return BD_NOTAS_SIMULADO[eid] || null;
};

// Busca todas as cadeiras do catálogo
export const getCatalogo = () => {
  return CATALOGO_CADEIRAS;
};

// Busca cadeiras de um semestre específico
export const getCadeirasPorSemestre = (semestre) => {
  return CATALOGO_CADEIRAS[semestre] || [];
};

// Verifica se o aluno pode se matricular numa cadeira
export const verificarMatricula = (eid, codigoCadeira) => {
  const aluno = BD_NOTAS_SIMULADO[eid];
  
  if (!aluno) {
    return { 
      podeMatricular: false, 
      mensagem: 'Aluno nao encontrado',
      status: 'erro'
    };
  }

  const cadeiraAluno = aluno.cadeiras?.[codigoCadeira];

  // Se ja esta aprovado, nao pode matricular de novo
  if (cadeiraAluno?.status === 'aprovado') {
    return {
      podeMatricular: false,
      mensagem: 'Cadeira ja aprovada',
      status: 'aprovado',
      nota: cadeiraAluno.nota
    };
  }

  // Se reprovou, pode matricular novamente
  if (cadeiraAluno?.status === 'reprovado') {
    return {
      podeMatricular: true,
      mensagem: 'Recuperacao - pode matricular novamente',
      status: 'reprovado',
      nota: cadeiraAluno.nota
    };
  }

  // Se nunca cursou, verificar pre-requisitos
  if (!cadeiraAluno || cadeiraAluno.status === 'nunca_cursado') {
    const preReqs = cadeiraAluno?.pre_requisitos || [];
    const preReqsCumpridos = cadeiraAluno?.pre_requisitos_cumpridos ?? true;
    
    return {
      podeMatricular: preReqsCumpridos,
      mensagem: preReqsCumpridos ? 'Pre-requisitos cumpridos' : 'Pre-requisitos pendentes',
      status: 'nunca_cursado',
      preRequisitos: preReqs
    };
  }

  return {
    podeMatricular: true,
    mensagem: 'Pode matricular',
    status: 'disponivel'
  };
};

// Lista todos os alunos (util para debug)
export const getTodosAlunos = () => {
  return Object.entries(BD_NOTAS_SIMULADO).map(([eid, dados]) => ({
    eid,
    ...dados
  }));
};