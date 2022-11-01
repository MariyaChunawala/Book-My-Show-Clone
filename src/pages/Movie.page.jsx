import React, { useContext, useEffect, useState } from 'react'
import { FaCcVisa, FaCcApplePay } from 'react-icons/fa'
import MovieHero from '../components/MovieHero/MovieHero.component'
import Cast from '../components/Cast/Cast.component'
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// config
import MoviePoster from "../config/MoviePoster.config";
import { MovieContext } from '../context/movie.context';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

const MoviePage = () => {
    const { movie } = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            console.log(getCast.data.cast);
            setCast(getCast.data.cast);
        }
        requestCast();
    }, [id]);
    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);
        }
        requestSimilarMovies();
    }, [id]);
    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommendedMovies(getRecommendedMovies.data.results);
        }
        requestRecommendedMovies();
    }, [id]);
    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <MovieHero />
            <div className='container lg:ml-32 px-4 my-12 lg:w-2/3'>
                <div className='flex flex-col items-start gap-3'>
                    <h2 className='text-gray-800 font-bold text-2xl'>About the movie</h2>
                    <p className='text-lg'>
                        {movie.overview}
                    </p>
                </div>
                <div className='my-8'>
                    <hr />
                </div>
                <div className='my-8 flex flex-col items-start gap-3'>
                    <h2 className='text-gray-800 font-bold text-2xl mb-3'>Applicable offers</h2>
                    <div className='flex flex-col items-start gap-5 md:flex-row'>
                        <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-300 border-dashed border-2 rounded-xl'>
                            <div className='w-8 h-8'>
                                <FaCcVisa className='w-full h-full' />
                            </div>
                            <div className='flex flex-col items-start'>
                                <h3 className='text-gray-700 text-lg font-bold'>Visa Stream offer</h3>
                                <p className='text-gray-light text-md'>Rent & Use Code- BIGBLAST</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-300 border-dashed border-2 rounded-xl'>
                            <div className='w-8 h-8'>
                                <FaCcApplePay className='w-full h-full' />
                            </div>
                            <div className='flex flex-col items-start'>
                                <h3 className='text-gray-700 text-lg font-bold'>Apple Pay Stream offer</h3>
                                <p className='text-gray-light text-md'>Rent & Use Code- APPLEBLAST</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-8'>
                    <hr />
                </div>
                <div className='my-8'>
                    <h2 className='text-gray-800 font-bold text-2xl'>Cast & Crew</h2>
                    <Slider {...settingsCast}>
                        {cast.map((castData) => {
                            return (
                                <Cast image={`https://image.tmdb.org/t/p/original/${castData.profile_path}`}
                                    castName={castData.original_name}
                                    role={castData.character}
                                />)
                        })}
                    </Slider>
                </div>
                <div className='my-8'>
                    <hr />
                </div>
                <div className='my-8'>
                    <PosterSlider config={MoviePoster} images={similarMovies} title="You might also like" isDark={false} />
                </div>
                <div className='my-8'>
                    <hr />
                </div>
                <div className='my-8'>
                    <PosterSlider config={MoviePoster} images={recommendedMovies} title="BMS XCLUSIV" isDark={false} />
                </div>
            </div>
        </>
    )
}
export default MoviePage;
