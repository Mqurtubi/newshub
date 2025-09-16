import SkeletonCard from "../../../components/ui/SkeletonCard"
import Card from "../../../components/ui/Card"
import useNewsLatestStore from "../../../store/newsLatestStore"
export default function LatestSection(){
    const {articleLatest,loadingLatest}=useNewsLatestStore()
    return(
        <div className="mx-4 mb-10">
            <p className="text-xl font-semibold mb-6">Latest News</p>
            <div className="space-y-5 md:flex space-x-5">
                { loadingLatest && (
                    <>
                        <SkeletonCard/>
                        <SkeletonCard/>
                        <SkeletonCard/>
                    </>
                )}
                { !loadingLatest && 
                    articleLatest.slice(0,3).map((item,index)=>(
                        <Card article={item} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}