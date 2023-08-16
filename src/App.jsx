import { ThemeProvider, createTheme as createMuiTheme } from "@mui/material"
import Allroutes from "./HomePage/Allroutes"
// import ScrollToTop from "react-scroll-to-top";
import backtoTop from "./images/up-arrow.png"
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
    <Allroutes />
    {/* <ScrollToTop smooth top="20" component={<img src={backtoTop} style={{mixBlendMode:'multiply'}} alt='btt'></img>}/> */}
  </div>
}

