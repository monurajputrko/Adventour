import { ThemeProvider, createTheme as createMuiTheme } from "@mui/material"
// import { createMuiTheme } from '@mui/material/styles'
import Listing from "./Components/Bookings/Listing"
import Allroutes from "./HomePage/Allroutes"
import Navbar from "./HomePage/Navbar"
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import { useEffect } from "react";

export const muiTheme = createMuiTheme();

export const App = () => {

  return <div className="app">
    <ThemeProvider theme={muiTheme}>
      {/* <Navbar/> */}
    </ThemeProvider>
    {/* <Login/> */}
    {/* <SignUp/> */}
    <Allroutes/>
  </div>
}
