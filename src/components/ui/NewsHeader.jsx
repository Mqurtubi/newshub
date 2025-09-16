import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import newsSortStore from "../../store/newsSortCategory";
import PropTypes from "prop-types"
export default function NewsHeader({category,labelCategory}){
    const [dropdown,setDropdown]=useState(false)
    const {sort,labelSort,setSort,setLabelSort,fetchArticleSort,articleSort}=newsSortStore()
    const itemSelect=[
        {
            label:"Latest",
            sort:"published_desc"
        },
        {
            label:"Oldest",
            sort:"published_asc"
        },
        {
            label:"Popularity",
            sort:"popularity"
        },
    ]

    const handlerClick=()=>setDropdown(!dropdown)

    const handlerSelect=(item,sort)=>{
        setSort(sort)
        setLabelSort(item)
        setDropdown(false)
    }

    useEffect(()=>{
        fetchArticleSort(category,sort)
        console.log(articleSort)
    },[sort,fetchArticleSort,category])
    return(
        <div className="flex justify-between items-center mb-5">
            <div className="space-y-1">
                <p className="text-2xl font-bold">{`${labelCategory} News`}</p>
                <p className="text-lg">{`Stay updated with the latest ${category} news`}</p>
            </div>
            <div className="relative">
            <button className="border flex pl-5 items-center rounded" onClick={handlerClick}>
                {labelSort} <RiArrowDropDownLine className="text-3xl"/>
            </button>
            <ul className={`absolute bg-white space-y-1 px-2 py-3 right-0 shadow-2xl/20 hover:cursor-pointer text-lg ${dropdown === true ? "block" : "hidden"}`}>
                {
                    itemSelect.map((item,index)=>(
                        <li className="pl-2 pr-10 hover:cursor-pointer text-lg" onClick={()=>handlerSelect(item.label,item.sort)} key={index}>{item.label}</li>
                    ))
                }
            </ul>
            </div>
        </div>
    )
}
NewsHeader.propTypes={
    category:PropTypes.string.isRequired,
    labelCategory:PropTypes.string.isRequired
}