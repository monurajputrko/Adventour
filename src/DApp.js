import "./DApp.css";
import DNavbar from "./Components/Navbar/DNavbar";
import DFooter from "./Components/Footer/DFooter";
import DHomePage from "./Components/HomePage/DHomePage";
import DHoliday from "./Components/HolidayEasily/DHoliday";
import DExperience from "./Components/Experience/DExperience";
import DRating from "./Components/Rating/DRating";
function App() {
  return (
    <div className="App">
      <DNavbar />
      <DHomePage />
      <DHoliday />
      <DExperience />
      <DRating />
      <DFooter />
    </div>
  );
}

export default App;
