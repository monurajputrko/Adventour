import React from "react";
import { NavLink } from "react-router-dom";
import "./DNavbar.css";
import DFooter from "../Footer/DFooter";
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import BasicMenu from "./BasicMenu";
 

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const DNavbar = () => {

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
  };
  
  return (

    // <AppBar position="static">
    // <Container maxWidth="xl">
    //   <Toolbar disableGutters>

    <div className="navbar">
      <div className="NavBox"></div>
       <nav className="NavbarItems">
        <img
          style={{ paddingTop: "15px", marginRight: "-70px" }}
          src="https://adventour-app.vercel.app/static/media/logo.c4d46c4063175340fdd8.png"
          width={75}
          height={40}
        />
        <h1 className="logo" style={{color:"black"}}>Adventour.</h1>

        <ul>
          <li className="navItem">Services</li>

          <li className="navItem">Categories</li>

          <li className="navItem">About Us</li>
          {/* <button className="nav-Btn">Get Started</button> */}
          
          {/* <span>☰</span> */}
        </ul>
      
       {/* <BasicMenu /> */}

      </nav>



    </div>




  

 

  
   

    


    


  );
};

export default DNavbar;
