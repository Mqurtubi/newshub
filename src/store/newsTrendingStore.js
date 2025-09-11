import { create } from "zustand";
import { getNewsTopHeadlines } from "../api/news";

const useNewsTrendingStore= create((set)=>({
    category:"",
    label:"All",
    articles:[],
    loading:true,

    setLabel:(label)=>set({label}),
    setCategory:(category)=>set({category}),

    fetchArticles: async (category)=>{
        set({loading:true})
        try {
            const res= await getNewsTopHeadlines(category)
            set({articles:res.articles,loading:false})
        } catch (error) {
            console.error(error)
            set({loading:false})
        }
    }
}))

export default useNewsTrendingStore