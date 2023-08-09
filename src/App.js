import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import Holiday from "./Components/HolidayEasily/Holiday";
import Experience from "./Components/Experience/Experience";
import Rating from "./Components/Rating/Rating";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage/>
      <Holiday/>
      <Experience/>
      <Rating/>
      <Footer/>
    </div>
  );
}

export default App;
