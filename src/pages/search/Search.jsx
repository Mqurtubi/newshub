import SkeletonCard from "../../components/ui/SkeletonCard"
import Card from "../../components/ui/Card"
import newsSearchStore from "../../store/newsSearchStore"
import Pagination from "../../components/ui/Pagination"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
export default function Search(){
    const {articleSearch,loadingSearch,fetchArticleSearch}=newsSearchStore()
    const [pages,setPages]=useState(1)
    const [searchParams]=useSearchParams()
    const keywords=searchParams.get("keywords")||""
    const limit=8
    const totalPages=Math.ceil(articleSearch.length/limit)
    const start=(pages-1)*limit
    const end= start+limit
    useEffect(()=>{
        if(keywords){
            fetchArticleSearch(keywords)
        }
    },[keywords,fetchArticleSearch])
    return(
        <div className="my-5">
        <div className="grid grid-cols-1 mx-5 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5">
            {loadingSearch&&(
                <>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                </>
            )}
            {!loadingSearch&&
                articleSearch.slice(start,end).map((item,index)=>(
                    <Card article={item} key={index}/>
                ))
            }
            
        </div>
        <div className="m-auto">
                <Pagination currentPage={pages} totalPage={totalPages} onPageChanges={setPages}/>
            </div>
        </div>
    )
}