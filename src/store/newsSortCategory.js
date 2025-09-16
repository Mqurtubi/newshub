import { create } from "zustand";
import { getNews } from "../api/news";

const newsSortStore=create((set)=>({
    sort:"published_desc",
    labelSort:"Latest",
    articleSort:[],
    loadingSort:true,

    setLabelSort:(labelSort)=>set({labelSort}),
    setSort:(sort)=>set({sort}),

    fetchArticleSort: async (category,sort)=>{
        set({loadingSort:true})
        try {
            const res= await getNews(category,sort)
            set({articleSort:res.data,loadingSort:false})
        } catch (error) {
            console.error(error)
            set({loadingLatest:false})
        }
    }
}))

export default newsSortStore