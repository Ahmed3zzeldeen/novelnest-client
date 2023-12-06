import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import * as Routers from '../../Constants/routes';

export const mainListItems = (
  <>

    <ListItemButton href={Routers.DASHBOARD_HOME}>
      <ListItemIcon>
        <DashboardRoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    
    <ListItemButton  href={Routers.DASHBOARD_BOOKS}>    
      <ListItemIcon>
        <AutoStoriesOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Books" />
    </ListItemButton>

    <ListItemButton href={Routers.DASHBOARD_ORDERS}>
      <ListItemIcon>
        <ShoppingCartRoundedIcon  />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    
    <ListItemButton href={Routers.DASHBOARD_USERS}>
      <ListItemIcon>
      <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
  </>
);