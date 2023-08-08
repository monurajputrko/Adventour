import { ThemeProvider, createMuiTheme } from "@mui/material"
import Listing from "./Components/Bookings/Listing"
import Allroutes from "./HomePage/Allroutes"
import Navbar from "./HomePage/Navbar"

export const muiTheme = createMuiTheme();

export const App = () => {
  return <div className="app">
    <ThemeProvider theme={muiTheme}>
      <Navbar/>
    </ThemeProvider>
    <Allroutes/>
  </div>
}
