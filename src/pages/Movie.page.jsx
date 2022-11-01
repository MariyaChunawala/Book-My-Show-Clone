import React, { useContext } from 'react'
import { FaCcVisa, FaCcApplePay } from 'react-icons/fa'
import MovieHero from '../components/MovieHero/MovieHero.component'
import Cast from '../components/Cast/Cast.component'
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// config
import TempImages from "../../src/config/TempImages.config"
import MoviePoster from "../config/MoviePoster.config";
import { MovieContext } from '../context/movie.context';

const MoviePage = () => {
    const { movie } = useContext(MovieContext);
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
                <div className='my-8 flex flex-col items-start gap-3'>
                    <h2 className='text-gray-800 font-bold text-2xl'>Cast & Crew</h2>
                    <div className='flex flex-wrap gap-4'>
                        <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rishab-shetty-1064313-15-08-2018-04-55-18.jpg"
                            castName="Rishab Shetty"
                            role="Actor"
                        />
                        <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sapthami-gowda-2008392-29-02-2020-12-23-17.jpg"
                            castName="Sapthami Gowda"
                            role="Actor"
                        />
                        <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/achyuth-kumar-19493-06-10-2016-04-07-39.jpg"
                            castName="Achyuth Kumar"
                            role="Actor"
                        />
                    </div>
                </div>
                <div className='my-8'>
                    <hr />
                </div>
                <div className='my-8'>
                    <PosterSlider config={MoviePoster} images={TempImages} title="You might also like" isDark={false} />
                </div>
                <div className='my-8'>
                    <hr />
                </div>
                <div className='my-8'>
                    <PosterSlider config={MoviePoster} images={TempImages} title="BMS XCLUSIV" isDark={false} />
                </div>
            </div>
        </>
    )
}
export default MoviePage;
