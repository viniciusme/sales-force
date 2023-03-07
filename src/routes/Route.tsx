import { createBrowserRouter } from 'react-router-dom';

import Cadastro from '../pages/cadastrar';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import RecuperarSenha from '../pages/recuperar-senha';

const routes = [
  {
    path: '',
    element: <Login />,
  },
  {
    path: 'cadastrar',
    element: <Cadastro />,
  },
  {
    path: 'recuperar-senha',
    element: <RecuperarSenha />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
];

export default createBrowserRouter(routes);
