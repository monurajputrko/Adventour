import "./App.css";
import DNavbar from "./Components/Navbar/DNavbar";
import DFooter from "./Components/Footer/DFooter";
import DHomePage from "./Components/HomePage/DHomePage";
import DHoliday from "./Components/HolidayEasily/DHoliday";
import DExperience from "./Components/Experience/DExperience";
import DRating from "./Components/Rating/DRating";
import { Route, Routes  } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <DNavbar />
      <DHomePage />
      <DHoliday />
      <DExperience />
      <DRating />
     <DFooter/>


    
    <Routes>
        <Route path="/footer" element={<DFooter/>} />
      </Routes>
    
     
    </div>
  );
}

export default App;
