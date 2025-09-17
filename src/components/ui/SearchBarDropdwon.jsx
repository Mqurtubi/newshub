import { useState } from "react"
import { IoSearch } from "react-icons/io5"
import newsSearchStore from "../../store/newsSearchStore"
import {useNavigate} from "react-router-dom"
export default function SearchBarDropdown(){
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
        <form className=" flex items-center space-x-1 sm:hidden" onSubmit={onSubmitHandler}>
            <div className="flex relative items-center">
                <input type="text" placeholder="Search news..." className="bg-white text-slate-900 w-sm pl-10 py-1 focus:outline-none text-lg " value={value} onChange={onchangeHandler}/>
                <IoSearch className="absolute left-2 text-slate-900"/>
            </div>
            <button type="submit" className="rounded border border-white py-2 px-5 hover:cursor-pointer">Search</button>
        </form>
    )
}