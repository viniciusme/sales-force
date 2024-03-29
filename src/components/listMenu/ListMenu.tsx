import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';

const ListMenu = () => {
  return (
    <nav aria-label='main mailbox folders'>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Link to='dashboard'>
                <DashboardIcon />
              </Link>
            </ListItemIcon>
            <Link to='dashboard'>
              <ListItemText primary='Dashboard' />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Link to='agenda'>
                <CalendarMonthIcon />
              </Link>
            </ListItemIcon>
            <Link to='agenda'>
              <ListItemText primary='Agenda' />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Link to='ficha-de-parceiro'>
                <InboxIcon />
              </Link>
            </ListItemIcon>
            <Link to='ficha-de-parceiro'>
              <ListItemText primary='Ficha de Parceiro' />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Link to='lancamento-de-os'>
                <InboxIcon />
              </Link>
            </ListItemIcon>
            <Link to='lancamento-de-os'>
              <ListItemText primary='Lançamento de O.S' />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Link to='parceiro-comercial'>
                <InboxIcon />
              </Link>
            </ListItemIcon>
            <Link to='parceiro-comercial'>
              <ListItemText primary='Parceiro Comercial' />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Link to='portal-de-vendas'>
                <InboxIcon />
              </Link>
            </ListItemIcon>
            <Link to='portal-de-vendas'>
              <ListItemText primary='Portal de Vendas' />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  );
};

export default ListMenu;
