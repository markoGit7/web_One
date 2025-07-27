import {React, useState, useEffect} from 'react';
import Tabs_Slider from './Tabs_Slider.jsx';
function Zoom_Tabs({image, currentImage, onClose}) {
    const [indx, setIndx] = useState(currentImage)

    const nextImg = () => {
        if(indx >= image.length - 1) return;
        setIndx(indx + 1);
    };

    const prevImg = () => {
        if(indx <= 0) return;
        setIndx(indx - 1);
    };

    const [resolution, setResolution] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setResolution(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    console.log(resolution);
    
    return (
        <> 

            <div className='fixed top-0 bottom-0 right-0 left-0 w-full h-[100dvh] bg-black/60 z-[200] flex items-center justify-center'>
                <span className='text-xl font-bold inline-block absolute top-[5px] right-[10px] hover:cursor-pointer w-8 h-8 fill-white z-20' onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg>
                </span>
                <div className='min-[575px]:p-[20px_85px] p-0 min-[575px]:h-auto h-full relative'>
                    {/* Image Box */}
                    <div className='w-[700px] max-w-full, min-[575px]:h-auto h-full'>
                        {
                            resolution > 575 ?
                            (<img src={image[indx][0]} className='max-w-full w-full h-full object-cover object-center'/>)
                            :
                            (<Tabs_Slider images={image} currentSlide={indx}/>)
                        }
                    </div>
                        
                        {
                            resolution > 575 ?
                            (
                                <>
                                    <span className={`w-[60px] h-[60px] ${indx <= 0 ? 'fill-white/50' : 'fill-white'} inline-block absolute top-[50%] -translate-y-[50%] left-[10px] hover:cursor-pointer`} onClick={prevImg}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z"/></svg>
                                    </span>
                                    <span className={`w-[60px] h-[60px] ${indx >= image.length - 1 ? 'fill-white/50' : 'fill-white'} inline-block absolute top-[50%] -translate-y-[50%] right-[10px] hover:cursor-pointer`} onClick={nextImg}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg>
                                    </span>
                                </>
                            )
                            :
                            (<></>)
                        }
                </div>
            </div>
            
        </>
    )
}

export default Zoom_Tabs