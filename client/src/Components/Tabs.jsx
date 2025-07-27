import {React, useState, useEffect} from 'react'
import {texts} from '../i18n/texts';
import { useParams} from 'react-router-dom';
import {Zoom_Tabs} from '../Components';

function Tabs() {
    const { lang } = useParams();
    const t = texts[lang];

    const tabs = [
        {
            'tabName':t?.tabs_section?.btns[0].toLowerCase(),

            'images': [
                [`${import.meta.env.BASE_URL}tabs-img-1.jpg`, `${import.meta.env.BASE_URL}tabs-img-1.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-2.jpg`, `${import.meta.env.BASE_URL}tabs-img-2.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-3.jpg`, `${import.meta.env.BASE_URL}tabs-img-3.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-4.jpg`, `${import.meta.env.BASE_URL}tabs-img-4.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-5.jpg`, `${import.meta.env.BASE_URL}tabs-img-5.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-6.jpg`, `${import.meta.env.BASE_URL}tabs-img-6.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-7.jpg`, `${import.meta.env.BASE_URL}tabs-img-7.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-8.jpg`, `${import.meta.env.BASE_URL}tabs-img-8.webp`]
            ]
        },

        {
            'tabName':t?.tabs_section?.btns[1].toLowerCase(),
            'images': [
                [`${import.meta.env.BASE_URL}tabs-img-1.jpg`, `${import.meta.env.BASE_URL}tabs-img-1.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-2.jpg`, `${import.meta.env.BASE_URL}tabs-img-2.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-3.jpg`, `${import.meta.env.BASE_URL}tabs-img-3.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-4.jpg`, `${import.meta.env.BASE_URL}tabs-img-4.webp`]
            ]
        },

        {
            'tabName':t?.tabs_section?.btns[2].toLowerCase(),
            'images': [
                [`${import.meta.env.BASE_URL}tabs-img-5.jpg`, `${import.meta.env.BASE_URL}tabs-img-5.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-6.jpg`, `${import.meta.env.BASE_URL}tabs-img-6.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-7.jpg`, `${import.meta.env.BASE_URL}tabs-img-7.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-8.jpg`, `${import.meta.env.BASE_URL}tabs-img-8.webp`]
            ]
        },

        {
            'tabName':t?.tabs_section?.btns[3].toLowerCase(),
            'images': [
                [`${import.meta.env.BASE_URL}tabs-img-1.jpg`, `${import.meta.env.BASE_URL}tabs-img-1.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-3.jpg`, `${import.meta.env.BASE_URL}tabs-img-3.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-5.jpg`, `${import.meta.env.BASE_URL}tabs-img-5.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-7.jpg`, `${import.meta.env.BASE_URL}tabs-img-7.webp`]
            ]
        },

        {
            'tabName':t?.tabs_section?.btns[4].toLowerCase(),
            'images': [
                [`${import.meta.env.BASE_URL}tabs-img-2.jpg`, `${import.meta.env.BASE_URL}tabs-img-2.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-4.jpg`, `${import.meta.env.BASE_URL}tabs-img-4.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-6.jpg`, `${import.meta.env.BASE_URL}tabs-img-6.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-8.jpg`, `${import.meta.env.BASE_URL}tabs-img-8.webp`]
            ]
        },

        {
            'tabName': t?.tabs_section?.viewBtn.toLowerCase(),
            'images': [
                [`${import.meta.env.BASE_URL}tabs-img-3.jpg`, `${import.meta.env.BASE_URL}tabs-img-3.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-7.jpg`, `${import.meta.env.BASE_URL}tabs-img-7.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-4.jpg`, `${import.meta.env.BASE_URL}tabs-img-4.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-2.jpg`, `${import.meta.env.BASE_URL}tabs-img-2.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-5.jpg`, `${import.meta.env.BASE_URL}tabs-img-5.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-6.jpg`, `${import.meta.env.BASE_URL}tabs-img-6.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-1.jpg`, `${import.meta.env.BASE_URL}tabs-img-1.webp`],
                [`${import.meta.env.BASE_URL}tabs-img-8.jpg`, `${import.meta.env.BASE_URL}tabs-img-8.webp`]
            ]
        }
    ]

    const [isZoomed, setZoomed] = useState(false);
    const [currentI, setCurrentI] = useState(t?.tabs_section?.btns[0].toLowerCase());
    const [imagesJSON, setImagesJSON] = useState([]);
    const [currentImg, setCurrentImg] = useState(null);

    const handleImagesJson = (tab) => {
        if(currentI === tab.tabName) {
            setImagesJSON(tab.images);
        }
    };

    useEffect(() => {
      
        if(isZoomed) {
            document.body.style.overflow = 'hidden';
            return;   
        }

        document.body.style.overflow = 'auto';

    }, [isZoomed])
    
    
    
    
    
    return (
        <>
            <section className="py-[62px] relative w-full pt-[45px] sm:pt-[62px]">
                <div className="mx-auto max-w-[1194px] px-5">
                    <div className="mb-8 text-center w-full">
                        <h2 className="text-[27px] font-semibold  text-colorgray900 min-[450px]:text-3xl md:text-[40px]">
                            {t?.tabs_section?.title} <span className="text-colorblue">{t?.tabs_section?.blue}</span>
                        </h2>
                    </div>
                    
                    {/* Tabs */}
                    <div className="static sm:relative mb-7">
                        <ul className="-mx-[15px] sm:-mx-[22px] md:-mx-[29.5] flex flex-row flex-wrap">
                            
                            {
                                t?.tabs_section?.btns.map((btn, indx) => (
                                    <li key={indx} className="px-[15px]  sm:px-[22px] md:px-[29.5]">
                                        <button className={`font-normal text-sm md:text-base transition-colors duration-200 ease-in-out outline-none ring-0 ${currentI === btn.toLowerCase() ? 'text-colorblue' : 'text-gray-900'}`} onClick={() => {setCurrentI(btn.toLowerCase())}}>
                                            {btn}
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
                        <div className={`absolute translate-y-0 sm:bottom-auto sm:translate-x-0 right-1/2 translate-x-1/2 bottom-[10px] top-auto sm:right-0 sm:top-1/2 sm:-translate-y-1/2 cursor-pointer font-normal ${currentI === t?.tabs_section?.viewBtn.toLowerCase() ? 'text-colorblue' : 'text-gray-900'}`} onClick={() => setCurrentI(t?.tabs_section?.viewBtn.toLowerCase())}>{t?.tabs_section?.viewBtn}</div>
                    </div>

                    {/* Content */}
                    <div className="w-full relative">
                        {/* Tab 1 */}

                        {
                            tabs.map((tab, indx) => (
                                <div key={indx} className={`w-full relative transition-all duration-300 ease-in-out ${currentI === tab.tabName?.toLowerCase() ? 'translate-y-0 opacity-100 ' : 'translate-y-12 opacity-0 max-h-0 overflow-hidden'}`} onClick={() => handleImagesJson(tab)}>
                                    <div className="flex flex-row flex-wrap -mx-[15px] gap-y-[20px]">
                                        
                                        {
                                            tabs[indx].images.map((img, i) => (
                                                <div key={i} className="w-full min-[575px]:w-1/2 sm:w-1/3 lg:w-1/4 px-[15px]">
                                                    <div className="w-full relative h-[316px] rounded-[9.86px]">
                                                        <picture>
                                                            <source srcSet={img[1]} type="image/webp" />
                                                            <img src={img[0]} alt={`tabs-img-${i + 1}`} onClick={() => {setCurrentImg(i); setZoomed(true)}} width="534" height="633" className="w-full h-full object-cover object-center rounded-[9.86px]" />
                                                        </picture>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {
                isZoomed && (
                    <Zoom_Tabs image={imagesJSON} currentImage={currentImg} onClose={() => {setZoomed(false);}}/>
                )
            }
        </>
            
    )
}

export default Tabs