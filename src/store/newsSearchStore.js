import { create } from "zustand";
import { getNewsSearch } from "../api/news";

const newsSearchStore = create((set)=>({
    
    articleSearch:[],
    loadingSearch:true,

    
    fetchArticleSearch:async (query)=>{
        set({loadingSearch:true})
        try {
            const res = await getNewsSearch(query)
            set({articleSearch:res.data,loadingSearch:false})
        } catch (error) {
            console.error(error)
            set({loadingSearch:false})
        }
    }
}))
export default newsSearchStore