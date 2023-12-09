import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button
} from "@mui/material";
import Box from '@mui/system/Box';

import MenuIcon from "@mui/icons-material/Menu";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom'
import * as ROUTES from '../../Constants/routes';

const pages = ["HOME", "BOOKS", "ABOUT US", "CONTACT US"];
const pagesURL = [ROUTES.HOME, ROUTES.BOOKS, ROUTES.ABOUT_US, ROUTES.CONTACT];
const pagesIcon = [<DashboardRoundedIcon />, <AutoStoriesOutlinedIcon />, <PeopleIcon />, <PeopleIcon />];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box sx={{display:"flex" ,flexDirection:"column" , justifyContent:"space-between", height:"100%"}}>
          <List>
            {pages.map((page, index) => (
              <ListItemButton href={pagesURL[index]} key={index}>
                <ListItemIcon>
                  {pagesIcon[index]}
                </ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemButton>))
            }
          </List>
          <List>
            <ListItemButton >
              <ListItemText>
                <Button sx={{ width: "100%" }} onClick={useNavigate(ROUTES.LOG_IN)} variant="contained">Login</Button>
              </ListItemText>
            </ListItemButton>
            <ListItemButton >
              <ListItemText>
                <Button sx={{ width: "100%" }} onClick={useNavigate(ROUTES.SING_UP)} variant="contained">Sing up</Button>
              </ListItemText>
            </ListItemButton>
          </List>
          </Box>
      </Drawer>
      <IconButton sx={{ color: "black", marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon color="black" />
      </IconButton>
    </>
  );
};

export default DrawerComp;
