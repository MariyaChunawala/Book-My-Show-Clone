import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
    return <>
        <div className="w-5/6 h-30 mx-auto">
            <img className="w-full h-full rounded-xl" src={props.src} alt="Entertainment Card" />
        </div>
    </>;
}

const EntertainmentCardSlider = () => {
    const EntertainmentImages = [""]

    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoints: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinity: true
                }
            },
            {
                breakpoints: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialScale: 1
                }
            },
            {
                breakpoints: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return <>
        <Slider {...settings} className="flex flex-row">
            {EntertainmentImages.map((image) => <EntertainmentCard src={image} />)}
        </Slider>
    </>
}

export default EntertainmentCardSlider;