import {navItems} from "./index.jsx"
import { useState } from "react";
import X from "./index.jsx";
import Menu from "./index.jsx";

const Navbar = () => {
const [mobleDrawerOpen, setmobleDrawerOpen]= useState(false);
const show=()=>{
    setmobleDrawerOpen(!mobleDrawerOpen);
};




  // Create a reference for the target component


    return(  <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-bottom-neutral-700/80 ">
    <div className="container px-4 mxauto relative text-sm">
        <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
                    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent text-3xl bg-clip-text">TheUltimate</span>

            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index)=> (
                <li key={index}>
                    <a href="{item.href}">{item.label}</a>
                </li>
            ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
                <a href="" className="py-2 px-3 border rounded-md">
                   Sign in 
                </a>
                <a href="" className="py-2 px-3 border rounded-md">
                   Sign Up 
                </a>
            </div>
            <div className="lg:hidden md:flex flex-col justfy-end">
                <button onClick={show}>{mobleDrawerOpen ? <b className="text-3xl">X</b> : <Menu />}</button>
            </div>
        </div>
        {mobleDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
                {navItems.map((item, index)=>(
                     <li key={index} className="py-4">
                     <a>{item.label}</a>
                 </li>
                ))}
                </ul>      
            </div>
        )}
    </div>
  </nav>
    );
}
export default Navbar;