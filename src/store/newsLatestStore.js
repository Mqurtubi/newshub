import { create } from "zustand";
import { getNews } from "../api/news";

const useNewsLatestStore= create((set)=>({
    categoryLatest:"",
    articleLatest:[],
    loadingLatest:true,

    setCategoryLatest:(categoryLatest)=>set({categoryLatest}),
    fetchArticlesLatest:async (category)=>{
        set({loadingLatest:true})
        try {
            const res= await getNews(category)
            set({articleLatest:res.data,loadingLatest:false})
        } catch (error) {
            console.error(error)
            set({loadingLatest:false})
        }
    }
}))

export default useNewsLatestStore