//Slider for mobile version

import React from 'react'
import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Tabs_Slider({images, currentSlide}) {

    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: currentSlide
    };


    return (
        <section className='relative block w-full  h-full tabs_slider'>
            <ReactSlick  {...settings}>
                {images.map((imgs, i) => (

                    <img src={imgs[0]} className='max-w-full w-full h-full object-cover object-center'/>

                ))}
                      
               
            </ReactSlick>
        </section>
    )
}

export default Tabs_Slider