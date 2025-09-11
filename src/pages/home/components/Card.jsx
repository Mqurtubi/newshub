import { timeAgo } from "../../../utils/timeAgo"
import PropTypes from "prop-types"
export default function Card({variant="small",article}){
    const isBig=variant === "big"
    return(
        <div className={`w-full shadow-sm/30 space-y-5 rounded-xl overflow-hidden ${isBig ? "md:col-span-2 ":"md:col-span-1"}`}>
            <div>
                <img src={article.urlToImage} alt="" className={`w-full ${isBig ? "h-64" : "h-64 md:h-32"} object-cover`}/>
            </div>
            <div className="space-y-5 px-6 pb-5">
            <div className="flex space-x-5">
                <p>Business</p>
                <p className="text-slate-400">{timeAgo(article.publishedAt) }</p>
            </div>
            <div className="flex flex-col space-y-2">
                <p className={`${isBig ? "md:text-4xl text-xl line-clamp-2" : "text-xl line-clamp-1"} `}>{article.title}</p>
                <p className={`${isBig ? "line-clamp-2":"md:line-clamp-1 line-clamp-2"} text-slate-600`}>{article.description}</p>
            </div>
            <div className="flex justify-between">
                <p>{article.author}</p>
                <p>read more</p>
            </div>
            </div>
        </div>
    )
}
Card.propTypes={
    variant:PropTypes.string || null.isRequired,
    article:PropTypes.object.isRequired
}