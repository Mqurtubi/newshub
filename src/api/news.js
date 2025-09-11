import axios from "axios";
const API_KEY= import.meta.env.VITE_OWM_KEY;

const getNews= async ()=>{
    try {
        const endPoint="https://newsapi.org/v2/everything";
        const res=await axios.get(endPoint,{
            params:{
                sources:"cnn",
                apikey:API_KEY,
            }
        })
        return res.data
    } catch (error) {
        console.log(error.message)
    }
}

const getNewsTopHeadlines= async (category="")=>{
    try{
        const endPoint="https://newsapi.org/v2/top-headlines"
        const res=await axios.get(endPoint,{
            params:{
                country:"us",
                apikey:API_KEY,
                category:category
            }
        })
        return res.data
    }catch(error){
        console.log(error.message)
    }
}

export{getNews, getNewsTopHeadlines}