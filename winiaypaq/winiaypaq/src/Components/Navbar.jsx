
import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
export function Navbar(){
 

    return(
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar disableGutters sx={{ flexWrap: 'wrap',p:2 }}>
        
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            winIApaq
          </Typography>
           
           
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 2 }}>
              <Link
              variant="button"
              color="text.primary"
              to="/"
              sx={{ my: 1, mx: 1.5 }}
            >
                 <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
                 Home
          </Typography>
             
            </Link>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
             
            >
             
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 2 }}>
              <Link
              variant="button"
              color="text.primary"
              to="/history"
              sx={{ my: 1, mx: 1.5 }}
            >
                <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
                History
          </Typography>
             
            </Link>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
             
            >
             
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 2 }}>             
              <Link
                variant="button"
                color="text.primary"
                to="/state"
                sx={{ my: 1, mx: 1.5 }}
              >
                  <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
                  State
            </Typography>
                
              </Link>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
             
            >
             
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 2 }}>
              <Link
              variant="button"
              color="text.primary"
              to="/moment"
              sx={{ my: 1, mx: 1.5 }}
            >
                <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
                Moment
          </Typography>
              
            </Link>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
             
            >
             
            </Menu>
          </Box>

            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 2 }}>
              <Link
              variant="button"
              color="text.primary"
              to="/login"
              sx={{ my: 1, mx: 1.5 }}
            >              
                 <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
                Login
              </Typography>    
              
            </Link>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
             
            >
             
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
             
            >
             
            </Menu>
          </Box>
         
        </Toolbar>
      </AppBar>
      
      </Box>
  
        
    );
}
export default Navbar