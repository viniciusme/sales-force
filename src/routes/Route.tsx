import { createBrowserRouter } from 'react-router-dom';

import Exception from '../components/shared/Exception';
import Login from '../pages/login';
import Cadastro from '../pages/cadastrar';
import RecuperarSenha from '../pages/recuperar-senha';
import Schedule from '../components/schedule/Schedule';
import Dashboard from '../pages/dashboard';
import PartnerCard from '../components/partnerCard/PartnerCard';
import OsRelease from '../components/osRelease/OsRelease';
import CommercialPartner from '../components/commercialPartner/CommercialPartner';
import SalesPortal from '../components/salesPortal/SalesPortal';
import { RequireAuth } from '../contexts/Auth/RequireAuth';
import Private from '../pages/private';
import DataPerfil from '../components/dataPerfil/DataPerfil';

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
    path: 'private',
    element: (
      <RequireAuth>
        <Private />
      </RequireAuth>
    ),
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
      {
        path: 'perfil',
        element: <DataPerfil />,
      },
    ],
  },
  {
    path: 'access',
  },
];

export default createBrowserRouter(routes);
