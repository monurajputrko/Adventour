import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./DNavbar.css";
import DFooter from "../Footer/DFooter";
import { Tooltip } from "@chakra-ui/tooltip";
import { Button } from "@chakra-ui/button";
import { Box, Divider, Heading, VStack } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from "@chakra-ui/menu";
import { useDispatch, useSelector } from "react-redux";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/Login/SignUp";
import { Avatar } from "@chakra-ui/avatar";
import { setLogout } from "../../redux/LoginReducer/action";
import { Spinner } from "@chakra-ui/spinner";
import { Show } from "@chakra-ui/media-query";

const DNavbar = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false)
  const handleFooter = () => {
    window.scrollTo(0, document.body.scrollHeight)
  }
  return (<>
    <div className="navbar" style={{ paddingTop: "10px" }}>
      <div className="NavBox"></div>
      <nav className="NavbarItems">
        <img
          style={{ width: '70px', height: '50px', marginTop: '-10px', marginRight: "-70px" }}
          src="https://adventour-app.vercel.app/static/media/logo.c4d46c4063175340fdd8.png"
          alt='icon'
        />
        <h1 className="logo" style={{ color: "black" }}>Adventour</h1>

        <ul>
          <li className="navItem" style={{ textDecoration: 'none' }}><NavLink to='/adventure/1'>Explore</NavLink></li>

          <li className="navItem" style={{ textDecoration: 'none' }}><NavLink to='/booking/ahemdabad'>Booking</NavLink></li>

          <li className="navItem" style={{ textDecoration: 'none' }}><a onClick={handleFooter}>About Us</a></li>
          <Tooltip closeDelay={800} pointerEvents={"all"} bg={'transparent'} label={<MenuC setShowLogin={setShowLogin} setShowSpinner={setShowSpinner} />} placement='bottom'>
            <Box>
              <Show breakpoint='(min-width: 800px)'>
                <Button style={{ marginTop: -"5px", padding: "5px 10px", textDecoration: 'none', height: "40px", fontSize: "16px", color: '#ebebeb' }} class="nav-Btn" >Get Started</Button>
              </Show>
              <Show breakpoint='(max-width: 800px)'>
                <span>☰</span>
              </Show>
            </Box>
          </Tooltip>
        </ul>
      </nav>
    </div>
    {showLogin && <Login setShowLogin={setShowLogin} setShowSignup={setShowSignup} />}
    {showSignup && <SignUp setShowLogin={setShowLogin} setShowSignup={setShowSignup} />}
    {showSpinner && <Spinner position={'absolute'} backdropBlur={'2xl'} top='55vh' right='110vh' thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />}
  </>
  );
};

function MenuC({ setShowLogin, setShowSpinner }) {
  const dispatch = useDispatch()
  const logged = useSelector(store => store.login.logged)
  const user = useSelector(store => store.login.user)
  const handleLogin = () => {
    setShowLogin(true)
  }
  const logout = () => {
    setShowSpinner(true)
    setTimeout(() => {
      dispatch(setLogout())
      setShowSpinner(false)
    }, 1000)
  }
  return <Box color='black' textAlign={'left'}>
    <VStack title='Profile'>
      <Button colorScheme={'linkedin'} onClick={handleLogin}>{logged ? <div><Avatar name={user?.displayName} size='xs' src={user?.photoURL} /> {user?.displayName}</div> : "Login"}</Button>
      {logged &&
        <Button colorScheme={'red'} onClick={logout}>Logout</Button>}
      <NavLink to='/payment'><Button colorScheme={'linkedin'} >Bookings</Button></NavLink>
    </VStack>
  </Box>
}
export default DNavbar;
