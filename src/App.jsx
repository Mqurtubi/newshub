import { Route, Routes} from "react-router-dom"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import Home from "./pages/home/Home"
import Entertainment from "./pages/entertainment/Entertainment"
import Technology from "./pages/technology/Technology"
import Sports from "./pages/sports/Sports"
import Business from "./pages/business/Business"
import General from "./pages/general/General"
import Health from "./pages/health/Health"
import Science from "./pages/science/Science"
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Entertainment/>} path="/entertainment"/>
        <Route element={<Technology/>} path="/technology"/>
        <Route element={<Sports/>} path="/sports"/>
        <Route element={<Business/>} path="/business"/>
        <Route element={<General/>} path="/general"/>
        <Route element={<Health/>} path="/health"/>
        <Route element={<Science/>} path="/science"/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
