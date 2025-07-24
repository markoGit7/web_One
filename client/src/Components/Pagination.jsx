import React from 'react'
import { useState } from 'react';
const pages = [1,2,3,4,5];

// let [currentI, setCurrentI] = useState(1);

const OneStep = (n) => {
    if(n > 0) {
        alert('++');
    } else {
        alert('--');
    }
}

function Pagination() {
    return (
        <div className="mt-[86px] text-center">
            <div className="inline-block max-w-full">
                <ul className="flex flex-row overflow-hidden rounded-[4px] shadow-[0_0_0_1px_#E9ECEF]">
                    <li className="min-w-[66px] max-w-full rounded-s-[4px] border-e border-e-colorgray200">
                        <a href="#" onClick={(e) => {e.preventDefault(); OneStep(1);}} className="flex w-full items-center justify-center px-1 py-3 text-base font-normal !leading-[100%] text-colorgray600">Prev</a>
                    </li>

                    {pages.map((title, indx) => (
                        <li key={indx} className="w-[41px] max-w-full border-e border-e-colorgray200">
                            <a
                            href="#"
                            className={`${indx === 0? 'active' : ''} flex w-full items-center justify-center px-1 py-3 text-base font-normal !leading-[100%] text-colorgray600 transition-all duration-300 ease-in-out hover:bg-colorblue hover:text-white [&.active]:bg-colorblue [&.active]:text-white`}
                            >
                            {title}
                            </a>
                        </li>
                    ))}

                    <li className="min-w-[68px] max-w-full rounded-e-[4px] border-e border-e-colorgray200">
                        <a href="#" onClick={(e) => {e.preventDefault(); OneStep(-1);}} className="flex w-full items-center justify-center px-1 py-3 text-base font-normal !leading-[100%] text-colorgray600">Next</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Pagination