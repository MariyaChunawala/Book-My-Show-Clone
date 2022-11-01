import React, { useContext } from "react";
import { BiSearch, BiMenu, BiChevronDown, BiShareAlt } from "react-icons/bi";
import logo from "../../img/logo.png"
import { MovieContext } from "../../context/movie.context";

const NavSm = () => {
    const { movie } = useContext(MovieContext);
    return (<>
        <div className="text-white flex justify-between items-center">
            <div>
                <h3 className="text-xl font-bold">{`${movie.original_title}`}</h3>
            </div>
            <div className="w-8 h-8">
                <BiShareAlt className="w-full h-full" />
            </div>
        </div>
    </>);
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

const MovieNavbar = () => {
    return <>
        <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 p-3">
            <div className="md:hidden"><NavSm /></div>
            <div className="hidden md:block lg:hidden"><NavSm /></div>
            <div className="hidden lg:flex"><NavLg /></div>
        </nav>
    </>
};

export default MovieNavbar;