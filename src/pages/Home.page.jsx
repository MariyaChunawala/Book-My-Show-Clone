import React, { useEffect, useState } from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// config
import TempImages from "../../src/config/TempImages.config"
import axios from "axios";

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get('/movie/popular');
            setPopularMovies(getPopularMovies.data.results);
        }
        requestPopularMovies();
    }, [])
    return <>
        <div className="flex flex-col gap-16">
            <div className="container mx-auto px-auto">
                <h1 className="text-2xl font-bold text-gray-800 my-3 mx-6">
                    The Best Of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>
            <div className="bg-bms-1000 py-12">
                <div className="container mx-auto px-4 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                            alt="Premiere_Image"
                            className="w-full h-full"
                        />
                    </div>
                    <PosterSlider images={popularMovies} title="Premiere" subtitle="Brand new release every Friday" isDark={true} />
                </div>
            </div>
            <div className="container mx-auto px-4">
                <PosterSlider images={TempImages} title="Online Streaming Events" isDark={false} />
            </div>
            <div className="container mx-auto px-4">
                <PosterSlider images={TempImages} title="Outdoor Events" isDark={false} />
            </div>
            <div className="container mx-auto px-4">
                <PosterSlider images={TempImages} title="Laughter Therapy" isDark={false} />
            </div>
            <div className="container mx-auto px-4">
                <PosterSlider images={TempImages} title="Popular Events" isDark={false} />
            </div>
        </div>
    </>
}
export default HomePage;