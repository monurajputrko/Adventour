import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { ThemeProvider } from "@mui/material"
import { muiTheme } from '../App'
import Booking from '../Components/Bookings/Booking'
import ADetail from '../Components/Bookings/ADetail'
import HDetail from '../Components/Bookings/HDetail'
const Allroutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<ThemeProvider theme={muiTheme}><Home/></ThemeProvider>} ></Route>
            {/* <Route path={"/login"} element={<Login/>} ></Route> */}
            <Route path={"/booking"} element={<Booking />} />
            <Route path={"/booking/:idx"} element={<HDetail />} />
            <Route path={"/adventure/:idx"} element={<ADetail />} />
        </Routes>
  )
}

export default Allroutes;

