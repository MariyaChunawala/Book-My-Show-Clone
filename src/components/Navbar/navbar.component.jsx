import React from "react";
import { BiChevronRight, BiSearch, BiMenu, BiChevronDown } from "react-icons/bi";
import logo from "../../img/logo.png"

const NavSm = () => {
    return (<>
        <div className="text-white flex justify-between items-center">
            <div>
                <h3 className="text-xl font-bold">Its All Start Here!</h3>
                <span className="text-gray-400 text-xs flex items-center">Bharuch <BiChevronRight /></span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full" />
            </div>
        </div>
    </>);
};
const NavMd = () => {
    return (
        <>
            <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                <BiSearch />
                <input
                    type="search"
                    className="w-full bg-transparent border-none focus:outline-none"
                    placeholder="Search for Movies, Events, Play, Sports and Activities "
                />
            </div>
        </>
    )
};
const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-12 h-12">
                        <img src={logo} alt="" className="w-full h-full" />
                    </div>
                    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                        <BiSearch />
                        <input
                            type="search"
                            className="w-full bg-transparent border-none focus:outline-none"
                            placeholder="Search for Movies, Events, Play, Sports and Activities "
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-gray-200 text-md font-normal hover:text-white cursor-pointer flex items-center">Bharuch <BiChevronDown /></span>
                    <button className="bg-red-700 text-white px-3 py-1 rounded text-sm">Sign in</button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    )
};

const Navbar = () => {
    return <>
        <nav className="bg-bms-700 p-3">
            <div className="md:hidden"><NavSm /></div>
            <div className="hidden md:flex lg:hidden"><NavMd /></div>
            <div className="hidden lg:flex"><NavLg /></div>
        </nav>
    </>
};

export default Navbar;