import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

const Allroutes = () => {


    return (
       
        <Routes>
            <Route path={"/"} element={<Home/>} ></Route>
        </Routes>
  
  )
}

export default Allroutes

