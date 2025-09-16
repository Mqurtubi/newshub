import Pagination from "./Pagination"
import Card from "./Card"
import newsSortStore from "../../store/newsSortCategory"
import useNewsTrendingStore from "../../store/newsTrendingStore"
import SkeletonCard from "./SkeletonCard"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"
export default function FeaturesNewsSection({category,label}){
    const {articleSort, loadingSort}=newsSortStore()
    const {articles,loading,fetchArticles}=useNewsTrendingStore()
    
    const [pages,setPages]=useState(1)
    const limit= 5
    const totalPages= Math.ceil(articles.length/limit)

    const start= (pages - 1) * limit
    const end= start + limit
    useEffect(()=>{
        fetchArticles({category})
    },[fetchArticles])
    return(
        <div className="grid md:grid-cols-3 gap-5 grid-cols-1">
            <div className="grid md:col-span-2 grid-cols-1 md:grid-cols-2 gap-5">
                {loadingSort && (
                    <>
                        <SkeletonCard variant="big"/>
                        <SkeletonCard/>
                        <SkeletonCard/>
                    </>
                )}
                {!loadingSort && pages === 1 && (
                    <>
                        <Card variant="big" article={articleSort[0]}/>
                        {
                            articleSort.slice((start+1),end).map((item,index)=>(
                                <Card key={index} article={item}/>
                            ))
                        }
                    </>
                )}
               {!loadingSort && pages > 1 &&(
                    <>
                        {
                            articleSort.slice(start,end).map((item,index)=>(
                                <Card key={index} article={item}/>
                            ))
                        }
                    </>
                )}
                <div className="md:col-span-2">
                    <Pagination currentPage={pages} totalPage={totalPages} onPageChanges={setPages}/>  
                </div>              
            </div>
            <div className="col-span-1 space-y-3">
                <p className="text-2xl font-bold">Popular News {label}</p>
                {loading && (
                    <>
                        <SkeletonCard/>
                        <SkeletonCard/>
                        <SkeletonCard/>
                        <SkeletonCard/>
                    </>
                )}
                {!loading && (
                    <>
                        {articles.slice(0,4).map((item,index)=>(
                            <Card key={index} article={item}/>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}
FeaturesNewsSection.propTypes={
    category:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired
}