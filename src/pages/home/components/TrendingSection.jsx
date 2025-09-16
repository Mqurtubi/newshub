import TrendingFilter from "./TrendingFilter"
import Card from "../../../components/ui/Card"
import useNewsTrendingStore from "../../../store/newsTrendingStore"
import SkeletonCard from "../../../components/ui/SkeletonCard"
export default function TrendingSection(){
    const {articles,loading} = useNewsTrendingStore()
    
    return(
        <div className="mx-4">
            <TrendingFilter/>
            <div className="grid gap-4 mb-10  md:grid-cols-3  items-start " >
                {
                    loading&&(
                        <>
                            <SkeletonCard variant="big"/>
                            <div className="flex flex-col space-y-4 md:col-span-1">
                                <SkeletonCard/>
                                <SkeletonCard/>
                                <SkeletonCard/>
                            </div>
                        </>
                    )
                }
                {
                    !loading &&(
                        <>
                            <Card variant="big" article={articles[0]}/>
                            <div className="flex flex-col space-y-4 md:col-span-1">
                                {
                                    articles.slice(1,4).map((item,index)=>(
                                    <Card article={item} key={index}/>
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