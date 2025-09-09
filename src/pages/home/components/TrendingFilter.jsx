import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { getNewsTopHeadlines } from "../../../api/news";
import categories from "./categories";
export default function TrendingFilter(){
    const [dropdown,setDropdown]=useState(false)
    const [select,setSelect]=useState({label:"All",category:""})
    const handlerClick = () => setDropdown(!dropdown)

    const handlerSelect = (item) => {
        setSelect(item)
        setDropdown(false)

    }

    useEffect(()=>{
        getNewsTopHeadlines(select.category).then(res=>console.log(res))
    },[select])
    
    return(
        <div className="flex items-center justify-between ">
            <p className="text-xl font-semibold">Trending Now</p>
            <div className="flex py-5 space-x-1">
                <div className="relative">
                <button className="border pl-3 py-1 rounded flex items-center space-x-5 hover:cursor-pointer lg:hidden" onClick={handlerClick}>{select.label} <RiArrowDropDownLine className="text-xl ml-3"/></button>
                {dropdown && (
                <ul className="absolute bg-white right-1 lg:hidden">
                    {
                        categories.map((item,index)=>(
                            <li className="px-8 py-1 my-1 hover:cursor-pointer lg:hidden hover:text-blue-600" key={index} onClick={()=>handlerSelect(item)}>{item.label}</li>
                        ))
                    }
                </ul>
                )}
                </div>
                <div className="hidden lg:block">
                    <ul className="flex space-x-1">
                        {
                        categories.map((item,index)=>(
                            <li className={`hover:cursor-pointer border px-4 py-2 rounded ${select.label === item.label ?"text-blue-600":"text-black"} hover:text-blue-600`} key={index} onClick={()=>handlerSelect(item)}>{item.label}</li>
                        ))
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}