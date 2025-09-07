import { FaNewspaper } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import link from "./linkCategories";
import medsos from "./medsos";
export default function Footer(){
    const itemCompany=[
        {
            href:"/about",
            label:"About Us"
        },
        {
            href:"/contact",
            label:"Contact"
        },
        {
            href:"/policy",
            label:"Privacy Policy"
        },
        {
            href:"/terms",
            label:"Terms of Service"
        },
    ]
    return(
        <div className="bg-slate-800 px-5 py-8">
            <div className="flex flex-col space-y-5 lg:flex-row justify-between lg:mx-10">
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center text-xl font-semibold space-x-1 text-white">
                        <FaNewspaper className="text-blue-800"/>
                        <p>News<span className="text-blue-800">Hub</span></p>
                    </div>
                    <p className="text-slate-300">Your trusted source for breaking news and in-depth analysis.</p>
                </div>
                <div className="flex flex-col space-y-3">
                    <p className="text-white font-semibold">Categories</p>
                    <div className="flex flex-col space-y-2">
                        {
                            link.map((item,index)=>(
                                <NavLink to={item.href} key={index} className="text-slate-300 ">{item.label}</NavLink>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col space-y-3">
                    <p className="text-white font-semibold">Company</p>
                    <div className="flex flex-col space-y-2">
                        {
                            itemCompany.map((item,index)=>(
                                <NavLink to={item.href} key={index} className="text-slate-300 ">{item.label}</NavLink>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col space-y-3">
                     <p className="text-white font-semibold">Follow Us</p>
                    <div className="flex space-x-3">
                        {
                            medsos.map((item,index)=>(
                                <NavLink to={item.href} key={index} className="text-slate-300 text-xl">{item.label}</NavLink>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}