import TrendingFilter from "./TrendingFilter"
import CardTrending from "./CardTrending"
import useNewsTrendingStore from "../../../store/newsTrendingStore"
import SkeletonCardTrendig from "./SkeletonCardTrending"
import { useEffect } from "react"
export default function TrendingSection(){
    const {articles,loading} = useNewsTrendingStore()
    useEffect(()=>{
        console.log(articles)
        console.log(loading)
    },[articles,loading])
    return(
        <div className="mx-4">
            <TrendingFilter/>
            <div className="grid gap-4 mb-10  md:grid-cols-3  items-start " >
                {
                    loading&&(
                        <>
                            <SkeletonCardTrendig variant="big"/>
                            <div className="flex flex-col space-y-4 md:col-span-1">
                                <SkeletonCardTrendig/>
                                <SkeletonCardTrendig/>
                                <SkeletonCardTrendig/>
                            </div>
                        </>
                    )
                }
                {
                    !loading &&(
                        <>
                            <CardTrending variant="big" article={articles[0]}/>
                            <div className="flex flex-col space-y-4 md:col-span-1">
                                {
                                    articles.slice(1,4).map((item,index)=>(
                                    <CardTrending article={item} key={index}/>
                                ))
                                }
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}