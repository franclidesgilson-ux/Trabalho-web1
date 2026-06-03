// Dados simulados do "banco" de notas
export const BD_NOTAS_SIMULADO = {
  '2025EID000': {
    nome: 'Carlos Matusse',
    curso: 'Licenciatura em Informatica',
    instituicao: 'Universidade Eduardo Mondlane',
    cadeiras: {
      'MAT101': { status: 'aprovado', nota: 14, ano: 2025, semestre: '1-1' },
      'FIS101': { status: 'reprovado', nota: 8, ano: 2025, semestre: '1-1' },
      'PROG101': { status: 'aprovado', nota: 16, ano: 2025, semestre: '1-1' },
      'ING101': { status: 'aprovado', nota: 12, ano: 2025, semestre: '1-1' },
      'FIL101': { status: 'aprovado', nota: 13, ano: 2025, semestre: '1-1' },
      
      'MAT102': { status: 'nunca_cursado', pre_requisitos: ['MAT101'], pre_requisitos_cumpridos: true },
      'FIS102': { status: 'nunca_cursado', pre_requisitos: ['FIS101'], pre_requisitos_cumpridos: false },
      'PROG102': { status: 'nunca_cursado', pre_requisitos: ['PROG101'], pre_requisitos_cumpridos: true },
      'ING102': { status: 'nunca_cursado', pre_requisitos: ['ING101'], pre_requisitos_cumpridos: true },
      'ETI101': { status: 'nunca_cursado', pre_requisitos: [], pre_requisitos_cumpridos: true }
    }
  },
  '2024EID001': {
    nome: 'Ana Machava',
    curso: 'Licenciatura em Informatica',
    instituicao: 'Universidade Eduardo Mondlane',
    cadeiras: {
      'MAT101': { status: 'aprovado', nota: 18, ano: 2024, semestre: '1-1' },
      'FIS101': { status: 'aprovado', nota: 15, ano: 2024, semestre: '1-1' },
      'PROG101': { status: 'aprovado', nota: 17, ano: 2024, semestre: '1-1' },
      'ING101': { status: 'aprovado', nota: 16, ano: 2024, semestre: '1-1' },
      'FIL101': { status: 'aprovado', nota: 14, ano: 2024, semestre: '1-1' },
      
      'MAT102': { status: 'aprovado', nota: 16, ano: 2024, semestre: '1-2' },
      'FIS102': { status: 'aprovado', nota: 14, ano: 2024, semestre: '1-2' },
      'PROG102': { status: 'aprovado', nota: 19, ano: 2024, semestre: '1-2' },
      'ING102': { status: 'aprovado', nota: 15, ano: 2024, semestre: '1-2' },
      'ETI101': { status: 'aprovado', nota: 13, ano: 2024, semestre: '1-2' },
      
      'EST201': { status: 'aprovado', nota: 15, ano: 2025, semestre: '2-1' },
      'BD201': { status: 'aprovado', nota: 17, ano: 2025, semestre: '2-1' },
      'RED201': { status: 'reprovado', nota: 9, ano: 2025, semestre: '2-1' },
      'SO201': { status: 'aprovado', nota: 14, ano: 2025, semestre: '2-1' },
      
      'ALG202': { status: 'nunca_cursado', pre_requisitos: ['EST201'], pre_requisitos_cumpridos: true },
      'WEB202': { status: 'nunca_cursado', pre_requisitos: ['PROG102'], pre_requisitos_cumpridos: true },
      'RED202': { status: 'nunca_cursado', pre_requisitos: ['RED201'], pre_requisitos_cumpridos: false },
      'ENG202': { status: 'nunca_cursado', pre_requisitos: ['BD201'], pre_requisitos_cumpridos: true }
    }
  },
  '2023EID002': {
    nome: 'Pedro Chongo',
    curso: 'Licenciatura em Informatica',
    instituicao: 'Universidade Eduardo Mondlane',
    cadeiras: {
      'MAT101': { status: 'reprovado', nota: 7, ano: 2023, semestre: '1-1' },
      'FIS101': { status: 'reprovado', nota: 6, ano: 2023, semestre: '1-1' },
      'PROG101': { status: 'aprovado', nota: 12, ano: 2023, semestre: '1-1' },
      'ING101': { status: 'aprovado', nota: 10, ano: 2023, semestre: '1-1' },
      'FIL101': { status: 'aprovado', nota: 11, ano: 2023, semestre: '1-1' },
      
      'MAT101': { status: 'reprovado', nota: 8, ano: 2024, semestre: '1-1' },
      'FIS101': { status: 'reprovado', nota: 7, ano: 2024, semestre: '1-1' },
      
      'MAT102': { status: 'nunca_cursado', pre_requisitos: ['MAT101'], pre_requisitos_cumpridos: false },
      'FIS102': { status: 'nunca_cursado', pre_requisitos: ['FIS101'], pre_requisitos_cumpridos: false },
      'PROG102': { status: 'nunca_cursado', pre_requisitos: ['PROG101'], pre_requisitos_cumpridos: true },
      'ING102': { status: 'nunca_cursado', pre_requisitos: ['ING101'], pre_requisitos_cumpridos: true },
      'ETI101': { status: 'nunca_cursado', pre_requisitos: [], pre_requisitos_cumpridos: true }
    }
  },
  '2026EID003': {
    nome: 'Maria Tembe',
    curso: 'Licenciatura em Informatica',
    instituicao: 'Universidade Eduardo Mondlane',
    cadeiras: {
      'MAT101': { status: 'nunca_cursado', pre_requisitos: [], pre_requisitos_cumpridos: true },
      'FIS101': { status: 'nunca_cursado', pre_requisitos: [], pre_requisitos_cumpridos: true },
      'PROG101': { status: 'nunca_cursado', pre_requisitos: [], pre_requisitos_cumpridos: true },
      'ING101': { status: 'nunca_cursado', pre_requisitos: [], pre_requisitos_cumpridos: true },
      'FIL101': { status: 'nunca_cursado', pre_requisitos: [], pre_requisitos_cumpridos: true }
    }
  }
};

