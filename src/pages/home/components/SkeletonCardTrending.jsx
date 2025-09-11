import PropTypes from "prop-types"
export default function SkeletonCardTrendig({variant="small"}){
    const isBig=variant === "big"
    return(
        <div className={`w-full shadow-sm/30 space-y-5 rounded-xl overflow-hidden ${isBig ? "md:col-span-2 ":"md:col-span-1"}`}>
            <div>
                <div className={`w-full bg-slate-400 ${isBig ? "h-64" : "h-64 md:h-32"} object-cover`}></div>
            </div>
            <div className="space-y-5 px-6 pb-5">
            <div className="flex space-x-5">
                <div className="w-48 bg-slate-400 h-5"></div>
                <div className="w-20 bg-slate-400 h-5"></div>
            </div>
            <div className="flex flex-col space-y-2">
                <div className={`w-full h-5 bg-slate-400  `}></div>
                <div className={` "w-full h-10 bg-slate-400 `}></div>
            </div>
            <div className="flex justify-between">
                <div className="w-48 bg-slate-400 h-5"></div>
                <div className="w-20 bg-slate-400 h-5"></div>
            </div>
            </div>
        </div>
    )
}
SkeletonCardTrendig.propTypes={
    variant:PropTypes.string.isRequired
}