import { createBrowserRouter } from 'react-router-dom';

import Exception from '../components/shared/Exception';
import Login from '../pages/login';
import Cadastro from '../pages/cadastrar';
import RecuperarSenha from '../pages/recuperar-senha';
import Layout from '../layout/layout';
import Schedule from '../components/schedule/Schedule';
import Dashboard from '../pages/dashboard';
import PartnerCard from '../components/partnerCard/PartnerCard';
import OsRelease from '../components/osRelease/OsRelease';
import CommercialPartner from '../components/commercialPartner/CommercialPartner';
import SalesPortal from '../components/salesPortal/SalesPortal';

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
        element: <Schedule />,
      },
      {
        path: 'ficha-de-parceiro',
        element: <PartnerCard />,
      },
      {
        path: 'lancamento-de-os',
        element: <OsRelease />,
      },
      {
        path: 'parceiro-comercial',
        element: <CommercialPartner />,
      },
      {
        path: 'portal-de-vendas',
        element: <SalesPortal />,
      },
    ],
  },
  {
    path: 'access',
  },
];

export default createBrowserRouter(routes);
