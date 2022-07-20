import React, { useContext } from 'react';

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

import { UIContext } from '../../context/ui';

const menuItems = ['red', 'blue', 'light', 'green'];

export const Sidebar = () => {
  const { sideMenu, dispatch } = useContext(UIContext);
  return (
    <Drawer
      anchor="left"
      open={sideMenu}
      onClose={() => dispatch({ type: 'CLOSE' })}
    >
      <Box sx={{ padding: '10px 20px' }}>
        <Typography variant="h4">Menu</Typography>
      </Box>

      <Box sx={{ padding: '10px 20px' }}>
        <List>
          {menuItems.map((e, idx) => (
            <ListItem key={idx}>
              <ListItemText>{e}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider />

      <Box sx={{ padding: '10px 20px' }}>
        <List>
          {menuItems.map((e, idx) => (
            <ListItem key={idx}>
              <ListItemText>{e}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
