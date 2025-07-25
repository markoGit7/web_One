import React from 'react';

function After_Submit_Message({ image, txt, comingFrom, isVisible }) {
    return (
        <div className={`
            fixed left-1/2 -translate-x-1/2 min-w-max p-4 z-[1000]
            transition-all duration-500 ease-in-out
            ${isVisible ? 'top-[25px]' : '-top-[100%]'}
            border border-black rounded-full overflow-hidden
        `}>
            <span className='absolute w-full h-full bg-[rgba(255,255,255,.9)] blur-sm top-0 left-0 rounded-full'></span>

            <div className='relative z-10 bg-transparent flex'>
                <img src={image} alt="" width={1280} height={1280} className='w-6 h-6 rounded-full self-center' />

                <div className='ml-3'>
                    <p className='text-sm mb-2'>{txt}</p>
                    <p className='text-sm italic'>Notification: {comingFrom}</p>
                </div>
            </div>
        </div>
    );
}

export default After_Submit_Message;
