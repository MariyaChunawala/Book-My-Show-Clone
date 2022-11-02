import React, { useContext, useState } from 'react'
import PaymentModal from '../PaymentModal/payment.component';
import { MovieContext } from '../../context/movie.context'

const MovieInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);
    const { movie } = useContext(MovieContext);
    const genres = movie.genres?.map(({ name }) => name).join(", ");

    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    };
    const buyMovies = () => {
        setIsOpen(true);
        setPrice(599);
    };
    return (
        <>
            <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            <div className='flex flex-col gap-3 lg:gap-8'>
                <div className='flex items-center gap-3 md:px-4'>
                    <div className='w-40 h-8'>
                        <img src='https://in.bmscdn.com/moviemode/tvod/premiere-tag.png'
                            alt='Premiere'
                            className='w-full h-full'
                        />
                    </div>
                    <span className='bg-bms-700 text-white p-1 text-xs rounded-md'>Streaming Now</span>
                </div>
                <h1 className='hidden lg:block text-white lg:text-4xl font-bold md:px-4'>{movie.original_title}</h1>
                <div className='flex flex-col-reverse lg:flex-col gap-3 lg:gap-5'>
                    <div className='text-white font-light flex flex-col gap-2 md:px-4'>
                        <h4>{movie.vote_average} &bull; {movie.original_language}</h4>
                        <h4>{(movie.runtime / 60).toFixed(2)}h &bull; {genres} &bull; {movie.vote_count}</h4>
                    </div>
                    <div className='flex items-center gap-3 md:w-screen lg:w-full md:px-4'>
                        <button onClick={rentMovies} className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>
                            Rent ₹149
                        </button>
                        <button onClick={buyMovies} className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>
                            Buy ₹599
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MovieInfo