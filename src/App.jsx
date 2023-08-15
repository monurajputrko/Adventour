import { ThemeProvider, createTheme as createMuiTheme } from "@mui/material"
// import { createMuiTheme } from '@mui/material/styles'
import Listing from "./Components/Bookings/Booking"
import Allroutes from "./HomePage/Allroutes"
import Navbar from "./HomePage/Navbar"
import Payment from "./Components/Payment/Payment";
import { useEffect } from "react";
import DNavbar from "./HomeComp/Navbar/DNavbar";
import DHomePage from "./HomeComp/HomePage/DHomePage" 
import DHoliday from "./HomeComp/HolidayEasily/DHoliday"
import DExperience from "./HomeComp/Experience/DExperience"
import DRating from "./HomeComp/Rating/DRating"
import DFooter from "./HomeComp/Footer/DFooter"

export const muiTheme = createMuiTheme();

export const App = () => {

  return <div className="app">
    <ThemeProvider theme={muiTheme}>
      {/* <Navbar/> */}
      {/* <DNavbar/>
      <DHomePage />
      <DHoliday />
      <DExperience />
      <DRating />
     <DFooter/> */}



    </ThemeProvider>
    <Allroutes/>
    {/* <Payment /> */}
  </div>
}

