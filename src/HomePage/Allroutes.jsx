import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from "../Components/Login/Login"
import { ThemeProvider } from "@mui/material"
import { muiTheme } from '../App'
import Booking from '../Components/Bookings/Booking'
import SignUp from '../Components/Login/SignUp'

const Allroutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<ThemeProvider theme={muiTheme}><Home/></ThemeProvider>} ></Route>
            <Route path={"/login"} element={<Login/>} ></Route>
            <Route path={"/signup"} element={<SignUp/>} ></Route>
            <Route path={"/booking"} element={<Booking />} />
        </Routes>
  )
}

export default Allroutes;

