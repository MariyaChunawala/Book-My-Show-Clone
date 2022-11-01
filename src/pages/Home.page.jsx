import React, { useEffect, useState } from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

import axios from "axios";

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get('/movie/popular');
            setPopularMovies(getPopularMovies.data.results);
        }
        requestPopularMovies();
    }, []);
    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get('/movie/top_rated');
            setTopRatedMovies(getTopRatedMovies.data.results);
        }
        requestTopRatedMovies();
    }, []);
    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get('/movie/upcoming');
            setUpcomingMovies(getUpcomingMovies.data.results);
        }
        requestUpcomingMovies();
    }, []);
    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            const getNowPlayingMovies = await axios.get('/movie/upcoming');
            setNowPlayingMovies(getNowPlayingMovies.data.results);
        }
        requestNowPlayingMovies();
    }, []);
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
                <PosterSlider images={topRatedMovies} title="Online Streaming Events" isDark={false} />
            </div>
            <div className="container mx-auto px-4">
                <PosterSlider images={upcomingMovies} title="Outdoor Events" isDark={false} />
            </div>
            <div className="container mx-auto px-4">
                <PosterSlider images={nowPlayingMovies} title="Laughter Therapy" isDark={false} />
            </div>
            <div className="container mx-auto px-4">
                <PosterSlider images={topRatedMovies} title="Popular Events" isDark={false} />
            </div>
        </div>
    </>
}
export default HomePage;