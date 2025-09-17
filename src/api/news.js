import axios from "axios";
const API_KEY= import.meta.env.VITE_OWM_KEY;

const getNews= async (category="",sort="published_desc")=>{
    try{
        const endPoint="http://api.mediastack.com/v1/news"
        const res=await axios.get(endPoint,{
            params:{
                access_key:API_KEY,
                categories:category || undefined,
                languages:"en",
                sort:sort
            }
        })
        return res.data
    }catch(error){
        console.log(error.message)
    }
}

const getNewsSearch= async (keywords="")=>{
    try {
        const endPoint="http://api.mediastack.com/v1/news"
        const res=await axios.get(endPoint,{
            params:{
                access_key:API_KEY,
                languages:"en",
                keywords:keywords
            }
        })
        return res.data
    } catch (error) {
        console.log(error.message)
    }
}

const getNewsTopHeadlines= async (category="")=>{
    try{
        const endPoint="http://api.mediastack.com/v1/news"
        const res=await axios.get(endPoint,{
            params:{
                access_key:API_KEY,
                sort:"popularity",
                categories:category,
                languages:"en"
            }
        })
        return res.data
    }catch(error){
        console.log(error.message)
    }
}

export{getNews, getNewsTopHeadlines, getNewsSearch}