import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from "../Components/Login/Login"

const Allroutes = () => {


    return (
       
        <Routes>
            <Route path={"/"} element={<Home/>} ></Route>
            <Route path={"/login"} element={<Login/>} ></Route>

        </Routes>
  
  )
}

export default Allroutes;

