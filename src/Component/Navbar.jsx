import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, overflow:"none"}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="main" sx={{ flexGrow: 1}}>
           "Hello" I'M Praphull Chandra(CSE)
           <Typography variant="h6" component="main" sx={{ flexGrow: 1}}>
           "Web Developer/Software Engnineer" 
          </Typography>
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}