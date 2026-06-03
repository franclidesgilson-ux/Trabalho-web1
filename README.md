# Projeto de Matrícula (Matricula-React)

Este projeto foi gerado para o sistema de matrícula, focado em alta performance e desenvolvimento rápido utilizando ferramentas modernas de ecossistema React.

## 🛠️ Tecnologias Utilizadas

O sistema foi criado com as seguintes tecnologias principais:

- **[React](https://reactjs.org/) (v18.3.1)**: Biblioteca principal para a criação de interfaces de usuário dinâmicas.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build extremamente rápida que também atua como servidor de desenvolvimento.
- **[React Router DOM](https://reactrouter.com/) (v6.23.1)**: Utilizado para gerenciar a navegação e roteamento entre as diferentes páginas (Single Page Application).
- **Javascript (ES6+)**: Linguagem padrão para a lógica do projeto.
- **Arquitetura Organizada**: A pasta `src` possui divisões claras para `components`, `context`, `data`, `hooks`, `pages`, `services` e `styles`, seguindo as melhores práticas do mercado.

---

## ⚙️ Pré-requisitos

Para rodar este projeto localmente, você precisa ter instalado na sua máquina:

- **[Node.js](https://nodejs.org/en/)** (Versão LTS recomendada)
- **NPM** (Normalmente já vem junto com a instalação do Node.js) ou Yarn/PNPM.

---

## 🚀 Passo a Passo para Execução Local

Siga os passos abaixo para iniciar a aplicação em seu ambiente de desenvolvimento local:

1. **Abra o terminal** na pasta raiz do projeto (`meu-projectooo`).

2. **Instale as dependências**
   Execute o comando abaixo para baixar todos os pacotes necessários listados no `package.json`:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   Após a conclusão da instalação, rode o servidor do Vite com o comando:
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação no navegador**
   O terminal exibirá um endereço local (por exemplo: `http://localhost:5173/`). Copie e cole no seu navegador ou segure `Ctrl` e clique no link no terminal.

---

## 📦 Scripts Disponíveis

Dentro do diretório do projeto, você pode rodar os seguintes comandos:

- `npm run dev`: Inicia o servidor local de desenvolvimento. As alterações no código serão refletidas na mesma hora na tela (Hot Module Replacement).
- `npm run build`: Compila a aplicação para produção na pasta `dist`, minificando os arquivos e otimizando para o melhor desempenho.
- `npm run preview`: Serve a pasta `dist` gerada pelo comando `build` localmente, para você testar como a aplicação se comportará em ambiente de produção.
