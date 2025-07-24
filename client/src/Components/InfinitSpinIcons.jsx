import React from 'react'
import Marquee from "react-fast-marquee";

function InfinitSpinIcons() {

    const Icons = [
        '/client-1.svg',
        '/client-2.svg',
        '/client-3.svg',
        '/client-4.svg',
        '/client-5.svg',
        '/client-6.svg',
        '/client-3.svg'
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