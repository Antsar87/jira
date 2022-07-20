import { useContext } from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { UIContext } from '../../context/ui';

export const Navbar = () => {
  const { dispatch } = useContext(UIContext);

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          onClick={() => {
            dispatch({ type: 'OPEN' });
          }}
        >
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
