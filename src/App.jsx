import { useEffect } from "react"
import { getNews, getNewsTopHeadlines } from "./api/news"
import { Route, Routes} from "react-router-dom"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
function App() {
  useEffect(()=>{
    getNewsTopHeadlines().then(res => console.log(res))
  },[])
  return (
    <div>
      <NavBar/>
      <Routes>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
