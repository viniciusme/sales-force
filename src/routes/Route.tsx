import { createBrowserRouter } from 'react-router-dom';

import Exception from '../components/shared/Exception';
import Login from '../pages/login';
import Cadastro from '../pages/cadastrar';
import RecuperarSenha from '../pages/recuperar-senha';
import Layout from '../layout/layout';
import Agenda from '../components/agenda/Agenda';

import Dashboard from '../pages/dashboard';

const routes = [
  {
    errorElement: <Exception />,
  },
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
    path: 'layout',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'agenda',
        element: <Agenda />,
      },
    ],
  },
  {
    path: 'access',
  },
];

export default createBrowserRouter(routes);
