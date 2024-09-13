
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Menu from "./Components/LandingPage/Menu";
import Home from "./Components/LandingPage/Home"
import "./App.css";
function App(){
 return (
  <>
  <BrowserRouter>
  <Menu/>
  <Routes>
<Route  path="/" element={<><Home/> </>}/>

  </Routes>
  </BrowserRouter>
 
  </>
 )
}

export default App;