import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { ThemeProvider } from "@mui/material"
import { muiTheme } from '../App'
import Booking from '../Components/Bookings/Booking'
import SignUp from '../Components/Login/SignUp'
import Login from '../Components/Login/Login'
import HDetail from '../Components/Bookings/HDetail'
import ADetail from '../Components/Bookings/ADetail'
import Payment from '../Components/Payment/Payment'

const Allroutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>} ></Route>
            <Route path={"/login"} element={<Login/>} ></Route>
            <Route path={"/signup"} element={<SignUp/>} ></Route>
            <Route path={"/booking"} element={<Booking />} />
            <Route path={"/booking/:idx"} element={<HDetail />} />
            <Route path={"/adventure/:idx"} element={<ADetail />} />
            <Route path={"/payment"} element={<Payment />} />
        </Routes>
  )
}

export default Allroutes;

