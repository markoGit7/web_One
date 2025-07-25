import React from 'react'
import Marquee from "react-fast-marquee";

function InfinitSpinIcons() {

    const Icons = [
        `${import.meta.env.BASE_URL}client-1.svg`,
        `${import.meta.env.BASE_URL}client-2.svg`,
        `${import.meta.env.BASE_URL}client-3.svg`,
        `${import.meta.env.BASE_URL}client-4.svg`,
        `${import.meta.env.BASE_URL}client-5.svg`,
        `${import.meta.env.BASE_URL}client-6.svg`,
        `${import.meta.env.BASE_URL}client-3.svg`
    ]

    return (
        <Marquee direction="left" pauseOnHover={false} speed={50} gradient={false}>
            <div className="flex items-center gap-x-12">
                {Icons.map((icon, indx) => (
                <div key={indx} className="w-28 h-12 flex items-center justify-center shrink-0">
                    <img src={icon} alt="#" className="h-[40px] w-auto object-contain" />
                </div>
                ))}
            </div>
        </Marquee>

    )
}

export default InfinitSpinIcons;