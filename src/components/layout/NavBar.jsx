import { useState } from "react";
import { FaNewspaper } from "react-icons/fa6";
import { IoMenu, IoSearch, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import SearchBarNavbar from "../ui/SearchBarNavbar";
import link from "./linkCategories";
import SearchBarDropdown from "../ui/SearchBarDropdwon";
export default function NavBar(){
    const [open,setOpen]=useState(false)

    const handleClick=()=>setOpen(!open)
    
    return(
        <div>
        <div className="flex justify-between pt-2 pb-4 shadow-md px-5">
            <div className="flex items-center space-x-3 lg:space-x-7">
            <div className="flex font-semibold items-center space-x-1 text-xl">
                <FaNewspaper className="text-blue-800"/>
                <p>News<span className="text-blue-800">Hub</span></p>
            </div>
            <div className="hidden lg:flex  space-x-5">
                {
                    link.map((item,index)=>(
                            <NavLink to={item.href} className={({isActive,isPending})=> isActive ? "text-blue-600" : isPending ? "text-gray-400" : "text-black"} key={index} >{item.label}</NavLink>

                    ))
                }
            </div>
        </div>
            <div className="text-3xl hover:cursor-pointer flex space-x-3">
                {/* <div className="relative items-center hidden sm:flex text-lg ">
                    <input type="text" className="border border-slate-400 rounded pl-10 focus:outline-none w-full" placeholder="Search news..."/>
                    <IoSearch className="absolute left-3 text-slate-400"/>
                </div> */}
                <SearchBarNavbar/>
                
                <div className="lg:hidden">
                {open ? (
                    <IoClose onClick={handleClick}/>
                ):(
                    <IoMenu  onClick={handleClick}/>
                )}
                </div>
            </div>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100":"max-h-0 opacity-0"}`}>
        <div className="flex flex-col space-y-3 px-4 py-4 bg-blue-500 text-white lg:hidden">
            {/* <div className="relative flex items-center sm:hidden">
                <input type="text" className="border rounded pl-10 focus:outline-none w-full py-1" placeholder="Search news..."/>
                <IoSearch className="absolute left-3"/>
            </div> */}
            <SearchBarDropdown/>
            {
                link.map((item,index)=>(
                        <NavLink to={item.href} className={({isActive,isPending})=> isActive ? "text-white" : isPending ? "text-gray-400" : "text-black"} key={index}>{item.label}</NavLink>
                ))
            }
        </div>
        </div>
        </div>
    )
}