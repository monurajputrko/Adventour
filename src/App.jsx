import { ThemeProvider, createTheme as createMuiTheme } from "@mui/material"
// import { createMuiTheme } from '@mui/material/styles'
import Listing from "./Components/Bookings/Booking"
import Allroutes from "./HomePage/Allroutes"
import Navbar from "./HomePage/Navbar"
import Login from "./Components/Login/Login";
import Payment from "./Components/Payment/Payment";
import SignUp from "./Components/Login/SignUp";
import { useEffect } from "react";

export const muiTheme = createMuiTheme();

export const App = () => {

  return <div className="app">
    <ThemeProvider theme={muiTheme}>
      {/* <Navbar/> */}
    </ThemeProvider>
    <Allroutes/>
    {/* <Payment /> */}
  </div>
}
