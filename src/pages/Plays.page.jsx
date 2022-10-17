import React from 'react'
import PlaysFilters from '../components/PlaysFilters/PlaysFilters.component'
import Poster from '../components/Poster/Poster.component'

const PlaysPage = () => {
    return (
        <>
            <div className='container mx-auto px-4 my-8'>
                <div className='w-full lg:flex lg:flex-row-reverse'>
                    <div className=' lg:w-3/4'>
                        <h2 className='text-2xl font-bold mb-4'>Plays In Bharuch</h2>
                        <div className='flex flex-wrap'>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3'>
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341995-uehyncbjmz-portrait.jpg"
                                    title="Patra Mitro"
                                    subtitle="Gujarati ₹300"
                                    plays
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3'>
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341995-uehyncbjmz-portrait.jpg"
                                    title="Patra Mitro"
                                    subtitle="Gujarati ₹300"
                                    plays
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3'>
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341995-uehyncbjmz-portrait.jpg"
                                    title="Patra Mitro"
                                    subtitle="Gujarati ₹300"
                                    plays
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3'>
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341995-uehyncbjmz-portrait.jpg"
                                    title="Patra Mitro"
                                    subtitle="Gujarati ₹300"
                                    plays
                                />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-3/12'>
                        <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                        <div>
                            <PlaysFilters title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                            <PlaysFilters title="Language" tags={["Gujarati", "English", "Hindi"]} />
                            <PlaysFilters title="Categories" tags={["Theatre"]} />
                            <PlaysFilters title="Genres" tags={["Drama", "Comedy"]} />
                            <PlaysFilters title="More Filters" tags={["Outdoor Events", "Kids Allowed"]} />
                            <PlaysFilters title="Price" tags={["Free", "0-500", "501-2000", "Above 2000"]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaysPage