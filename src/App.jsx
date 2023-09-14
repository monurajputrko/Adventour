import ScrollToTop from "react-scroll-to-top";
import backtoTop from "./images/up-arrow.png"
import Allroutes from "./Components//HomePage/Allroutes"
import Navbar from "./Components/Utils/Navbar";
export const App = () => {

  return <div className="app">
    <Navbar />
    <Allroutes/>
    <ScrollToTop smooth={true} top="20" style={{backgroundColor:'transparent',boxShadow:'none'}} component={<img src={backtoTop} style={{mixBlendMode:'multiply'}} alt='btt'></img>}/>
  </div>
}

