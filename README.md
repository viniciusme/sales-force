# Introdução ao Força de Vendas React App

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

## Links Referente ao Projeto

- Link do Repositório no GitHub: (https://github.com/viniciusme/sales-force).
- Link do Projeto na Vercel: (https://sales-force.vercel.app/).

### O que é este projeto?

Este projeto é uma Web App desenvolvida com foco no estudo acadêmico, foi desenvolvido apenas o Front-end e nele contem tudo que foi visto em aula e todas as tecnologias utilizadas.

#### Tecnologias Utilizadas?

- React.js
- Typescript
- Material UI
- React Router Dom
- React Hook Form
- React Icons
- React Toastify
- Styled Components
- Yup
- Axios
- Jest

##### Funcionalidades

- Cadastro de usuários "com validação e mensagem ao usuário através do Toastify de cadastro realizado com sucesso".
- Login de usuários com validação.
- Recuperar senha "Com validação e mensagem ao usuário através do Toastify de recuperação de senha"
- Logout "Ao efetuar logout através do icone de Logout, o token será deletado e o usuário encaminhando para a tela de login"
- Detalhes do Usuário "Ao clicar no icone de configuração do usuário, será renderizado um component com dados do usuário logado."
- Menu de Navegação "É para mostrar a funcionalidade do Outlet"
- Context API "Para repassar os dados do usuário e mostrar no detalhes do perfil de usuário"
- useState "Para persistência de dados dos formulários"
- Hooks
- Components
- Routes "Rotas publicas e rotas privadas"
- Armazenamento de Toke no LocalStorage"
- Pages
- Types
- Tests - "Realizado teste no component formSign.tsx"
- Personalização e estilos através do styled component

###### Instalação

1. Clone o repositório: `git clone https://github.com/viniciusme/sales-force.git`
2. Entre no diretório do projeto: `cd sales-force`
3. Instale as dependências do servidor: `npm install`

###### USO

1. Executa o aplicativo no modo de desenvolvimento: `npm start`

Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

###### Como utilizar este projeto?

Para entrar no sistema será necessário logar com e-mail e senha, para este processo poderá utilizar qualquer e-mail e senha. Ao efetuar o login será realizado algumas validações e caso não esteja dentro dos parâmetros de validação será apresentado uma mensagem para o usuário.

Por não conter uma API Backend, foi utilizado dados fake para este projeto. Recomendo a utilização dos dados abaixo para login:

- E-mail: viniciusdeveloper@gmail.com
- Senha: 12345678

###### Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
