import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from "../Components/Login/Login"
import Listing from '../Components/Bookings/Listing'
import { ThemeProvider, createMuiTheme } from "@mui/material"
import { muiTheme } from '../App'

const Allroutes = () => {


    return (
       
        <Routes>
            <Route path={"/"} element={<ThemeProvider theme={muiTheme}><Home/></ThemeProvider>} ></Route>
            <Route path={"/login"} element={<Login/>} ></Route>
            <Route path={"/booking"} element={<Listing />} />
        </Routes>
  
  )
}

export default Allroutes;

