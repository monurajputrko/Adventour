import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }
  

  return (
    <AppBar position="static">
      <Container maxWidth="xl" style={{ backgroundColor: "black"  }}  >
       
        <Toolbar disableGutters>
       
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
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
            Adventour
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <img style={{width: "100px" }} src="data:image/png;base64,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" alt="" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Adeventour
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton> */}
               <Button onClick={handleOpenUserMenu} style={{ backgroundColor: "blue" }} variant="contained" >Get started</Button>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar;

