import PropTypes from "prop-types"
export default function Pagination({currentPage,totalPage,onPageChanges}){
    const pages = []

    for(let i=1; i <= totalPage;i++){
        pages.push(i)
    }
    return(
        <div className="flex justify-center md:col-span-2 text-lg ">
            <button onClick={()=>onPageChanges(currentPage-1)}
            disabled={currentPage === 1} 
            className="px-4 py-2 border border-slate-500 disabled:opacity-50 hover:cursor-pointer">{`<`}</button>

            {
                pages.map((page)=>(
                    <button
                    key={page} 
                    onClick={()=>onPageChanges(page)}
                    className={`px-4 border border-slate-500 hover:cursor-pointer ${page === currentPage ? "bg-blue-500 text-white":"bg-white"}`}>{page}</button>
                ))
            }
            <button onClick={()=>onPageChanges(currentPage+1)}
            disabled={currentPage === totalPage} 
            className="px-4 py-2 border border-slate-500 disabled:opacity-50 hover:cursor-pointer">{`>`}</button>
        </div>
    )
}