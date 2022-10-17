import React from 'react';
import MovieInfo from './MovieInfo.component';

const MovieHero = () => {
    return (
        <>
            <div>
                {/* Mobile */}
                <div className='md:hidden w-full relative' style={{ height: "calc(180vw)" }}>
                    <div className='absolute z-20 bottom-4 left-4'>
                        <div>
                            <MovieInfo />
                        </div>
                    </div>
                    <div className='w-full h-56 bg-black bg-opacity-50 z-10 absolute bottom-0' />
                    <img src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/kantara-hindi-et00342025-1665304124.jpg'
                        alt='poster' className='w-full h-full'
                    />
                </div>
                {/* Medium */}
                <div className='relative hidden md:block w-full lg:hidden' style={{ height: "calc(100vw)" }}>
                    <div className='w-full h-56 bg-black bg-opacity-50 z-10 absolute bottom-0' />
                    <div className='absolute z-20 bottom-4'>
                        <div>
                            <MovieInfo />
                        </div>
                    </div>
                    <img src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/kantara-hindi-et00342025-1665304124.jpg'
                        alt='poster' className='w-full h-full'
                    />
                </div>
                {/* Large */}
                <div className='relative hidden lg:block w-full' style={{ height: "30rem" }}>
                    <div className='absolute z-10 w-full h-full'
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, rgb(34,34,34)24.97%, rgb(34,34,34) 38.3%, rgb(34, 34, 34, 0.04) 97.47%, rgb(34,34,34) 100%)"
                        }}
                    />
                    <div className='absolute z-30 left-36 top-10 flex items-center gap-10'>
                        <div className='w-64 h-96'>
                            <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAxOWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00342025-bfznknnpek-portrait.jpg'
                                alt='Poster'
                                className='w-full h-full rounded-xl'
                            />
                        </div>
                        <div>
                            <MovieInfo />
                        </div>
                    </div>
                    <img src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/kantara-hindi-et00342025-1665304124.jpg'
                        alt='poster' className='w-full h-full' />
                </div>
            </div>
        </>
    )
}
export default MovieHero;