import React from 'react'
import Slider from 'react-slick';
import Poster from '../Poster/Poster.component';
import settings from '../../config/Poster.config';

const PosterSlider = (props) => {
    return (
        <>
            <div className='flex flex-col items-start mx-3 my-2'>
                <h3 className={`${props.isDark ? "text-white" : "text-gray-700"} text-2xl font-bold `}>{props.title}</h3>
                <p className={`${props.isDark ? "text-white" : "text-gray-700"} text-md`}>{props.subtitle}</p>
            </div>
            <Slider {...settings}>
                {props.images.map((image) => <Poster {...image} isDark={props.isDark} />)}
            </Slider>
        </>
    )
}
export default PosterSlider;