import { useState } from "react"
import { IoSearch } from "react-icons/io5"
import newsSearchStore from "../../store/newsSearchStore"
import {useNavigate} from "react-router-dom"

export default function SearchBarNavbar(){
    const [value,setValue]=useState("")
    const navigate=useNavigate()
    const {fetchArticleSearch}=newsSearchStore()
    const onchangeHandler=(e)=>{
        setValue(e.target.value)
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault()
        if(!value.trim()) return
        fetchArticleSearch(value)
        navigate(`/search?keywords=${value}`)
    }
    return(
        <form className="sm:flex items-center space-x-1 hidden" onSubmit={onSubmitHandler}>
            <div className="relative items-center  sm:flex text-lg ">
                <input type="text" className="border border-slate-400 rounded pl-10 focus:outline-none w-full py-1" placeholder="Search news..." onChange={onchangeHandler} value={value}/>
                <IoSearch className="absolute left-3 text-slate-400"/>
            </div>
            <button type="submit" className="rounded bg-blue-500 text-white px-5 py-1 text-lg hover:cursor-pointer" >Search</button>
        </form> 
    )
}