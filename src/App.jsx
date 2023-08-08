import Listing from "./Components/Bookings/Listing"
import Allroutes from "./HomePage/Allroutes"
import Navbar from "./HomePage/Navbar"

export const App = () => {
  return <div className="app">
    {/* <Listing /> */}
      <Navbar/>
      <Allroutes/>
  </div>
}
