import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Booking from '../Bookings/Booking'
import SignUp from '../Login/SignUp'
import Login from '../Login/Login'
import HDetail from '../Bookings/HDetail'
import ADetail from '../Bookings/ADetail'
import Payment from '../Payment/Payment'
import Main from './Main'
import Error from '../Utils/Error'

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
            <Route path={'*'} element={<Error />} />
        </Routes>
  )
}

export default Allroutes;


