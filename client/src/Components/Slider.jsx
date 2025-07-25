import React from 'react';
import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {RegisterButton} from '../Components';
import {texts} from '../i18n/texts'
import { useParams} from 'react-router-dom';


function Slider() {
    const { lang } = useParams();
    
    const t = texts[lang];
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    
    const slides = [
        {
            "title": t?.slider?.slide1?.title,
            "blue": t?.slider?.slide1?.blue,
            "text": t?.slider?.slide1?.text,
            "image": `${import.meta.env.BASE_URL}carousel-img-1.svg`,
            "button": <RegisterButton/>
        },

        {
            "title": t?.slider?.slide2?.title,
            "blue": t?.slider?.slide2?.blue,
            "text": t?.slider?.slide2?.text,
            "image": `${import.meta.env.BASE_URL}carousel-img-2.svg`,
            "button": <RegisterButton/>
        },

        {
            "title": t?.slider?.slide3?.title,
            "blue": t?.slider?.slide3?.blue,
            "text": t?.slider?.slide3?.text,
            "image": `${import.meta.env.BASE_URL}carousel-img-3.svg`,
            "button": <RegisterButton/>
        }
    ];

    return (
        <section className='relative block w-full py-24 bg-gray-100 overflow-x-hidden'>
            <ReactSlick  {...settings}>
                {slides.map((src, i) => (
                    <div key={i} className='mx-auto max-w-[1194px] px-5 !block'>
                        <div className='grid grid-cols-12 -mx-[35px] items-center gap-y-10 lg:gap-y-0'>
                            {/* Content */}
                            <div className={`col-span-12 ${i === 0 ? 'lg:col-span-7' : 'lg:col-span-6'} px-[35px] text-center lg:text-start ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                                {i === 0 ? (
                                <h1 className='font-semibold text-[35px] min-[350px]:text-[40px] min-[450px]:text-[53px] sm:text-[62px] leading-[118%] text-colorgray900 mb-4'>
                                    {src.title} <span className='text-colorblue block'>{src.blue}</span>
                                </h1>
                                ) : (
                                <h2 className='font-semibold text-[35px] min-[350px]:text-[40px] min-[450px]:text-[55px] sm:text-[64px] leading-[118%] text-colorgray900 mb-4'>
                                    {src.title} <span className='text-colorblue block'>{src.blue}</span>
                                </h2>
                                )}

                                <p className='text-gray-600 !leading-[150%]'>{src.text}</p>

                                {src.button}
                            </div>

                            {/* Image */}
                            <div className={`col-span-12 ${i === 0 ? 'lg:col-span-5' : 'lg:col-span-6'} px-[35px] text-center lg:text-end ${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <img src={src.image} alt={`Slide ${i}`} className="w-[536.35px] h-auto !inline-block" />
                            </div>
                        </div>
                    </div>
                ))}
            </ReactSlick>
        </section>
    );
}

export default Slider;