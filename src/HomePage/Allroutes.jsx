import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from "@mui/material"
import { muiTheme } from '../App'
import Booking from '../Components/Bookings/Booking'
import SignUp from '../Components/Login/SignUp'
import Login from '../Components/Login/Login'
import HDetail from '../Components/Bookings/HDetail'
import ADetail from '../Components/Bookings/ADetail'
import Payment from '../Components/Payment/Payment'
import Main from './Main'

const Allroutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Main/>} ></Route>
            <Route path={"/login"} element={<Login/>} ></Route>
            <Route path={"/signup"} element={<SignUp/>} ></Route>
            <Route path={"/booking/:city"} element={<Booking />} />
            <Route path={"/booking/:city/:idx"} element={<HDetail />} />
            <Route path={"/adventure/:idx"} element={<ADetail />} />
            <Route path={"/payment"} element={<Payment />} />
        </Routes>
  )
}

export default Allroutes;

