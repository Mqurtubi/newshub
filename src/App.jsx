import { useEffect } from "react"
import { getNews, getNewsTopHeadlines } from "./api/news"
function App() {
  useEffect(()=>{
    getNewsTopHeadlines().then(res => console.log(res))
  },[])
  return (
    <>
      
    </>
  )
}

export default App
