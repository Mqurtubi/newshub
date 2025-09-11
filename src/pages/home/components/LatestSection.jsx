import { useEffect, useState } from "react"
import { getNews } from "../../../api/news"
import SkeletonCard from "./SkeletonCard"
import Card from "./Card"
export default function LatestSection(){
    const [article,setArticle]=useState([])
    const [loading,setLoading]=useState(true)
    
    useEffect(()=>{
        getNews().then((res)=> {
            setArticle(res.articles)
            setLoading(false)
        })
    },[])
    return(
        <div className="mx-4 mb-10">
            <p className="text-xl font-semibold mb-6">Latest News</p>
            <div className="space-y-5 md:flex space-x-5">
                { loading && (
                    <>
                        <SkeletonCard/>
                        <SkeletonCard/>
                        <SkeletonCard/>
                    </>
                )}
                { !loading && 
                    article.slice(0,3).map((item,index)=>(
                        <Card article={item} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}