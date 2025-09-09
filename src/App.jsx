import { Route, Routes} from "react-router-dom"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import Home from "./pages/home/Home"
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
