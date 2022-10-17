import React from 'react'

const MovieInfo = () => {
    return (
        <>
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
                <h1 className='hidden lg:block text-white lg:text-4xl font-bold md:px-4'>Kantara (Hindi)</h1>
                <div className='flex flex-col-reverse lg:flex-col gap-3 lg:gap-5'>
                    <div className='text-white font-light flex flex-col gap-2 md:px-4'>
                        <h4>4k &bull; English &bull; Action</h4>
                        <h4>1h 53m &bull; Action, Thriller, Sci-Fi &bull; 13+</h4>
                    </div>
                    <div className='flex items-center gap-3 md:w-screen lg:w-full md:px-4'>
                        <button className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>
                            Rent ₹149
                        </button>
                        <button className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>
                            Buy ₹300
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MovieInfo