export const CATALOGO_CADEIRAS = {
  '1-1': [
    { codigo: 'MAT101', nome: 'Matematica I', creditos: 6, docente: 'Prof. Silva' },
    { codigo: 'FIS101', nome: 'Fisica I', creditos: 6, docente: 'Prof. Oliveira' },
    { codigo: 'PROG101', nome: 'Programacao I', creditos: 6, docente: 'Prof. Santos' },
    { codigo: 'ING101', nome: 'Ingles Tecnico I', creditos: 3, docente: 'Prof. Costa' },
    { codigo: 'FIL101', nome: 'Filosofia', creditos: 3, docente: 'Prof. Matusse' }
  ],
  '1-2': [
    { codigo: 'MAT102', nome: 'Matematica II', creditos: 6, docente: 'Prof. Silva' },
    { codigo: 'FIS102', nome: 'Fisica II', creditos: 6, docente: 'Prof. Oliveira' },
    { codigo: 'PROG102', nome: 'Programacao II', creditos: 6, docente: 'Prof. Santos' },
    { codigo: 'ING102', nome: 'Ingles Tecnico II', creditos: 3, docente: 'Prof. Costa' },
    { codigo: 'ETI101', nome: 'Etica Profissional', creditos: 3, docente: 'Prof. Matusse' }
  ],
  '2-1': [
    { codigo: 'EST201', nome: 'Estruturas de Dados', creditos: 6, docente: 'Prof. Santos' },
    { codigo: 'BD201', nome: 'Bases de Dados', creditos: 6, docente: 'Prof. Silva' },
    { codigo: 'RED201', nome: 'Redes I', creditos: 6, docente: 'Prof. Oliveira' },
    { codigo: 'SO201', nome: 'Sistemas Operativos', creditos: 6, docente: 'Prof. Costa' }
  ],
  '2-2': [
    { codigo: 'ALG202', nome: 'Algoritmos', creditos: 6, docente: 'Prof. Santos' },
    { codigo: 'WEB202', nome: 'Web Development', creditos: 6, docente: 'Prof. Silva' },
    { codigo: 'RED202', nome: 'Redes II', creditos: 6, docente: 'Prof. Oliveira' },
    { codigo: 'ENG202', nome: 'Engenharia de Software', creditos: 6, docente: 'Prof. Costa' }
  ],
  '4-2': [
    { codigo: 'TCC401', nome: 'Trabalho de Conclusao', creditos: 12, docente: 'Orientador' },
    { codigo: 'EST401', nome: 'Estagio Profissional', creditos: 18, docente: 'Supervisor' }
  ]
};
export const getAluno = (eid) => {
  const aluno = BD_NOTAS_SIMULADO[eid];
  if (!aluno) {
    console.warn(`Aluno com EID ${eid} não encontrado no mockData`);
  }
  return aluno || null;
};